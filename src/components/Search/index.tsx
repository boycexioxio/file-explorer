import { useState } from 'react'
import { Search as SearchIcon } from 'react-feather'

import { Input } from '../Input'
import { Button } from '../Button'

interface Props {
  onSearch: (value: string) => void
}

export function Search({ onSearch }: Props): JSX.Element {
  const [keyword, setKeyword] = useState<string>('')
  const canSubmit = !!keyword

  const handleChangeKeyword = (value: string): void => {
    setKeyword(value)
  }

  const handleReset = (): void => {
    setKeyword('')
  }

  const handleSearch = (): void => {
    onSearch(keyword)
  }

  return (
    <div className="flex space-x-2">
      <div className="w-96">
        <Input
          icon={<SearchIcon />}
          value={keyword}
          onChange={handleChangeKeyword}
        />
      </div>
      <div className="flex space-x-2">
        <Button onClick={handleReset}>Reset</Button>
        <Button type="primary" disabled={!canSubmit} onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  )
}
