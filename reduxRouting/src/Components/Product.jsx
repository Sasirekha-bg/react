import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  useDispatch,useSelector } from 'react-redux';
import {add} from '../store/cartSlice'
import { updateProducts } from '../store/productSlice';
export default function Product() {

    const dispatch = useDispatch();
    // const [products, updateProducts] = useState([]);


    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(data => data.json())
    //         .then(result => updateProducts(result))
    // }, []);

    const {data:products} = useSelector((state)=>state.product)

    useEffect(()=>{
        dispatch(updateProducts())
        
         
    },[])

    const addToCart = (product)=>{
        //dispatch an add action
        dispatch(add(product));

    }

    const card = products.map(product =>
        <div className="col-md-3" style={{margin:'10px'}}>
            <Card  key={product.id}  >
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
                
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:{product.price}
                    </Card.Text>
                   
                </Card.Body>
                <Card.Footer>
                <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
                </div>
            </Card>
        </div>)
    return (
       <div>
         <h1 className='text-center'>Product Dashboard</h1>
         <div className="row" style={{marginLeft:'120px'}}>
          {card}
        </div>
       </div>
    )
}
