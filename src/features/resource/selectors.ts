import { createSelector } from '@reduxjs/toolkit'
import { filter, find, map } from 'lodash-es'
import type { RootState } from '../../store'
import type { Folder, File, Resource } from '../../types'
import { isFolder, isFile } from '../../types'

export function selectAllResources(state: RootState): Resource[] {
  return state.resource.all
}

export function selectCurrentResourceId(state: RootState): string | undefined {
  return state.resource.currentId
}

export const selectCurrentResource = createSelector(
  selectAllResources,
  selectCurrentResourceId,
  (
    resources: Resource[],
    currentId: string | undefined
  ): Resource | undefined => {
    return find(resources, { id: currentId })
  }
)

export const selectAllParents = createSelector(
  selectAllResources,
  selectCurrentResource,
  (allResources: Resource[], resource: Resource | undefined): Resource[] => {
    if (!resource) {
      return []
    }

    const { parents } = resource

    return map(parents, (item) => {
      const result = find(allResources, { id: item })

      return result!
    })
  }
)

export const selectCurrentSubResources = createSelector(
  selectAllResources,
  selectCurrentResourceId,
  (resources: Resource[], resourceId: string | undefined): Resource[] => {
    return filter(resources, (item) => item.parent === resourceId)
  }
)

interface Count {
  folders: number
  files: number
}

export const selectCurrentAllSubResourceCount = createSelector(
  selectAllResources,
  selectCurrentResourceId,
  (resources: Resource[], resourceId: string | undefined): Count => {
    const allSubResources = resourceId
      ? filter(resources, (item) => item.parents.includes(resourceId))
      : resources
    const allFolders = filter(allSubResources, (item): item is Folder =>
      isFolder(item)
    )
    const allFiles = filter(allSubResources, (item): item is File =>
      isFile(item)
    )

    const folders = allFolders.length
    const files = allFiles.length

    return {
      folders,
      files,
    }
  }
)
