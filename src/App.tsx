import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { last } from 'lodash-es'

import { Sidebar } from './components/Sidebar'
import { Search } from './components/Search'
import { Breadcrumb } from './components/Breadcrumb'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Creation } from './components/Creation'
import { Spin } from './components/Spin'
import { setCurrent } from './features/resource/slice'
import { selectCurrentAllSubResourceCount } from './features/resource/selectors'
import { search } from './api/search'
import { useCurrentIsFile } from './hooks/useCurrentIsFile'

export default function App(): JSX.Element {
  const location = useLocation()
  const dispatch = useDispatch()
  const lastId = last(location.pathname.split('/'))

  useEffect(() => {
    const id = lastId || undefined

    dispatch(setCurrent(id))
  }, [dispatch, lastId])

  const currentIsFile = useCurrentIsFile()

  const [searching, setSearching] = useState<boolean>(false)

  const handleSearch = async (value: string): Promise<void> => {
    setSearching(true)

    try {
      await search(value)
    } catch (err) {
      console.log('request error')
    }
  }

  const handleCancelSearch = (): void => {
    setSearching(false)
  }

  const currentAllSubResourceCount = useSelector(
    selectCurrentAllSubResourceCount
  )

  return (
    <Spin spinning={searching} onCancel={handleCancelSearch}>
      <div className="h-full flex">
        <div className="flex-1 p-5 flex flex-col">
          <div className="flex-0 flex justify-center mb-10">
            <Search onSearch={handleSearch} />
          </div>
          <div className="flex-0">
            <Breadcrumb />
          </div>
          <div className="flex-1">
            <Routes>
              <Route path="*" element={<Main />}></Route>
            </Routes>
          </div>
          <div className="flex-0">
            {currentIsFile ? (
              <p className="my-5 text-right text-gray-400">
                You are currently viewing a file.
              </p>
            ) : (
              <Footer
                folders={currentAllSubResourceCount.folders}
                files={currentAllSubResourceCount.files}
              />
            )}
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
        <Creation />
      </div>
    </Spin>
  )
}
