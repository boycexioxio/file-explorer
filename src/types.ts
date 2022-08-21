export interface Folder {
  type: 'folder'
  id: string
  name: string
  parent?: string
  parents: string[]
}

export interface File {
  type: 'file'
  id: string
  name: string
  content: string
  parent?: string
  parents: string[]
}

export type ResourceType = 'file' | 'folder'
export type Resource = Folder | File

export function isFile(resource: Resource | undefined): resource is File {
  return resource ? resource.type === 'file' : false
}

export function isFolder(resource: Resource | undefined): resource is Folder {
  return resource ? resource.type === 'folder' : false
}
