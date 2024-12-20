import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';


function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = useCallback(async(e: { preventDefault: () => void; })=>{
    try {
      e.preventDefault()
      setLoading(true);
      const res = await axios.post('http://localhost:5000/auth/login',{email,password});
      if(res.statusText==='OK'){
        localStorage.setItem('token',res.data)
        navigate('/dashboard')
        console.log("Logged in Successfully...");
      }
      else{
        throw new Error("Error: Check Credentials...")
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  },[email,password])
  

  return (
    <main>
      <header className="top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold sm:inline-block text-3xl">Codeon</span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex justify-center mt-12">
        <div className="m-1 p-8 border rounded-md w-[500px] h-[500px] shadow-2xl">
          <h1 className="m-2 p-2 text-3xl font-semibold text-gray-800">Sign in to your account</h1>
          <form className="flex flex-col">
            <label htmlFor="email" className="text-black p-2 m-1">Email</label>
            <input 
              id="email" 
              className="mx-2 p-2 border-2 rounded-md outline-none shadow-md focus:shadow-sky-600"
              type="email"
              value = {email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <label htmlFor="password" className="text-black p-2 m-1">Password</label>
            <input 
              id="password" 
              className="mx-2 p-2 border-2 rounded-md outline-none shadow-md focus:shadow-sky-600 " 
              type="password"
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <Button type="submit" onClick={handleLogin} className="m-2 mt-6 p-2 text-lg">
              {loading ? "Loading..." :"Sign In"}
            </Button>

            <div className="m-auto mt-4 p-2">New to Codeon?
              <Link to='/signup' className="text-blue-700 font-semibold cursor-pointer hover:text-black"> Create Account</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </main>
    
  )
}

export default Login