import type { Middleware } from 'redux'
import { setState } from '../../helpers/storage'

export const storage: Middleware = function storage(store) {
  return (next) => (action) => {
    const result = next(action)
    const state = store.getState()

    setState(state)

    return result
  }
}
