import { Container, Row, Col } from "react-bootstrap"
import { detail1, detail2, bgImg, imgDisplay, sectionDetail, textDisplay, slider, carritoBtn } from "../detailPage/DetailPage.module.css";


export const DetailPage = () => {
  return (
    <Container fluid className={bgImg}>
        <Row className="p-5 rounded-circle">
            <Col lg={6} className={detail1}>
                <div className="d-flex justify-content-center flex-column">
                  <img src="/src/assets/img3.jpg" alt=""/>
                </div>
            </Col>
            <Col lg={6} className={detail2}>
              <Container fluid>
              <Row className={sectionDetail}>
                <Col lg={12} md={12} xs={12} className={imgDisplay}>
                   <div className={slider}>
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                   </div>
                </Col>   
                <Col lg={12} md={12} xs={12}>
                  <div className="d-flex flex-column">
                    <h1 className="fs-2"> Product </h1>
                    <p className={textDisplay}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nisi, error quasi itaque perspiciatis sequi dolores possimus, aut, debitis
                    </p>
                    <div  className={carritoBtn}>
                      <h1 className="text-center">  <i  className="fa-solid fs-4 fa-cart-shopping fa-bounce"> </i> </h1>
                    </div>
                  </div>
                </Col> 
              </Row>
              </Container>
            </Col>
        </Row>
    </Container>

  )
}
