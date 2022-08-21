const key = 'explorer_state'

export function setState<T>(state: T): void {
  localStorage.setItem(key, JSON.stringify(state))
}

export function getState<T>(): T | undefined {
  const state = localStorage.getItem(key)

  if (!state) {
    return undefined
  }

  return JSON.parse(state)
}
