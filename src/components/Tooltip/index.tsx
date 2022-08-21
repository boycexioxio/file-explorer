import type { PropsWithChildren } from 'react'
import { useState } from 'react'

type Direction = 'bottom' | 'left'

interface Props extends PropsWithChildren {
  title: string
  disabled?: boolean
  direction?: Direction
}

const containerBaseClass =
  'absolute z-50 px-2 py-1 rounded-lg bg-black text-white text-sm'
const containerDirections: Record<Direction, string> = {
  bottom: 'left-1/2 top-full -translate-x-1/2 mt-3',
  left: 'right-full top-1/2 -translate-y-1/2 mr-3',
}

const triangleBaseClass = 'absolute w-4 h-4 bg-black rotate-45'
const triangleDirections: Record<Direction, string> = {
  bottom: 'left-1/2 -top-2 -translate-x-1/2',
  left: 'top-1/2 -right-2 -translate-y-1/2',
}

export function Tooltip({
  title,
  disabled = false,
  direction = 'bottom',
  children,
}: Props): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    if (disabled) {
      return
    }

    setVisible(true)
  }
  const handleMouseLeave = (): void => {
    setVisible(false)
  }

  const containerClass = `${containerBaseClass} ${
    containerDirections[direction]
  } ${visible ? '' : 'hidden'}`
  const triangleClass = `${triangleBaseClass} ${triangleDirections[direction]}`

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={containerClass}>
        <div className={triangleClass}></div>
        <div className="relative whitespace-nowrap">{title}</div>
      </div>
    </div>
  )
}
