import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  imgSection,
  sectionHome,
  slider,
  roundedImg1,
  roundedImg2,
  wave,
} from "../homePage/HomePage.module.css";
import CardCss from "../../Components/cards/Card";
export const HomePage = () => {
  return (
    <main>
      <Container fluid>
        <Row className={sectionHome}>
          <Col xs={12} md={12} lg={6} className={imgSection}>
            <Col xs={12}>
              <h2 className="text-center mt-2 mb-2 h2Letra"> Best Sellers </h2>
            </Col>
            <div className={slider}>
              <img className={roundedImg1} src="/src/assets/img9.jpg" alt="" />
              <img src="/src/assets/img1.jpg" alt="" />
              <img src="/src/assets/img3.jpg" alt="" />
              <img src="/src/assets/img4.jpg" alt="" />
              <img src="/src/assets/img5.webp" alt="" />
              <img src="/src/assets/img6.jpg" alt="" />
              <img src="/src/assets/img7.jpg" alt="" />
              <img src="/src/assets/img10.jpg" alt="" />
              <img src="/src/assets/img12.webp" alt="" />
              <img src="/src/assets/img12.jpg" alt="" />
              <img className={roundedImg2} src="/src/assets/img8.jpg" alt="" />
            </div>
          </Col>

          <div className={wave}>
            <img src="/src/assets/wave.png" alt="" />
          </div>
        </Row>
      </Container>
      <Container fluid>
        <CardCss />
      </Container>
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              src="/src/assets/imgad1.jpeg"
              className="d-block w-100 c-img"
              alt="Slide 1"
            />
          </div>

          <div className="carousel-item c-item">
            <img
              src="/src/assets/imgad2.jpeg"
              className="d-block w-100 c-img"
              alt="Slide 2"
            />
          </div>

          <div className="carousel-item c-item">
            <img
              src="/src/assets/imgad3.jpeg"
              className="d-block w-100 c-img"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};
