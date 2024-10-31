import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, IconButton, Typography } from '@mui/material'
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
            }}
          >
            <Box
              display="flex"
              sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="service.gif"
                style={{
                  width: '100%',
                  height: '400px',
                }}
              />
            </Box>
            <img src="main.png" style={{ width: '90%', height: '300px' }} />
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
            }}
          >
            <Box
              display="flex"
              sx={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '50px',
              }}
            >
              <img
                src="recycle.gif"
                style={{
                  width: '100%',
                  height: '400px',
                }}
              />
            </Box>
            <img src="main_1.png" style={{ width: '90%', height: '300px' }} />
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
        <Button size="small">
          <img src="kakaoLoginButton.png" />
        </Button>
      </Box>
    </Box>
  )
}

export default Main
