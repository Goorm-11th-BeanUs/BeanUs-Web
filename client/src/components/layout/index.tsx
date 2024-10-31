// import Navbar from '@/components/layout/navbar'
// import Sidebar from '@/components/layout/sidebar'
// import PageLoading from '@/components/loading/PageLoading'
// import { useAuth } from '@/hooks/useAuth'
// import { useSidebar } from '@/hooks/useSidebar'
// import { LOGIN_PATH } from '@/routes/Routes'
// import { loginUserRoleState } from '@/store/login'
// import { Box, Stack } from '@mui/material'
import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header'
// import { useRecoilValue } from 'recoil'

const AuthLayout = () => {
  const isOpenSideBar = false // TODO: sidebar 있을 경우에만 true로 변경
  // const { isOpenSideBar, toggleSideBar } = useSidebar()
  // const { isLogin, onLogOut } = useAuth()
  // const loginUserRole = useRecoilValue(loginUserRoleState)
  // const location = useLocation()

  // // 로그인 이동
  // if (!isLogin) {
  //   return <Navigate to={LOGIN_PATH} state={{ from: location }} />
  // }

  // if (!loginUserRole) {
  //   return <PageLoading />
  // }

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flex: '1 1 auto',
          maxWidth: '100%',
          // paddingTop: 64,
          paddingLeft: isOpenSideBar ? 280 : 0,
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            minWidth: '1024px',
            margin: '0 auto',
            // padding: '32px',
            paddingBottom: '120px',
          }}
        >
          <Stack spacing={3} sx={{ width: '100%' }}>
            <Outlet key={location.pathname} />
          </Stack>
        </Box>
      </div>
      {/* <Navbar /> */}
      {/* <Sidebar loginUserRole={loginUserRole} /> */}
    </>
  )
}
export default AuthLayout
