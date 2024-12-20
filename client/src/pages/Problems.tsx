import { Navbar } from '@/components/navigation/Navbar'
import Footer from '@/components/sections/Footer'
import {useGetAllProblems} from '../utils/useGetAllProblems'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Problems() {
  const {problems,getProblems,isLoading,error} = useGetAllProblems();
  const navigate = useNavigate();
  
  useEffect(() => {
    getProblems();
  }, [getProblems])
  
  if (error) return <p className='text-red-600'>Error: {error}</p>;

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <Navbar/>
        <div className='pt-16 h-[700px]'>
          { isLoading ? (<p>Loading...</p>):(<p></p>)}
          {problems.length >0 ?(
            problems.map((problem)=>(
              <div key={problem.problemId} onClick={()=>{navigate(`/problems/${problem.slug}`)}} className='m-2 p-2 bg-slate-200 border cursor-pointer'>{problem?.title}</div>
            ))
          ):(
            <p></p>
          )}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Problems

