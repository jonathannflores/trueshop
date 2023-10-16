import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

function CheckoutSideMenu(){
    const {
        count,
        setCount,
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

    return(
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed bg-blue-950 rounded-lg border border-white top-78 right-0 w-[360px] h-[calc(100vh-78px)]`}>
            <div className="flex justify-between items-center p-6">
                <p className="font-sm">My Order</p>
                <button onClick={ ()=> closeCheckoutSideMenu() }>
                    <XMarkIcon className="h-6 w-6 text-white" />
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

            <div className='p-6'>
                <p className='flex justify-between  items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-md text-2xl'>${totalPrice(cartProducts)}</span>
                </p>

            </div>
        </aside>
    )
}

export { CheckoutSideMenu }