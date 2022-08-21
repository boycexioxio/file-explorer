import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ResourceType } from '../../types'

export interface creationState {
  visible: boolean
  targetType: ResourceType | undefined
}

const initialState: creationState = {
  visible: false,
  targetType: undefined,
}

export const creationSlice = createSlice({
  name: 'creation',
  initialState,
  reducers: {
    showCreation(state, action: PayloadAction<ResourceType>) {
      state.visible = true
      state.targetType = action.payload
    },
    hideCreation(state) {
      state.visible = false
      state.targetType = undefined
    },
  },
})

export const { showCreation, hideCreation } = creationSlice.actions

export default creationSlice.reducer
