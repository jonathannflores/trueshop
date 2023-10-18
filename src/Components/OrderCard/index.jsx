import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard({ id, title, imageUrl, price, productDelete }){
    return(
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-medium'>{title}</p>
            </div>
            <div className='flex items-center gap-2  pl-4'>
                <p className='text-xl font-bold'>${price}</p>
                {
                    productDelete && 
                    <button onClick={()=>productDelete(id)}>
                        <XMarkIcon className='h-6 w-6 cursor-pointer'></XMarkIcon>
                    </button>
                }
            </div>
        </div>
    )
}

export {OrderCard}