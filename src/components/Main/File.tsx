interface Props {
  content: string
}

export function File({ content }: Props): JSX.Element {
  return <div className="w-0 whitespace-pre">{content}</div>
}
