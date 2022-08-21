import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  onClick?: () => void
}

const baseClasses =
  'px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md focus:outline-none focus:ring  focus:ring-opacity-80'

const theme = {
  primary: 'bg-blue-600 hover:bg-blue-500 focus:ring-blue-300',
  secondary: 'bg-gray-300 hover:bg-gray-200 focus:ring-gray-300 text-gray-900',
  danger:'bg-red-600 hover:bg-red-400 focus:ring-red-200'
}

export function Button({
  type = 'secondary',
  disabled = false,
  onClick,
  children,
}: Props): JSX.Element {
  const classnames = `${baseClasses} ${
    type && theme[type] ? theme[type] : ''
  } ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`

  const handleClick = (): void => {
    if (disabled) {
      return
    }

    onClick && onClick()
  }

  return (
    <button className={classnames} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
