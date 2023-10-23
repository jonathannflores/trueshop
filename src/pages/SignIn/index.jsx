import { useContext, useEffect, useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const context = useContext(ShoppingCartContext)

  useEffect(()=>{
    context.setSearchValue('');
  }, [])

  const form = useRef(null);
  
  const [view, setView] = useState('user-info')

  const handleSignIn = () => {
    const stringifiedSignIn = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignIn)
    context.setSignOut(false)

    return <Navigate replace to={'/'}/>
}

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name : formData.get('name'),
      email : formData.get('email'),
      password : formData.get('password'),
    }
    
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)

    handleSignIn()
  }

  const renderLogin = () => {
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
            <Link to='/'>
              <button className='w-full py-3 text-white font-medium bg-green-500 rounded-lg mt-4 mb-2 disabled:bg-gray-500 disabled:border-none'
              disabled={!context.hasUserAnAccount} 
              onClick={()=>{handleSignIn();
              context.closeProductDetail()} }>
                Login
              </button>
            </Link>
            
            <p className="text-center">
              <a href="" className="font-light text-xs underline underline-offset-4">Forget my password</a>
            </p>
            <button className='w-full py-3  text-green-500 font-medium border border-green-500 rounded-lg mt-4 disabled:bg-gray-500 disabled:text-white disabled:border-none'
            disabled={context.hasUserAnAccount}
            onClick={()=>setView('create-user-info')}>Sign Up</button>
        </div>
    )
    
  }

  const renderCreateUser = () => {
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
        <Link to='/'>
              <button className='w-full disabled:bg-gray-600 py-3 text-white font-medium bg-green-500 rounded-lg mb-2'
              onClick={()=>createAnAccount()}>
                Create
              </button>
            </Link>
      </form>
    )
  }

  const renderview = () => view === 'create-user-info' ? renderCreateUser() : renderLogin();
  
    return (
      <Layout>
        <h1 className="font-medium text-xl mb-2 w-80 text-center">Welcome</h1>
        {renderview()}
      </Layout>
    )
  }
  
  export {SignIn}