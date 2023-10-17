import { CalendarDaysIcon, ChevronRightIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"


function OrdersCard({ orderDate, totalProducts, totalPrice }){
    return(
        <div className='flex items-center justify-between w-80 mb-3 border border-black rounded-lg p-4 cursor-pointer'>
            <div className="flex flex-col w-full">
                <p className="flex gap-2 items-center">
                    <CalendarDaysIcon className="h-6 w-6 text-black" />
                    <span className='font-light'>{orderDate}</span>
                </p>
                <p className="flex gap-2 items-center">
                    <ShoppingCartIcon className="h-6 w-6 text-black" />
                    <span className='font-light'>{totalProducts} article</span>
                </p>
            </div>
            <div>
                <p className="flex gap-2 items-center">  
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black" />
                </p>
            </div>
        </div>
    )
}

export {OrdersCard}