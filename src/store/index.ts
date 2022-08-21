import { configureStore } from '@reduxjs/toolkit'
import resourceReducer from '../features/resource/slice'
import creationReducer from '../features/creation/slice'
import { storage } from './middleware/storage'
import { getState } from '../helpers/storage'

const initialState = getState<any>()

export const store = configureStore({
  reducer: {
    resource: resourceReducer,
    creation: creationReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([storage])
  },
  preloadedState: initialState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
