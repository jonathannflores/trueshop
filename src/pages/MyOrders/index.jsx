import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { Link } from "react-router-dom"
import { OrdersCard } from "../../Components/OrdersCard"

function MyOrders() {
  const {
    cartProducts,
    order
  } = useContext(ShoppingCartContext)
    return (
      <Layout>
        <div>
          <h1>My Orders</h1>
        </div>
        
        {
          order.map((order, index) => (
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