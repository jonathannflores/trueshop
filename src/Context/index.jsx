import { createContext } from 'react';
import { useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider( {children} ){
    // Shopping Cart : Increment Count
    const [count, setCount] = useState(0);

    // Shopping Cart : Array of products
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping Cart : Order
    const [order, setOrder] = useState([])

    // Product Detail : Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail : Open / Close
    const [productToShow, setProductToShow] = useState({})

    // CheckoutSideMenu : Open / Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            order, 
            setOrder,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export { ShoppingCartProvider, ShoppingCartContext }