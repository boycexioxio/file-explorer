import { useSelector } from 'react-redux'
import { selectCurrentResourceId } from '../features/resource/selectors'

export function useCurrentId(): string | undefined {
  return useSelector(selectCurrentResourceId)
}
