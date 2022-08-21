import { Home, ChevronRight } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Ellipsis } from '../Ellipsis'
import { Tooltip } from '../Tooltip'
import { Group } from './Group'
import { selectAllParents } from '../../features/resource/selectors'
import { useCurrentResource } from '../../hooks/useCurrentResource'
import { normalize } from '../../helpers/url'

export function Breadcrumb(): JSX.Element {
  const navigate = useNavigate()
  const parents = useSelector(selectAllParents)
  const current = useCurrentResource()
  const to = normalize(current?.parents, current?.id)

  const homeOnly = parents.length === 0 && !current

  const handleBack = (): void => {
    navigate(-1)
  }

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center whitespace-nowrap">
        <Link to="/" className="text-gray-500">
          <Home />
        </Link>
        {homeOnly ? null : (
          <span className="mx-2 text-gray-500">
            <ChevronRight />
          </span>
        )}
        <Group data={parents} />
        {current ? (
          <Link to={to} className="text-blue-600 hover:underline">
            <Tooltip title={current.name} disabled={current.name.length <= 10}>
              <Ellipsis content={current.name} />
            </Tooltip>
          </Link>
        ) : null}
      </div>
      <div className="text-gray-500 cursor-pointer" onClick={handleBack}>
        Back
      </div>
    </div>
  )
}
