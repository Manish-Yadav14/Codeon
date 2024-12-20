import {useState,useCallback} from 'react';
import axios from 'axios';

interface Problems {
    problemId:string
    slug:string
    title:string
    statement:string
    difficulty:string
    topics:string[]
    testcases:object[]
}

export const useGetAllProblems = ()=>{
    const [problems,setProblems] = useState<Problems[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getProblems = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
          const res = await axios.get<Problems[]>('http://localhost:5000/problems/getAllProblems');
          setProblems(res.data);
        } catch (err: unknown) {
          setError((err as Error).message || 'Failed to fetch problems');
        } finally {
          setIsLoading(false);
        }
      }, []);

    return{problems,getProblems,isLoading,error};
}

