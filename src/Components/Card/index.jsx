import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

function Card(data){
    // context.
    const context = useContext(ShoppingCartContext)

    const showProductDetail = (productDetail) =>{
        context.openProductDetail();
        context.closeCheckoutSideMenu();
        context.setProductToShow(productDetail)
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count+1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log('CART: ', context.cartProducts)
    }

    const renderIcon = (product) =>{
        const isProductAdded = context.cartProducts.some(item => item.id === product.id)
        return(
            isProductAdded ? (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-green-400 rounded-full p-1 h-6 w-6 m-2 text-black text-xl font-bold z-15"
                >
                  <CheckIcon className='h-6 w-6 text-black'></CheckIcon>
                </button>
            )
            : (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-gray-200 rounded-full p-1 h-6 w-6 m-2 text-black text-xl font-bold z-15"
                onClick={ (event)=> addProductToCart(event, data.data) }>
                  <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </button>
            )
        )
    }

    return(
        <div className="cursor-pointer h-60 w-56 bg-gray-200 rounded-lg"
        onClick={ ()=> showProductDetail(data.data) }>
            <figure className="relative mb-2 h-4/5 w-full">
                <span className="absolute bg-gray-200 text-xs rounded-lg left-0 bottom-0 m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="headphones"/>
                {renderIcon(data.data)}
            </figure>
            <div className="h-1/5 w-full px-2">
                <p className="flex justify-between">
                    <span className="text-sm font-sm truncate mr-2 line-clamp-2">{data.data.title}</span>
                    <span className="font-semibold">${data.data.price}</span>
                </p>
                
            </div>
        </div>
    )
}

export {Card}