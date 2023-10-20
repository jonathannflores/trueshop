import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


function Navbar(){

    const context = useContext(ShoppingCartContext)
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if(isUserSignOut){
            return(<li>
                <NavLink
                    to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    onClick={() => handleSignOut()}>
                    Sign out
                </NavLink>
            </li>)
        }else{
            return(
                <>
                <li className='text-gray-400'>
                    jonathan@example.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        onClick={() => handleSignOut()}>
                        Sign out
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>{context.cartProducts.length}</div>
                </li>
                </>
            )
        }
    }

    const activeStyle = 'underline underline-offset-4 text-green-500'


    return(
        <nav className="bg-white flex justify-between items-center w-full top-0 px-8 py-6 z-20 fixed border-b-2">
            <ul className="gap-4 flex items-center">
                <li className='font-semibold text-4xl text-green-500'>
                <NavLink to='/'>TrueShop</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
                
            </ul>
            <ul className="gap-4 flex items-center">
    
                {renderView()}
                
            </ul>
        </nav>
    )
    
}

export {Navbar}