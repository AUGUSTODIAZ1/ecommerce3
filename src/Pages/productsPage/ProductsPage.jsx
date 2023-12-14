import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap"
import CardProducts from '../../Components/cardsProducts/CardProduct';
import { wave } from "../homePage/HomePage.module.css"
import { backBg, imgFloat  } from "../productsPage/ProductsPage.module.css"
import ProductsGallery from '../../Components/productsGallery/ProductsGallery';


export const ProductsPage = () => {
  return (

<>
      <Container fluid  className={backBg} >
          <div className={imgFloat}>
            <img src="/src/assets/imgTransparentes/imgAuri.png" alt="" />
          </div>
            <div className={wave}>
                  <img className='position-absolute m-auto p-auto' src="/src/assets/wave.png" alt="" />
            </div>
        </Container>
    <Container>
        <ProductsGallery/ >
    </Container>
    </>
  )
}
