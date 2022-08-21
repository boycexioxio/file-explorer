import { MoreHorizontal, ChevronRight } from 'react-feather'

import { Item } from './Item'
import type { Resource } from '../../types'

interface Props {
  data: Resource[]
}

export function Group({ data }: Props): JSX.Element {
  const collapse = data.length >= 4

  if (collapse) {
    return (
      <span className="relative flex items-center visible-active">
        <span className="cursor-pointer">
          <MoreHorizontal />
        </span>
        <span className="mx-2 text-gray-500">
          <ChevronRight />
        </span>
        <ul className="absolute top-5 z-50 p-4 bg-white drop-shadow-xl hidden">
          {data.map((item) => (
            <li key={item.id} className="my-2">
              <Item data={item} />
            </li>
          ))}
        </ul>
      </span>
    )
  }

  return (
    <>
      {data.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </>
  )
}
