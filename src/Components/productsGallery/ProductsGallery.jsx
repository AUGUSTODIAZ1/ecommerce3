import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap';
import CardProducts from '../cardsProducts/CardProduct';

const ProductsGallery = () => {
    const [products, setProducts] = useState([]);
    const URL_BASE = import.meta.env.VITE_BASE_URL
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${URL_BASE}/products`);
            setProducts(data);
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