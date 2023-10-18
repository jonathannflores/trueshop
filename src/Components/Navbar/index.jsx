import { useContext } from "react"
import {ShoppingCartContext} from "../../Context"
import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


function Navbar(){

    const {count,setSearchByCategory} = useContext(ShoppingCartContext)

    const navLeft=[
        {
            to: '/',
            text: 'All',
            className: '',
            path: "men's clothing"
        },
        {
            to: '/clothes',
            text: 'Clothes',
            className: '',
            path: "men's clothing"
        },
        {
            to: '/electronics',
            text: 'Electronics',
            className: '',
            path: "electronics"
        },
        {
            to: '/furnitures',
            text: 'Furnitures',
            className: '',
            path: "electronics"
        },
        {
            to: '/jewelery',
            text: 'Jewelery',
            className: '',
            path: "jewelery"
        },
        {
            to: '/others',
            text: 'Others',
            className: '',
            path: "jewelery"
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

    const textDecoration = 'underline underline-offset-4 text-green-500'


    return(
        <nav className="bg-white flex justify-between items-center w-full top-0 px-8 py-6 z-20 fixed border-b-2">
            <ul className="gap-4 flex items-center">
                <li className='font-semibold text-4xl text-green-500'>
                <NavLink to='/'>TrueShop</NavLink>
                </li>
                {navLeft.map(link=>(
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} 
                            className={({isActive})=> isActive ? textDecoration : undefined }
                            onClick={()=>setSearchByCategory(link.path)}
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