import { Link } from 'react-router-dom'
import { ChevronRight } from 'react-feather'

import { Tooltip } from '../Tooltip'
import { Ellipsis } from '../Ellipsis'
import { Resource } from '../../types'
import { normalize } from '../../helpers/url'

interface Props {
  data: Resource
}

export function Item({ data }: Props): JSX.Element {
  const { id, name, parents } = data
  const to = normalize(parents, id)

  return (
    <span className="flex items-center">
      <Link to={to} className="text-gray-500 hover:underline">
        <Tooltip title={name} disabled={name.length <= 10}>
          <Ellipsis content={name} />
        </Tooltip>
      </Link>
      <span className="mx-2 text-gray-500">
        <ChevronRight />
      </span>
    </span>
  )
}
