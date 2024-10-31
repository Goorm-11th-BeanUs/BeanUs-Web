import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Routes'

const ADMIN_ROLE = 'ADMIN'

function App() {
  const newRouter = router(ADMIN_ROLE)

  return (
    <>
      <RouterProvider router={newRouter} />
    </>
  )
}

export default App
