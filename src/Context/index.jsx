import { createContext } from 'react';
import { useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider( {children} ){

    const [count, setCount] = useState(0);

    const addCart = () => {
        setCount(count+1)
    }

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            addCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export { ShoppingCartProvider, ShoppingCartContext }