// import AuthLayout from '@/components/layout'

// 아이콘 검색: https://mui.com/material-ui/material-icons/
// import { ADMIN_ROLE } from '@/constants/AdminType'
import { getRoutesByRole } from '../constants/Navigator'
// import { POST_TYPE } from '@/constants/PostType'
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../components/layout'
import Main from '../page/Main'
import NotFound from '../page/NotFound'
import Collect from '../page/collect'
import Login from '../page/login/Login'
import CollectHistory from '../page/collect/collectHistory'

// import LoginPage from '@/page/Login'
// import NotFound from '@/page/NotFound'
// import AdminCreate from '@/page/admin/Create'
// import AdminDetail from '@/page/admin/Detail'
// import AdminList from '@/page/admin/List'
// import BannerCreate from '@/page/banner/Create'
// import BannerDetail from '@/page/banner/Detail'
// import BannerList from '@/page/banner/List'
// import CalcurateList from '@/page/calculate/List'
// import EstimateList from '@/page/estimate/List'
// import GuestCreate from '@/page/guest/Create'
// import GuestDetail from '@/page/guest/Detail'
// import GuestList from '@/page/guest/List'
// import HomeManagerDetail from '@/page/homeManager/Detail'
// import HomeManagerList from '@/page/homeManager/List'
// import HomeManagerReviewDetail from '@/page/homeManager/ReviewDetail'
// import HomeManagerCreateWrapper from '@/page/homeManager/components/HomeManagerCreateWrapper'
// import HotelCreate from '@/page/hotel/Create'
// import HotelDetail from '@/page/hotel/Detail'
// import HotelList from '@/page/hotel/List'
// import MemberDetail from '@/page/member/Detail'
// import MemberList from '@/page/member/List'
// import MyPage from '@/page/mypage/MyPage'
// import PointDetail from '@/page/point/Detail'
// import PointList from '@/page/point/List'
// import PostCreate from '@/page/post/Create'
// import PostDetail from '@/page/post/Detail'
// import PostList from '@/page/post/List'
// import ProductCreate from '@/page/product/Create'
// import ProductDetail from '@/page/product/Detail'
// import ProductList from '@/page/product/List'
// import ReservationDetail from '@/page/reservation/Detail'
// import ReservationList from '@/page/reservation/List'
// import ReviewCreate from '@/page/reviews/Create'
// import ReviewDetail from '@/page/reviews/Detail'
// import ReviewList from '@/page/reviews/List'
// import TermsDetail from '@/page/terms/Detail'
// import TermsList from '@/page/terms/List'
// import BorderColorIcon from '@mui/icons-material/BorderColor'
// import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded'
// import CheckIcon from '@mui/icons-material/Check'
// import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded'
// import DashboardIcon from '@mui/icons-material/Dashboard'
// import FlightIcon from '@mui/icons-material/Flight'
// import HailIcon from '@mui/icons-material/Hail'
// import HolidayVillageIcon from '@mui/icons-material/HolidayVillage'
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
// import NotificationsIcon from '@mui/icons-material/Notifications'
// import PeopleIcon from '@mui/icons-material/People'
// import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded'
// import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor'
// import TableViewIcon from '@mui/icons-material/TableView'

export const INDEX_PATH = '/'
export const LOGIN_PATH = '/login'
export const MYPAGE_PATH = '/mypage'

export const ADMIN_ROLE = 'ADMIN'

/** 페이지 메뉴 */
export const PAGE_ROUTES: any[] = [
  {
    id: 'HOME',
    path: INDEX_PATH,
    index: true,
    element: <Main />,
    handle: {
      name: '홈',
      // icon: () => <DashboardIcon />,
    },
  },
  {
    id: 'MYPAGE',
    path: MYPAGE_PATH,
    element: <>My Page</>,
    hidden: true,
    handle: {
      name: '마이페이지',
    },
  },
  {
    id: 'COLLECT',
    path: '/collect',
    hidden: true,
    handle: {
      name: '수거',
    },
    children: [
      {
        id: 'MAIN',
        index: true,
        element: <Collect />,
        hidden: true,
      },
      {
        id: 'HISTORY',
        path: 'history',
        element: <CollectHistory />,
        handle: {
          name: '포인트 상세',
        },
        hidden: true,
      },
    ],
  },
]

export const router = (role: string) => {
  const pageRoutes = getRoutesByRole(role)

  return createBrowserRouter([
    {
      path: LOGIN_PATH,
      element: <Login/>,
    },
    {
      element: <AuthLayout />,
      children: pageRoutes,
    },
    {
      path: '*',
      element: <AuthLayout />,
      children: [
        {
          element: <NotFound />,
        },
      ],
    },
  ])
}
