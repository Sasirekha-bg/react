import React, { useEffect, useState } from 'react'
import ProductCard from './product-card';
import './App.css'

function App() {

  let [products,updateProducts] = useState([]);
  useEffect(()=>{ getProducts()
  },[]);
  async function getProducts(){
    let res = await  fetch('https://fakestoreapi.com/products');
     let reponse =  await res.json();
     updateProducts(reponse);
     console.log(reponse);
  }
  
  if(products.length == 0){
    return 'fetching data'
  }

  return (
   <div className='product-card'>
    {products.map((p)=><ProductCard  key ={p.id} {...p}/>)}
   </div>
  )
}

export default App