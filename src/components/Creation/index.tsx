import { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Info } from 'react-feather'
import { concat } from 'lodash-es'

import { Modal } from '../Modal'
import { Input } from '../Input'
import { Textarea } from '../Textarea'
import { hideCreation } from '../../features/creation/slice'
import {
  selectCreationVisible,
  selectCreationType,
} from '../../features/creation/selectors'
import { addResource } from '../../features/resource/slice'
import { uniqId } from '../../helpers/id'
import { useCurrentId } from '../../hooks/useCurrentId'
import { useCurrentResource } from '../../hooks/useCurrentResource'

export function Creation(): JSX.Element {
  const dispatch = useDispatch()
  const visible = useSelector(selectCreationVisible)
  const type = useSelector(selectCreationType)
  const title = type === 'folder' ? 'New Folder' : 'New File'

  const currentId = useCurrentId()
  const currentResource = useCurrentResource()

  const [name, setName] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const canSubmit = useMemo(() => {
    if (type === 'folder') {
      return !!name
    }

    return !!name && !!content
  }, [type, name, content])

  const handleChangeName = (value: string): void => {
    setName(value.trim())
  }

  const handleChangeContent = (value: string): void => {
    setContent(value)
  }

  const resetForm = (): void => {
    setName('')
    setContent('')
  }

  const handleOk = (): void => {
    const id = uniqId()
    const parents: string[] = currentResource
      ? concat(currentResource.parents, currentResource.id)
      : []

    if (type === 'folder') {
      dispatch(
        addResource({
          type,
          id,
          name,
          parent: currentId,
          parents,
        })
      )
    } else if (type === 'file') {
      dispatch(
        addResource({
          type,
          id,
          name,
          content,
          parent: currentId,
          parents,
        })
      )
    }
    dispatch(hideCreation())
    resetForm()
  }

  const handleCancel = (): void => {
    dispatch(hideCreation())
    resetForm()
  }

  return (
    <Modal
      visible={visible}
      title={title}
      okDisabled={!canSubmit}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        icon={<Info />}
        placeholder="Please input name"
        value={name}
        onChange={handleChangeName}
      />
      {type === 'file' ? (
        <div className="mt-5">
          <Textarea
            value={content}
            placeholder="Please input file content"
            onChange={handleChangeContent}
          />
        </div>
      ) : null}
    </Modal>
  )
}
