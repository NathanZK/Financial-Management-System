import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Planning from './pages/Planning'
import Categories from './pages/Categories'
import LoginPage, { saveUser } from './pages/login'
import LandingPage from './pages/LandingPage'
import Register, { registerUser } from './pages/Register';

//loaders
import { taskLoader } from './services/taskServices'
import NotFound from './pages/NotFound'
import { addCategory } from './services/categoryServices'
import { addPlan } from './services/planningServices'
import Plans from './pages/BudgetManager';
import FundMe from './pages/FundMe'
import Donate from './pages/Donate'
import Campaign from './pages/Campaign'
import { addPost } from './services/FundService'
import CampaignLayout from './layouts/CampaignLayout'
import { donate } from './services/donationService'
import Error from './pages/Error'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error/>}>
      <Route index element= {<LandingPage/>}/>
      
      <Route path= 'dashboard' element = {<DashboardLayout />}>
        <Route index element= { <Dashboard/> } loader={taskLoader}/>
        <Route path="planning" element={<Planning/>} action={addPlan}/>
        <Route path="categories" element={<Categories />} action={addCategory}  />
        <Route path="plans" element={<Plans />} />
        <Route path= "fundme" element= {<FundMe/>} action={addPost}/>
        <Route path= "campaigns" element= {<CampaignLayout/>} action={donate}>
          <Route index element={<Campaign/>}/>
          <Route path=':id' element= {<Donate/>} />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} action={saveUser} />
      <Route path="register" element={<Register />} action={registerUser} />
      <Route path= "campaigns" element= {<CampaignLayout/>} >
      <Route path= '*' element= {<NotFound/>}/>
    </Route>

    //   {/* } />
      
    //   <Route path="create" element={<Create />} />
    //   <Route path="profile" element={<Profile />} />
    //   <Route path="login" element={<LoginPage />} /> */}
      
    // </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
