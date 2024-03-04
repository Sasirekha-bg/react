import { useState } from 'react'

import './App.css'
import Product from './Components/Product'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Cart from './Components/Cart'
import Layout from './Components/Layout'
import Dashboard from './Components/Dashboard'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='cart' element={<Cart />}></Route>
    </Route>
  ))
  

  return (
    <>
      
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
