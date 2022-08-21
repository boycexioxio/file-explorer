import { useDispatch } from 'react-redux'
import { FilePlus, FolderPlus } from 'react-feather'

import { Tooltip } from '../Tooltip'
import { showCreation } from '../../features/creation/slice'
import { useCurrentIsFile } from '../../hooks/useCurrentIsFile'

export function Sidebar(): JSX.Element {
  const dispatch = useDispatch()

  const currentIsFile = useCurrentIsFile()
  const disabled = currentIsFile

  const handleCreateFolder = () => {
    if (disabled) {
      return
    }

    dispatch(showCreation('folder'))
  }

  const handleCreateFile = () => {
    if (disabled) {
      return
    }

    dispatch(showCreation('file'))
  }

  return (
    <div className="w-20 h-full bg-slate-800 text-gray-100">
      <ul className="w-14 m-auto py-5">
        <li className="my-1" onClick={handleCreateFolder}>
          <Tooltip title="New Folder" direction="left">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-lg hover:bg-gray-700 ${
                disabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <FolderPlus />
            </div>
          </Tooltip>
        </li>
        <li className="my-1" onClick={handleCreateFile}>
          <Tooltip title="New File" direction="left">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-lg hover:bg-gray-700 ${
                disabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <FilePlus />
            </div>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}
