import { Inbox } from 'react-feather'

import { Item } from './Item'
import { Resource, Folder, isFolder, File, isFile } from '../../types'

interface Props {
  resources: Resource[]
}

export function List({ resources }: Props): JSX.Element {
  const hasResource = resources.length > 0
  const allFolders = resources.filter<Folder>((resource): resource is Folder =>
    isFolder(resource)
  )
  const allFiles = resources.filter<File>((resource): resource is File =>
    isFile(resource)
  )

  return (
    <div className="h-full">
      {hasResource ? (
        <div className="flex flex-wrap items-start">
          {allFolders.map((item) => (
            <Item key={item.id} type="folder" data={item} />
          ))}
          {allFiles.map((item) => (
            <Item key={item.id} type="file" data={item} />
          ))}
        </div>
      ) : (
        <div className="h-full flex items-center justify-center text-gray-300">
          <div>
            <div className="flex items-center justify-center">
              <Inbox size={64} />
            </div>
            <p>No files or folders</p>
          </div>
        </div>
      )}
    </div>
  )
}
