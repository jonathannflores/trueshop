import {useRoutes, BrowserRouter} from 'react-router-dom';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {SignIn} from '../SignIn';
import {NotFound} from '../NotFound';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import './App.css';


function AppRoutes(){
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/clothes', element: <Home />},
    { path: '/electronics', element: <Home />},
    { path: '/furnitures', element: <Home />},
    { path: '/jewelery', element: <Home />},
    { path: '/toys', element: <Home />},
    { path: '/others', element: <Home />},
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
