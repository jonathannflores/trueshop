import { createContext } from 'react';
import { useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider( {children} ){
    // Shopping Cart : Increment Count
    const [count, setCount] = useState(0);

    // Shopping Cart : Increment Count
    const [cartProducts, setCartProducts] = useState([0]);

    // Product Detail : Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail : Open / Close

    const [productToShow, setProductToShow] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export { ShoppingCartProvider, ShoppingCartContext }