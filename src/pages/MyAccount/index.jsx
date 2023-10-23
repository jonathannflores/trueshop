import { useContext, useEffect, useRef, useState } from "react";
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";

function MyAccount() {

  const context = useContext(ShoppingCartContext)

  const form = useRef(null);

  useEffect(()=>{
    context.setSearchValue('');
  }, [])

  const [view, setView] = useState('user-info')

  const editAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name : formData.get('name'),
      email : formData.get('email'),
      password : formData.get('password'),
    }
    
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)

    setView('user-info')
  }

  const renderSeeData = () => {
    return(
      <div className="flex flex-col w-80" >
            <p >
              <span className="font-medium">Email: </span>
              <span className="font-light">{context.parsedAccount?.email}</span>
            </p>
            <p>
              <span className="font-medium">Password: </span>
              <span className="font-light">{context.parsedAccount?.password}</span>
            </p>
            
              <button 
              type="button"
              className='w-full py-3 text-white font-medium bg-green-500 rounded-lg mt-4 mb-2 disabled:bg-gray-500 disabled:border-none'
              disabled={!context.hasUserAnAccount} 
              onClick={()=>{
                
                setView('edit-user-info');
                context.closeProductDetail()
              }}>
                Edit data
              </button>
        </div>
    )
    
  }

  const renderEditUser = () => {
    return(
      <form ref={form} className="flex flex-col w-80 gap-4">
        <div className="flex flex-col ">
          <label htmlFor="name">Your name: </label>
          <input type="text" id="name" name="name" 
          defaultValue={context.parsedAccount?.name} placeholder="Name" 
          className="rounded-lg border border-black py-2 px-4 placeholder:font-light placeholder:text-sm" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">Your email: </label>
          <input type="text" id="email" name="email" 
          defaultValue={context.parsedAccount?.email} placeholder="user@example.com" 
          className="rounded-lg border border-black py-2 px-4 placeholder:font-light placeholder:text-sm" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Your password: </label>
          <input type="text" id="password" name="password" 
          defaultValue={context.parsedAccount?.password} placeholder="*****" 
          className="rounded-lg border border-black py-2 px-4 placeholder:font-light placeholder:text-sm" />
        </div>
        
              <button type="button" className='w-full disabled:bg-gray-600 py-3 text-white font-medium bg-green-500 rounded-lg mb-2'
              onClick={()=>{editAnAccount()}}>
                Edit
              </button>
            <button type="button" className="pt-4 font-medium"
            onClick={()=>setView('user-info')}>Cancel</button>
      </form>
    )
  }

  const renderview = () => view === 'edit-user-info' ? renderEditUser() : renderSeeData();

  return (
    <Layout>
      <h1 className="font-medium text-xl mb-2 w-80 text-center">My Account</h1>
      {renderview()}
    </Layout>
  )
  }
  
  export {MyAccount}