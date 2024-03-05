import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function LoadMore() {
    const [loading,setLoading]  = useState(false);
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [disabledButton,setDisabledButton] = useState(false);

    async function fetchProducts(){
        try{
           const data = await fetch(`https://dummyjson.com/products?limit=30&skip=${count === 0 ? 0:count*20}`);
           const response = await data.json();
        //    console.log(response);

           if(response  && response.products && response.products.length){
            setProducts((prevData)=>[...prevData,...response.products]);
            console.log(response.products);
            setLoading(false);
           }
        }catch(e){
            console.log(e);
            setLoading(true);
        }
    }


    
    useEffect(()=>{
        fetchProducts();
    },[count]);

    useEffect(()=>{
        if(products && (products.length === 100)){
            setDisabledButton(true)
        }
    },[products])
   
    if(loading){
        return <div>Please wait,Page is loading</div>
    }
    
  return (
    <div className='container'>
        <div className='product-container'>
        {
            products && products.length ?  products.map((item)=>(<div className='product' key={item.id}>
            <img src={item.thumbnail} alt={item.title}></img>
            <p>{item.title}</p>
        </div>)) : null
        }
    </div>
    <div className='button-container'>
        <button disabled={disabledButton} onClick={()=> setCount(count+1)}>
            Load More Products
        </button>
        {
            disabledButton?<p>Sorry, limit exceeded</p>: null
        }
    </div>
    </div>
  )
}
