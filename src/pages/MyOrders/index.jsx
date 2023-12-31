import { Layout } from "../../Components/Layout"
import { useContext, useEffect } from "react"
import {ShoppingCartContext} from "../../Context"
import { Link } from "react-router-dom"
import { OrdersCard } from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  useEffect(()=>{
    context.setSearchValue('');
  }, [])

    return (
      <Layout>
        <div>
          <h1 className="font-medium text-xl mb-4">My Orders</h1>
        </div>
        
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalProducts={order.totalProducts}
                totalPrice={order.totalPrice}
                orderDate={order.date}
              />
            </Link>
            ))
        }
      </Layout>
    )
  }
  
  export {MyOrders}