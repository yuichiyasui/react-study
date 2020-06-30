import React, { FC } from 'react'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

import 'assets/css/components/topContent.scss'

const TopContent: FC = () => {
  return (
    <Paper className="paper">
      <IconButton>
        <SearchIcon type="submit" />
      </IconButton>
      <InputBase />
    </Paper>
  )
}

export default TopContent
