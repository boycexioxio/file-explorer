import type { ReactNode, ChangeEvent } from 'react'

interface Props {
  icon: ReactNode
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export function Input({
  icon,
  placeholder = 'Please input ...',
  value = '',
  onChange,
}: Props): JSX.Element {
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value

    onChange && onChange(val)
  }

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        {icon}
      </span>
      <input
        type="text"
        className="w-full py-2 pl-12 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
        value={value}
        placeholder={placeholder}
        onInput={handleInput}
      />
    </div>
  )
}
