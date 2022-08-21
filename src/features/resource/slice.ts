import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Resource } from '../../types'

export interface ResourceState {
  currentId: string | undefined
  all: Resource[]
}

const initialState: ResourceState = {
  currentId: undefined,
  all: [],
}

export const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {
    addResource(state, action: PayloadAction<Resource>) {
      state.all.push(action.payload)
    },
    setCurrent(state, action: PayloadAction<string | undefined>) {
      state.currentId = action.payload
    },
  },
})

export const { addResource, setCurrent } = resourceSlice.actions

export default resourceSlice.reducer
