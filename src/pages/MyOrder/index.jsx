import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import {OrderCard} from '../../Components/OrderCard'

function MyOrder() {
    const {
      cartProducts,
      order
    } = useContext(ShoppingCartContext)

    console.log(order)
    
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if(index === 'last') index = order?.length -1
    return (
      <Layout>
        <div className='flex w-96 justify-center items-center relative my-8'>
          <Link to='/my-orders' className='absolute left-0'>
            <button className='flex justify-center items-center'>
              <ChevronLeftIcon className='h-6 w-6 text-black absolute left-0 cursor-pointer' />
            </button>
          </Link>
          <h1 className="text-xl font-bold">My Order</h1>
        </div> 

        <div className='px-6'>
                {
                    order?.[index]?.products.map(product => (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}></OrderCard>
                    ))
                }
            </div>
      </Layout>
    )
  }
  
  export {MyOrder}