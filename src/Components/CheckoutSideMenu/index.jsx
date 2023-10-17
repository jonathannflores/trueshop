import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

function CheckoutSideMenu(){
    const {
        count,
        setCount,
        order,
        setOrder,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext)

    const productDelete = (id)=>{
        const filteredProducts = cartProducts.filter(product => product.id !== id)
        setCartProducts(filteredProducts)
        setCount(count - 1)
    }

    const handleCheckout = ()=>{
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
        
    }

    return(
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed bg-white rounded-lg border border-black top-78 right-0 w-[360px] h-[calc(100vh-78px)]`}>
            <div className="flex justify-between items-center p-6">
                <p className="font-sm">My Order</p>
                <button onClick={ ()=> closeCheckoutSideMenu() }>
                    <XMarkIcon className="h-6 w-6 text-black" />
                </button>
            </div>

            <div className='px-6 overflow-y-scroll'>
                {
                    cartProducts.map(product => (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        productDelete={productDelete}></OrderCard>
                    ))
                }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between  items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-md text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                {cartProducts.length > 0 ? (
                <Link to='/my-orders/last'>
                    <button className='w-full py-3 text-white bg-green-500 rounded-lg'
                    onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>
                ) : null
                } 
            </div>
              
        </aside>
    )
}

export { CheckoutSideMenu }