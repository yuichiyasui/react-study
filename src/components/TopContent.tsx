import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

import 'assets/css/components/topContent.scss'

const TopContent: FC = () => {
  /** State */
  const [keyword, setKeyword] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  /** ルーティング */
  const history = useHistory()
  const handleSubmit = () => {
    history.push('/search/' + keyword)
  }
  return (
    <Paper className="paper" component="form" onSubmit={handleSubmit}>
      <IconButton>
        <SearchIcon type="submit" />
      </IconButton>
      <InputBase placeholder="無料素材を検索" onChange={handleChange} />
    </Paper>
  )
}

export default TopContent
