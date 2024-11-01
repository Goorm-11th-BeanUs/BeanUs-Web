import { useRef } from 'react'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ImgBox from './component/ImgBox'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const IMAGE1 = 'https://picsum.photos/200/300?random=1'
const IMAGE2 = 'https://picsum.photos/200/300?random=2'
const IMAGE3 = 'https://picsum.photos/200/300?random=3'
const IMAGE4 = 'https://picsum.photos/200/300?random=4'

// Swiper의 모듈을 추가로 설정 (예: Navigation)
SwiperCore.use([Navigation])

const WelcomePage = () => {
  const swiperRef = useRef<SwiperCore>()

  // 슬라이드 외부 핸들러
  const goToNextSlide = () => {
    swiperRef.current?.slideNext(300, true)
  }
  const goToPrevSlide = () => {
    swiperRef.current?.slidePrev(300, true)
  }

  return (
    <div>
      <Swiper
        modules={[Pagination]} // 페이지네이션, 자동재생 등의 기능을 불러옴
        onSwiper={swiper => (swiperRef.current = swiper)}
        centeredSlides={true} //가운데 정렬
        slidesPerView={1.5} //한 슬라이드에 보여줄 갯수
        spaceBetween={50} //슬라이드간 거리
        loop={true} //슬라이드 반복 여부
        autoplay={{ delay: 5000 }} //자동 슬라이드 시간
        navigation // 이동 화살표
        pagination={{
          clickable: true,
        }} //pager여부
      >
        <SwiperSlide>
          <ImgBox imgUrl={IMAGE1}></ImgBox>
        </SwiperSlide>
        <SwiperSlide>
          <ImgBox imgUrl={IMAGE2}></ImgBox>
        </SwiperSlide>
        <SwiperSlide>
          <ImgBox imgUrl={IMAGE3}></ImgBox>
        </SwiperSlide>
        <SwiperSlide>
          <ImgBox imgUrl={IMAGE4}></ImgBox>
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => {
          goToPrevSlide()
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          goToNextSlide()
        }}
      >
        다음
      </button>
    </div>
  )
}

export default WelcomePage
