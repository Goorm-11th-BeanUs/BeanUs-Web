import { Box, Button, Typography } from '@mui/material'

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme => theme.palette.primary.main,
          height: '100%',
          width: '65%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '8px',
            color: 'white',
            height: '100%',
          }}
        >
          <Box sx={{ padding: '4rem' }}>
            <Typography
              variant="h1"
              sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'left' }}
            >
              2,233 카페 수 1위
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'left' }}
            >
              제주도에서는 매일 5톤의
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'left' }}
            >
              커피찌꺼기가 나옵니다.
            </Typography>
          </Box>
          <img src="main.png" width="100%" height="50%" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '35%',
          height: '100%',
          backgroundColor: 'white',
          gap: '2rem',
        }}
      >
        <Box>
          <img src="logo_1.png" height={160} />
        </Box>
        <Typography sx={{ color: theme => theme.palette.grey[300] }} variant="h4">
          진흙속 커피 찌꺼기를 꺼내다.
        </Typography>
        <Button size="small">
          <img src="kakaoLoginButton.png" />
        </Button>
      </Box>
    </Box>
  )
}

export default Login
