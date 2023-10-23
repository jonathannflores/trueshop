import {useRoutes, BrowserRouter, Navigate} from 'react-router-dom';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {SignIn} from '../SignIn';
import {NotFound} from '../NotFound';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context';
import './App.css';
import { useContext } from 'react';


function AppRoutes(){

  const context = useContext(ShoppingCartContext)

  let routes = useRoutes([
    { path: '/', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/clothes', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/electronics', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/furnitures', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/jewelery', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/jewelery', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/others', element: context.hasUserAnAccount && !context.isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},
  ])
  return routes
}

function App() {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export {App}
