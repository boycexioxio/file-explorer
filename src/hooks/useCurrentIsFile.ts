import { isFile } from '../types'
import { useCurrentResource } from './useCurrentResource'

export function useCurrentIsFile(): boolean {
  const current = useCurrentResource()

  return isFile(current)
}
