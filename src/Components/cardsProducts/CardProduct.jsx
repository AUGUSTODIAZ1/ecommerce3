import React from "react"
import { useState, useEffect } from "react"
import { cardProductsCss, buttons } from "../cardsProducts/CardProduct.module.css"
import { Link } from "react-router-dom"
import { Col } from "react-bootstrap"

const CardProducts = ({data}) => {
  console.log(data);
  const { name, id, image} = data;
  return (
    <Col xs={12} md={6} lg={3}  className='d-flex justify-content-center justify-content-center'> 
      <div className={cardProductsCss}>
        <div className="d-flex justify-content-center align-items-center">
          <img src={image} alt="" />
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="text-center mt-2"> {name} </h1>
          <div className="d-flex">
          <span className={buttons}>
          <Link className="text-light" to="/DetailPage"> 
            <button className='btn'>Ver productos</button>
          </Link >
          </span>
          <span className={buttons}>
            <button className='btn'>  <i  className="fa-solid text-center fa-cart-shopping"> </i>   </button>
          </span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default CardProducts



