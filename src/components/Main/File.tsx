interface Props {
  content: string
}

export function File({ content }: Props): JSX.Element {
  return <div className="whitespace-pre">{content}</div>
}
