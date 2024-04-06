import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './HomeComponent/Home'
import Login from './Login/Login'
import Registration from './Registration/Registration'
import './App.css'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Registration/>
    }
  ])

  return (
      <RouterProvider router = {routes}/>
  )
}

export default App
