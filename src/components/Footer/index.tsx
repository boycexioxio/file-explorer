interface Props {
  files: number
  folders: number
}

export function Footer({ files, folders }: Props): JSX.Element {
  const fileWord = files <= 1 ? 'file' : 'files'
  const folderWord = folders <= 1 ? 'folder' : 'folders'

  return (
    <p className="my-5 text-right text-gray-400">
      Total: {files} {fileWord} and {folders} {folderWord}.
    </p>
  )
}
