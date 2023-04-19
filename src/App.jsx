import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, { taskLoader } from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Planning from './pages/Planning'
import Categories from './pages/Categories'
import LoginPage from './pages/login'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={taskLoader}/>
      <Route path="planning" element={<Planning />} />
      <Route path="categories" element={<Categories />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<LoginPage />} />
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
