import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, IconButton, Input, TextField, Typography } from '@mui/material'
import { useRef } from 'react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation])

const Main = () => {
  const swiperRef = useRef<SwiperCore>()

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext()
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
    >
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        style={{ width: '65%', height: '100%' }}
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: theme => theme.palette.primary.main,
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '8px',
              color: 'white',
              backgroundImage: 'url("main.png")',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPositionY: '200px',
            }}
          >
            <Box
              display="flex"
              sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <img
                src="service.gif"
                style={{
                  width: '100%',
                  position: 'absolute',
                  top: 'calc(50% - 100px)',
                  right: 'calc(50% - 300px)',
                }}
              />
            </Box>
            {/* <img src="main.png" style={{ width: '90%', height: '300px' }} /> */}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: theme => theme.palette.primary.main,
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '8px',
              color: 'white',
              backgroundImage: 'url("main_1.png")',
              backgroundSize: '80%',
              backgroundRepeat: 'no-repeat',
              backgroundPositionY: '500px',
            }}
          >
            <Box
              display="flex"
              sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '50px',
                position: 'relative',
              }}
            >
              <img
                src="recycle.gif"
                style={{
                  width: '100%',
                  position: 'absolute',
                  top: '0px',
                  right: 'calc(50% - 300px)',
                }}
              />
            </Box>
            {/* <img src="main_1.png" style={{ width: '90%', height: '300px' }} /> */}
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 10,
          top: '50%',
          left: '50px',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: theme => theme.palette.grey[600],
            color: theme => theme.palette.grey[600],
            ':hover': {
              backgroundColor: theme => theme.palette.grey[300],
              color: theme => theme.palette.grey[600],
            },
            borderRadius: '10%',
          }}
          size="large"
        >
          <ArrowBackIosIcon sx={{ color: theme => theme.palette.grey[700] }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: theme => theme.palette.grey[600],
            color: theme => theme.palette.grey[600],
            ':hover': {
              backgroundColor: theme => theme.palette.grey[300],
              color: theme => theme.palette.grey[600],
            },
            borderRadius: '10%',
          }}
          size="large"
        >
          <ArrowForwardIosIcon sx={{ color: theme => theme.palette.grey[700] }} />
        </IconButton>
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
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" placeholder='아이디를 입력해주세요.' sx={{height:'50px'}}/>
          <TextField id="standard-basic" type='password' placeholder='비밀번호를 입력해주세요.' sx={{height:'50px'}}/>
          <Button sx={{width:'100%',background:'#000', color:'#fff', borderRadius:'8px', marginTop:'15px',height:'50px'}} >
            로그인
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Main
