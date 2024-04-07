import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './HomeComponent/Home'
import Login from './Login/Login'
import Registration from './Registration/Registration'
import './App.css'
import AllProduct from './AllProduct/AllProduct'
import ProductDetails from './ProductDetails/ProductDetails'

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
    },
    {
      path: '/products',
      element: <AllProduct/>
    },
    {
      path: `/product/:pvId`,
      element: <ProductDetails/>
    }
  ])

  return (
      <RouterProvider router = {routes}/>
  )
}

export default App
