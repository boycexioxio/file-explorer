interface Props {
  content: string
  length?: number
}

export function Ellipsis({ content, length = 10 }: Props): JSX.Element {
  const text =
    content.length > length ? content.substring(0, length) + '...' : content

  return <span>{text}</span>
}
