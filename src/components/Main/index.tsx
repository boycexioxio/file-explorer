import { useSelector } from 'react-redux'

import { List } from './List'
import { File } from './File'
import { selectCurrentSubResources } from '../../features/resource/selectors'
import { isFile } from '../../types'
import { useCurrentResource } from '../../hooks/useCurrentResource'

export function Main(): JSX.Element {
  const subResources = useSelector(selectCurrentSubResources)
  const current = useCurrentResource()

  const file = isFile(current)

  return (
    <div className="h-full overflow-auto border p-5 rounded">
      {file ? (
        <File content={current.content} />
      ) : (
        <List resources={subResources} />
      )}
    </div>
  )
}
