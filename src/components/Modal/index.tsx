import type { PropsWithChildren } from 'react'

import { Button } from '../Button'

interface Props extends PropsWithChildren {
  visible?: boolean
  title?: string
  okDisabled?: boolean
  onOk?: () => void
  onCancel?: () => void
}

export function Modal({
  visible = false,
  title = '',
  okDisabled = false,
  onOk,
  onCancel,
  children,
}: Props): JSX.Element | null {
  if (!visible) {
    return null
  }

  const handleOk = (): void => {
    if (okDisabled) {
      return
    }

    onOk && onOk()
  }

  const handelCancel = (): void => {
    onCancel && onCancel()
  }

  return (
    <div className="fixed left-0 top-0 w-full h-full">
      <div
        className="absolute left-0 top-0 w-full h-full bg-black opacity-40"
        onClick={handelCancel}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 rounded-lg bg-white">
        <div className="px-8 py-6">
          <h3 className="text-xl pb-3 border-b">{title}</h3>
          <div className="h-64 my-4">{children}</div>
          <div className="flex justify-end space-x-2">
            <Button onClick={handelCancel}>Cancel</Button>
            <Button type="primary" disabled={okDisabled} onClick={handleOk}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
