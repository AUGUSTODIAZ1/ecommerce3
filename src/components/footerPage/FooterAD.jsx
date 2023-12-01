import './Footer.css'

export const FooterAD = () => {
  return (
    
    <footer>
        <div className="logo">
            <a href="">
                <img src="./src/assets/klipartz.com.png" alt="logoManzana" />
            </a>
        </div>
        <div className="container__footer">
            <div className="box__footer">
            <div className="terms">
                <p>
                Nuestro productos Ios ofrecer a
                los clientes la comodidad de comprar nuestros productos o en línea de
                manera rápida y segura. Esto incluye: <b>Accesibilidad</b> Permitir a
                los clientes acceder a una variedad de productos en cualquier momento
                a través de Internet.
                </p>
            </div>
            </div>
            <div className="box__footer">
             <h2>Sugerencias</h2>
             <a href="#">Ihpones</a>
             <a href="#">Computadoras</a>
             <a href="#">Auriculares IOS </a>
             <a href="#">Relojes IOS</a>
            </div>
            <div className="box__footer">
              <h2>Compañia</h2>
            <a href="#">Acerca de Nosotross</a>
            <a href="#">Almacenes</a>
            <a href="#">Envios Full</a>
            <a href="#">Servicios</a>
            </div>
            <div className="box__footer">
            <h2>Redes Sociales</h2>
            <a href="https://www.facebook.com/" className="face">
                <i className="fab fa-facebook-square" /> Facebook
            </a>
            <a
                href="https://twitter.com/?lang=es"
                className="twitter"
            >
                <i className="fab fa-twitter-square" /> Twitter
            </a>
            <a href="https://www.linkedin.com/feed/" className="link">
                <i className="fab fa-linkedin" /> Linkedin
            </a>
            <a href="https://www.instagram.com/" className="insta">
                <i className="fab fa-instagram-square" /> Instagram
            </a>
            </div>
        </div>
        <div className="box__copyright">
            <a href="./register.html">
            <img src="https://www.hostdron.com/wp-content/uploads/2019/06/pagopaypal.jpg" alt="Pagos" />
            </a>
            <hr />
            <p>
            Todos los derechos reservados © 2023 <b>AIOS Ecommerce</b>
            </p>
        </div>
</footer>

    
  )
}
