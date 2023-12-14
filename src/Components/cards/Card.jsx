import { DetailPage } from "../../Pages/detailPage/DetailPage"
import { post, mac, ipad, iphone, watch, airpods, accesorios  } from "./Card.module.css"
import { Link } from "react-router-dom"
import { Container, Col, Row } from 'react-bootstrap'
const CardCss = () => {
  return (
    <Container flex > 
      <Row className="d-flex mb-5">
        <Col xs={12} md={6} lg={4} className='d-flex justify-content-center'>
            <div className={post}>  
             <div className={mac}>
                <div className='text-center'>
                    <img src="" alt="" />
                    <h1 className='fs-5 mt-3'> Mac </h1>
                    <p className='ms-2 me-2'>
                    Mac OS es el nombre del sistema operativo creado por Apple para su línea de computadoras Macintosh, también aplicado retroactivamente a las versiones anteriores a System 7.6, un avanzado microordenador.  </p>
                    <span className='buttons'>
                         <button className='btn text-light mb-4'>
                           <Link className="text-light" to="/Products"> 
                              Ver productos
                           </Link >
                        </button>
                    </span>
                </div>
             </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={4} className=' d-flex justify-content-center'>
            <div className={post}>  
             <div className={iphone}>
                <div className='text-center'>
                    <img src="" alt=""/>
                    <h1 className='fs-5 mt-3'> iPhone </h1>
                    <p className='ms-2 me-2'> iPhone es una línea de teléfonos inteligentes de alta gama diseñada y comercializada por Apple Inc. Ejecuta el sistema operativo móvil iOS, conocido hasta mediados de 2010 como iPhone iOS. </p>
                    <span className='buttons'>
                        <button className='btn text-light mb-4'>
                            <Link className="text-light" to="/Products"> 
                              Ver productos
                           </Link >
                        </button>
                    </span>
                </div>
             </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={4} className=' d-flex justify-content-center'>
            <div className={post}>  
            <div className={ipad}>
                <div className='text-center'>
                    <img src="" alt="" />
                    <h1 className='fs-5 mt-3'> iPad </h1>
                    <p className='ms-2 me-2'>
                    iPad es una línea de tabletas diseñadas y comercializadas por Apple Inc. La primera generación fue anunciada el 27 de enero
                     de 2010, mientras que el 2 de marzo de 2011 apareció la segunda generación.</p>
                    <span className='buttons'>
                        <button className='btn text-light mb-4'>
                          <Link className="text-light" to="/Products"> 
                              Ver productos
                           </Link >
                        </button>
                    </span>
                </div>
            </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={4} className=' d-flex justify-content-center'>
            <div className={post}> 
              <div className={watch}>
                 <div className='text-center'>
                    <img src="" alt="" />
                    <h1 className='fs-5 mt-3'> Watch </h1>
                    <p className='ms-2 me-2'> El Apple Watch, presentado por el fabricante como  Watch, es el primer reloj inteligente creado por la empresa Apple, fue reemplazado por el Apple Watch Series 1, Series 2, y otros que le siguieron anualmente </p>
                    <span className='buttons'>
                        <button className='btn text-light mb-4'>
                           <Link className="text-light" to="/Products"> 
                              Ver productos
                           </Link >
                        </button>
                    </span>
                 </div>
              </div> 
            </div>
        </Col>
        <Col xs={12} md={6} lg={4} className='d-flex justify-content-center'>
            <div className={post}>
             <div className={airpods}>
                <div className='text-center'>
                    <img src="" alt="" />
                    <h1 className='fs-5 mt-3'> Airpods </h1>
                    <p className='ms-2 me-2'> Los AirPods son auriculares Bluetooth lanzados por Apple en diciembre del 2016. Además de reproducir música y responder llamadas, los AirPods tienen soporte para el asistente digital de Apple, Siri, etc.</p>
                    <span className='buttons'>
                        <button className='btn text-light mb-4'>
                           <Link className="text-light" to="/Products"> 
                              Ver productos
                           </Link >
                        </button>
                    </span>
                </div>
            </div>  
            </div>
        </Col>
        <Col xs={12} md={6} lg={4} className=' d-flex justify-content-center'>
            <div className={post}>  
            <div className={accesorios}>
                <div className='text-center'>
                    <img src="" alt="" />
                    <h1 className='fs-5 mt-3'> Accesorios </h1>
                    <p className='ms-2 me-2'> Apple cuenta con una gran cantidad de accesorios, desde fundas para celular y correas para sus relojes de ultima generacion, parlantes, apple pencils para ilustradores digitales, y teclados de con Touch ID.  </p>
                    <span className='buttons'>
                        <button className='btn text-light mb-4'>
                        <Link className="text-light" to="/Products"> 
                              Ver productos
                         </Link >
                        </button>
                    </span>
                </div>
             </div>
            </div>
        </Col>

            
      </Row>
    </Container>
  )
}
export default CardCss