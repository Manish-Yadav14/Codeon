import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/authorisation/ProtectedRoute'
import Problems from './pages/Problems';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/problems' element={<Problems/>}/>
      <Route path='/problems/:problemSlug' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
