import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Header: FC = () => {
  const linkStyle = { color: 'white', textDecoration: 'none' }
  return (
    <AppBar position="absolute">
      <Toolbar>
        <a style={linkStyle} href="/">
          <h2>React Study</h2>
        </a>
      </Toolbar>
    </AppBar>
  )
}

export default Header
