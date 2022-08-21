import type { ChangeEvent } from 'react'

interface Props {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export function Textarea({
  placeholder = 'Please input ...',
  value = '',
  onChange,
}: Props): JSX.Element {
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const val = e.target.value

    onChange && onChange(val)
  }

  return (
    <div className="relative">
      <textarea
        className="w-full py-2 px-4 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        placeholder={placeholder}
        rows={6}
        value={value}
        onInput={handleInput}
      ></textarea>
    </div>
  )
}
