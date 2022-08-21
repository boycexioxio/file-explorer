import { useSelector } from 'react-redux'
import { selectCurrentResource } from '../features/resource/selectors'
import { Resource } from '../types'

export function useCurrentResource(): Resource | undefined {
  return useSelector(selectCurrentResource)
}
