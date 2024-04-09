import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AllProduct from './Page/AllProduct/AllProduct'
import Navbar from './Components/Navbar/Navbar'
import ProductDetails from './Page/ProductDetails/ProductDetails'
import Login from './Page/Login/Login'
import Registration from './Page/Registration/Registration'
import MyProducts from './Page/MyProducts/MyProducts'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>
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
    },
    {
      path: '/my-products',
      element: <MyProducts/>
    }
  ])

  return (
    <RouterProvider router = {routes}/>
  )
}

export default App
