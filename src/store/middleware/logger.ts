import type { Middleware } from 'redux'

export const logger: Middleware = function (store) {
  return (next) => (action) => {
    console.group(action.type)
    console.info('=> dispatching', action)

    const result = next(action)

    console.log('<= next state', store.getState())
    console.groupEnd()

    return result
  }
}
