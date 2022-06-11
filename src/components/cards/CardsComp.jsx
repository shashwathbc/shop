import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ".././style.css";
import { useState } from 'react';
import Cardsdata from './../Cardsdata';
import { useDispatch } from 'react-redux';
import {ADD} from "../../redux/actions/action";

const CardsComp = () => {
  const [data , setData] = useState(Cardsdata)
  console.log(data);

  const dispatch = useDispatch();
  const send = (e) => {
  // console.log(e);
  dispatch(ADD(e));
  }


  return (
    <div className='container mt-3 '>
      <h2 className="text-center">ADD TO CART PROJECT</h2>
      <div className="row  d-flex justify-content-center align-items-center">
        {data.map((element,id)=>{
          return (
            <>
             <Card className="mx-2 mt-4 mb-4 card_style" style={{ width: '22rem' , backgroundColor:"black" , color:"white", border:"none" }} key ={element.id}>
  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
  <Card.Body>
    <Card.Title>{element.rname}</Card.Title>
    <Card.Text>
    Price : Rs.{element.price}
    </Card.Text>
    <div className="button_div d-flex justify-content-center">
    <Button variant="secondary" className="col-lg-12"
    onClick={()=> send(element)}
    >Add To Cart</Button>
    </div>
    
  </Card.Body>
</Card>
            </>
          )
        })}
     
      </div>
    </div>
  )
}

export default CardsComp