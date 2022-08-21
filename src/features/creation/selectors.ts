import type { RootState } from '../../store'

export function selectCreationVisible(state: RootState) {
  return state.creation.visible
}

export function selectCreationType(state: RootState) {
  return state.creation.targetType
}
