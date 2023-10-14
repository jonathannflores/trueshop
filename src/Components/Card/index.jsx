import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { PlusIcon } from '@heroicons/react/24/solid'

function Card(data){

    const {
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext)

    const showProductDetail = (productDetail) =>{
        openProductDetail();
        setProductToShow(productDetail)
    }

    const addProductToCart = (productData) => {
        setCount(count+1)
        setCartProducts([...cartProducts, productData])
        console.log('CART: ', cartProducts)
    }

    return(
        <div className="cursor-pointer h-60 w-56 bg-gray-500 rounded-lg"
        onClick={ ()=> showProductDetail(data.data) }>
            <figure className="relative mb-2 h-4/5 w-full">
                <span className="absolute bg-blue-300 text-xs rounded-lg left-0 bottom-0 m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="headphones"/>
                <button className="absolute top-0 right-0 flex justify-center items-center bg-green-600 rounded-full p-1 h-6 w-6 m-2 text-white text-xl font-bold"
                onClick={ ()=> addProductToCart(data.data) }>
                  <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </button>
            </figure>
            <div className="h-1/5 w-full">
                <p className="flex justify-between">
                    <span className="text-sm font-sm truncate mr-2 mx-2 line-clamp-2">{data.data.title}</span>
                    <span className="font-semibold">{data.data.price}</span>
                </p>
                
            </div>
        </div>
    )
}

export {Card}