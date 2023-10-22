import { createContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();
const apiUrl = 'https://fakestoreapi.com';

export const initializeLocalStorage = () =>{
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')

  let parsedAccount;
  let parsedSignOut

  if(!accountInLocalStorage){
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  }else{
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if(!signOutInLocalStorage){
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  }else{
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}



function ShoppingCartProvider( {children} ){

    // My Account
    const [account, setAccount] = useState({})
    // Sign Out
    const [signOut, setSignOut] = useState(false)

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

    // Search Value 
    const [searchValue, setSearchValue] = useState(null)

    // Filtered Items
    const [filteredItems, setFilteredItems] = useState(null)

    // Get Products
    const [items, setItems] = useState(null);

      // Get Products by category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
    const signOutC = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOutC)
    
    const accountC = localStorage.getItem('account')
    const parsedAccount = JSON.parse(accountC)

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = signOut || parsedSignOut
    
    
  
    useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await fetch(`${apiUrl}/products`);
          const data = await response.json()
          setItems(data)
        } catch(error){
          console.log(error)
        }
      }
      fetchData()
    }, [])

    const filterBy = (searchType, items, searchValue, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
        return filteredItemsBySearch(items, searchValue)
      }
  
      if (searchType === 'BY_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory)
      }
  
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
      }
  
      if (!searchType) {
        return items
      }
    }

    const filteredItemsBySearch = (items, searchValue) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) =>{
      return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(()=>{
      if (searchValue && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchByCategory))
    if (searchValue && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchValue, searchByCategory))
    if (!searchValue && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, searchByCategory))
    if (!searchValue && !searchByCategory) setFilteredItems(filterBy(null, items, searchValue, searchByCategory))
    },[items, searchValue, searchByCategory])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            items, 
            setItems,
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
            closeCheckoutSideMenu,
            searchValue, 
            setSearchValue,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            account, 
            setAccount,
            signOut, 
            setSignOut,
            isUserSignOut,
            hasUserAnAccount,
            parsedAccount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
export { ShoppingCartProvider, ShoppingCartContext }