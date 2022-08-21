export function normalize(parents?: string[], current?: string): string {
  if (!parents) {
    return current || ''
  }

  const previous = parents.join('/')

  if (!current) {
    return previous
  }

  return `${previous}/${current}`
}
