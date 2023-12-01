import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap"
import "./HomePage.css"
import CardCss from '../../Components/cards/Card';

export const HomePage = () => {
  return (
    <main>
        <div className='container-fluid d-flex flex-column'>
        <section className="row sectionHome">
            <div className='imgSection col-12 col-md-12 col-lg-6'>
                <div className='col-12'>
                    <h2 className='text-center mt-2 mb-2'> Best Sellers </h2>
                </div>
                <div className='slider mb-5'>
                    <img className='roundedImg1' src="/src/assets/img9.jpg" alt="" />
                    <img src="/src/assets/img1.jpg" alt="" />
                    <img src="/src/assets/img3.jpg" alt="" />
                    <img src="/src/assets/img4.jpg" alt="" />
                    <img src="/src/assets/img5.webp" alt="" />
                    <img src="/src/assets/img6.jpg" alt="" />
                    <img src="/src/assets/img7.jpg" alt="" />
                    <img className='roundedImg2' src="/src/assets/img8.jpg" alt="" />
                </div>
            </div>

            <div className='logoSection container-fluid d-flex justify-content-sm-center flex-column align-items-center col-12 col-md-12 col-lg-4 mt-5 mb-5'>
                <h1 className='text-center'>¡Bienvenidos a la mejor pagina de Electronica!</h1>
                <p className='text-center mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero repellat nobis
               molestias voluptate a molestiae deserunt magni nemo pariatur dolor modi, minus maxime corporis. Cumque omnis
               ipsa iusto eligendi.</p>
               <h2 className='fs-4 text-center pt-2 pb-2'> Suscribirse </h2>
            </div>
            <div className='sliderAdds container-fluid d-flex justify-content-sm-center flex-column align-items-center mt-5 mb-5'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className='wave position-sticky ps-0 pe-0'>
                <img src="/src/assets/wave.png" alt="" />
            </div>
        </section>
        </div>
        <div className='d-flex justify-content-between'>
          <CardCss/ >
          <CardCss/ >
          <CardCss/ >
        </div>
  </main>
  )
}
