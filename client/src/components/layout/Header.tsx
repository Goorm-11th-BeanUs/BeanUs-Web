import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date()
      const day = now.getDate().toString().padStart(2, '0')
      const month = (now.getMonth() + 1).toString().padStart(2, '0')
      // const year = now.getFullYear()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()]
      setCurrentTime(`${month}.${day} (${dayOfWeek}) 오전 ${hours}:${minutes}`)
    }

    updateCurrentTime()
    const intervalId = setInterval(updateCurrentTime, 60000) // 1분마다 업데이트

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: 'transparent',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2 }}
            to={'/'}
            component={Link}
          >
            <img src="/logo.png" alt="logo" height={30} />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            {currentTime}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
