import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { remove } from '../store/cartSlice';
export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const RemoveFromCart = (id=>{
    dispatch(remove(id));
  });
  const card = cartProducts.map(product =>
    <div className="col-md-12" style={{margin:'15px'}}>
        <Card  key={product.id}  >
            <div className='text-center'>
            <Card.Img variant="top" src={product.image}  style={{width:'100px',height:'130px'}}/>
            
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    INR:{product.price}
                </Card.Text>
               
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" onClick={()=>RemoveFromCart(product.id)}>Remove from Cart</Button>
            </Card.Footer>
            </div>
        </Card>
    </div>);

  return (
    <div>{card}</div>
  )
}
