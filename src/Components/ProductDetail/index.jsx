import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"

function ProductDetail(){
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed bg-white rounded-lg border border-white top-78 right-0 w-[360px] h-[calc(100vh-78px)] overflow-y-scroll`}>
            <div className="flex justify-between items-center p-6">
                <p className="font-sm">Detail</p>
                <button onClick={ ()=> context.closeProductDetail() }>
                    <XMarkIcon className="h-6 w-6 text-black" />
                </button>
                
            </div>
            <figure className='px-6 mb-6'>
                <img className='w-full h-full rounded-lg max-h-[310px]' src={context.productToShow.image} alt={context.productToShow.title}/>
            </figure>
            <div className='flex flex-col px-6'>
                <span className='font-medium text-2xl mb-6'>
                    ${context.productToShow.price}
                </span>
                <span className='font-medium text-md'>
                    {context.productToShow.title}
                </span>
                <span className='font-light text-sm mb-6'>
                    {context.productToShow.description}
                </span>
            </div>
        </aside>
    )
}

export { ProductDetail }