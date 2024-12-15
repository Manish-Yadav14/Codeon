import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"


function Signup() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = useCallback(async(e: { preventDefault: () => void; })=>{
    try {
      setLoading(true);
      e.preventDefault();
      const res = await axios.post('http://localhost:5000/auth/signup',{name,email,password});
      if(res.statusText==="OK"){
        console.log("User Registered Successfully..");
        localStorage.setItem('token',res.data);
        navigate('/dashboard');
      }
      else{
        throw new Error('Error: Check Credentials...')
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }

  },[name,email,password])


  return (
    <main>
      <header className=" top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold sm:inline-block text-3xl">Codeon</span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex justify-center mt-10">
        <div className="m-1 p-8 border rounded-md w-[500px] h-[550px] shadow-2xl">
          <h1 className="m-2 p-2 text-3xl font-semibold text-gray-800">Create your Codeon account</h1>
          <form className="flex flex-col">
            <label htmlFor="name" className="text-black p-2 m-1">Name</label>
            <input 
              id="name" 
              className="mx-2 p-2 border-2 rounded-md outline-none shadow-md focus:shadow-sky-600"
              type="text" 
              value ={name}
              onChange={(e)=>setName(e.target.value)}
            />

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

            <Button onClick={handleSignup} className="m-2 mt-6 p-2 text-lg">
              {loading ? "Loading..." : "Create Account"}
            </Button>

            <div className="m-auto mt-4 p-2">Already have an account? <Link to="/login" className="text-blue-700 font-semibold cursor-pointer hover:text-black">Sign In</Link></div>
          </form>
        </div>
      </div>
      <Footer/>
    </main>
    
  )
}

export default Signup