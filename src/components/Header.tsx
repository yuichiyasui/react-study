import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <h2>React Study</h2>
      </Toolbar>
    </AppBar>
  )
}

export default Header
