import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

function ShoppingCart(){

    const context = useContext(ShoppingCartContext)

    const openCheckoutSideMenu = () =>{
        context.openCheckoutSideMenu();
        context.closeProductDetail()
    }
    return(
        <button className="relative flex gap-0.5 items-center" onClick={()=>openCheckoutSideMenu()}>
            <ShoppingBagIcon className='h-6 w-6 fill-none stroke-black'></ShoppingBagIcon>
            <div className='justify-center items-center absolute bottom-3.5 left-3.5 rounded-full bg-black text-white w-4 h-4 text-xs'>
                    
                {context.cartProducts.length}
            </div>
        </button>
    )
}

export {ShoppingCart}