import { useNavigate } from 'react-router-dom'
import { Folder as FolderIcon, File as FileIcon } from 'react-feather'

import { Tooltip } from '../Tooltip'
import { Ellipsis } from '../Ellipsis'
import type { Folder, File } from '../../types'
import { normalize } from '../../helpers/url'

interface FolderProps {
  type: 'folder'
  data: Folder
}

interface FileProps {
  type: 'file'
  data: File
}

type Props = FolderProps | FileProps

export function Item({ type, data }: Props): JSX.Element {
  const navigate = useNavigate()

  const handleDoubleClick = (): void => {
    const to = normalize(data.parents, data.id)

    navigate(to)
  }

  return (
    <div
      className="m-2 cursor-pointer select-none"
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex items-center justify-center w-32 h-32 rounded-lg text-gray-500 bg-gray-200 hover:bg-gray-300">
        {type === 'file' ? <FileIcon size={48} /> : <FolderIcon size={48} />}
      </div>
      <h4 className="py-2 text-center">
        <Tooltip title={data.name} disabled={data.name.length <= 10}>
          <Ellipsis content={data.name} />
        </Tooltip>
      </h4>
    </div>
  )
}
