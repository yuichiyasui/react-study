import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import backgroundImg from './../assets/images/background.jpg'

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw',
      zIndex: -100,
      position: 'absolute',
      top: 0,
    },
  }),
)

const Top: FC = () => {
  const classes = useStyle()
  return <div className={classes.background}></div>
}
export default Top
