import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"

function SignIn() {
    return (
      <Layout>
        <h1 className="font-medium text-xl mb-2 w-80 text-center">Welcome</h1>
        <div className="flex flex-col w-80" >
            <p >
              <span className="font-medium">Email: </span>
              <span className="font-light">jonathan@example.com</span>
            </p>
            <p>
              <span className="font-medium">Password: </span>
              <span className="font-light">123123</span>
            </p>
            <Link to='/'>
              <button className='w-full py-3 text-white font-medium bg-green-500 rounded-lg mb-2'>
                Login
              </button>
            </Link>
            
            <p className="text-center">
              <a href="" className="font-light text-xs underline underline-offset-4">Forget my password</a>
            </p>
            <button className='w-full py-3 text-green-500 font-medium border border-green-500 rounded-lg mt-4'>Sign Up</button>
        </div>
      </Layout>
    )
  }
  
  export {SignIn}