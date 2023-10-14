import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


function Navbar(){

    const {count} = useContext(ShoppingCartContext)

    const navLeft=[
        {
            to: '/',
            text: 'TrueShop',
            className: 'font-semibold text-lg '},
        {
            to: '/',
            text: 'All',
            className: ''
        },
        {
            to: '/clothes',
            text: 'clothes',
            className: ''
        },
        {
            to: '/electronics',
            text: 'electronics',
            className: ''
        },
        {
            to: '/furnitures',
            text: 'furnitures',
            className: ''
        },
        {
            to: '/toys',
            text: 'toys',
            className: ''
        },
        {
            to: '/others',
            text: 'others',
            className: ''
        },
    ]
    
    const navRight=[
        {
            to: '/email',
            text: 'jonathan@example.com',
            className: 'text-gray-400'
        },
        {
            to: '/my-orders',
            text: 'My orders',
            className: ''
        },
        {
            to: '/my-account',
            text: 'My account',
            className: ''
        },
        {
            to: '/sign-in',
            text: 'Sign in',
            className: ''
        },
        {
            to: '/cart',
            text: '🛒 ',
            className: ''
        },
    ]

    const textDecoration = 'underline underline-offset-4'


    return(
        <nav className="bg-blue-950 flex justify-between items-center w-full top-0 px-8 py-6 z-20 fixed border-b-2 border-green-800">
            <ul className="gap-4 flex items-center">
                {navLeft.map(link=>(
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} 
                            className={({isActive})=> isActive ? textDecoration : undefined }
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="gap-4 flex items-center">
                {navRight.map(link=>(
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} 
                            className={({isActive})=> isActive ? textDecoration : undefined }
                        >
                            {link.to === '/cart' ? `${link.text} ${count}` : link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
    
}

export {Navbar}