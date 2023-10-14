import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"

function ProductDetail(){
    const {
        isProductDetailOpen,
        closeProductDetail,
        productToShow
    } = useContext(ShoppingCartContext)

    return(
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed bg-blue-950 rounded-lg border border-white top-78 right-0 w-[360px] h-[calc(100vh-78px)]`}>
            <div className="flex justify-between items-center p-6">
                <p className="font-sm">Detail</p>
                <button onClick={ ()=> closeProductDetail() }>
                    <XMarkIcon className="h-6 w-6 text-white" />
                </button>
                
            </div>
            <figure className='px-6 mb-6'>
                <img className='w-full h-full rounded-lg max-h-[310px]' src={productToShow.image} alt={productToShow.title}/>
            </figure>
            <div className='flex flex-col px-6'>
                <span className='font-medium text-2xl mb-6'>
                    ${productToShow.price}
                </span>
                <span className='font-medium text-md'>
                    {productToShow.title}
                </span>
                <span className='font-light text-sm'>
                    {productToShow.description}
                </span>
            </div>
        </aside>
    )
}

export { ProductDetail }