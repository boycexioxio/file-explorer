import type { PropsWithChildren } from 'react'
import { Loader } from 'react-feather'

import { Button } from '../Button'

interface Props extends PropsWithChildren {
  spinning?: boolean
  onCancel?: () => void
}

export function Spin({ spinning, onCancel, children }: Props): JSX.Element {
  const handleCancel = (): void => {
    onCancel && onCancel()
  }

  return (
    <div className="relative h-full">
      {children}
      {spinning ? (
        <div className="absolute left-0 top-0 w-full h-full bg-white opacity-80 flex items-center justify-center">
          <div>
            <p className="text-center font-black mb-10 text-3xl text-slate-500">More to come…</p>
            <span className="block w-6 h-6 m-auto animate-spin">
              <Loader />
            </span>
            <p className="w-1/2 mx-auto my-5 font-bold text-slate-500">
              Your search request has been sent out and being processed by a full-text search engine
              that would be hooked with our application soon. Please feel free to
              cancel this search request and try it later again when this feature is ready. Thank you!
            </p>
            {onCancel && (
              <div className="text-center">
                <Button onClick={handleCancel} type="danger">Cancel</Button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
