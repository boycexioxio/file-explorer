import { uniqueId } from 'lodash-es'

export function uniqId() {
  const random = Math.random().toString(36).substring(2)

  return `${random}-${uniqueId()}`
}
