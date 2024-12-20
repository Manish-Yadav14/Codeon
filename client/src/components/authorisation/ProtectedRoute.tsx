import { useState, useEffect,ReactNode } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';

type ProtectedRouteProps = {
  children: ReactNode; // Specify the type of children
};

function ProtectedRoute ({ children }:ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = async ()=>{
    const token = localStorage.getItem('token');
    if(token){
        try {
            const res = await axios.post(`http://localhost:5000/auth/authenticate`, { token });
            if (res.status === 200) {
              setAuthenticated(true);  // Authenticated successfully
            } else {
              setAuthenticated(false); // Authentication failed
            }
        }catch (error) {
            console.error("Authentication error:", error);
            setAuthenticated(false); // Handle errors gracefully
        }
    }
    else{
        setAuthenticated(false);
    }

    setLoading(false);
};

useEffect(() => {
    authenticate();
     
    const handleStorageChange =()=>{
      const token = localStorage.getItem('token');
      if(!token){
          setAuthenticated(false);
      }
    };

    window.addEventListener('storage',handleStorageChange);

    return ()=>{
        window.removeEventListener('storage',handleStorageChange);
    }
}, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally show a loading indicator while auth state is being checked
  }

  return authenticated ? <>{children}</> : <Navigate to ='/login' replace/>
}

export default ProtectedRoute;
