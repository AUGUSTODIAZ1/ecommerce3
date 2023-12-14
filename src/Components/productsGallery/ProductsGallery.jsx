import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap';
import CardProducts from '../cardsProducts/CardProduct';

const ProductsGallery = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("https://rickandmortyapi.com/api/character")
            setProducts(data.results);
            console.log(data.results);
        } catch (error) {

        }
    };
    useEffect(() => {
        getAllProducts();
    }, []);
  return (
   
      
   <Row>
     <h1 className="text-center"> Productos </h1>
     {products.map((product, i) => {
       return (             
        <CardProducts key={i} data={product} />
             )
         })}
   </Row>
  )
}

export default ProductsGallery