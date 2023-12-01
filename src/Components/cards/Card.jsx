import React from 'react'
import "./Card.css"
const CardCss = () => {
  return (
    <section className='products container-fluid mt-5 p-0 m-0'> 
        <article className='row justify-content-center justify-content-evenly'>
            <div className='post col-12 col-md-12 col-lg-3 mt-3 p-0'>  
              <div className='d-flex justify-content-center align-items-center flex-direction-column'> 
                <div className='text-center'>
                    <img src="" alt="" />
                    <h1 className='fs-5 ms-2 mt-3'> HOLA </h1>
                    <p className='ms-2 me-2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum alias ad quam? Magnam perferendis architecto et possimus, sit dolor doloremque repellat quos. Ea iusto, dignissimos esse quidem vero omnis dolores.</p>
                    <span className='buttons'>
                        <button className='btn text-light mb-4'>Ver productos</button>
                    </span>
                </div>
              </div>
            </div>
        </article>
    </section>
  )
}
export default CardCss