import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import '../LoginPanel/Style.moduleee.css'
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPanel = () => {
  const urlBackend = import.meta.env.VITE_BASE_URL;
  const navigate =  useNavigate() 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data, e) => {
    e.preventDefault()
    try {
      const resp = await fetch(`${urlBackend}/login`, {
        method:'POST',
        body: JSON.stringify(data),
        headers:{
          "Content-Type": "application/json"
        }
      })
      const json = await resp.json()
      console.log(json);
      Swal.fire({
        title: 'Store',
        text: json.mensaje,
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      }).then(function() {
        navigate('/')
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
    <Container className="d-flex justify-content-center mt-5 caja-login ">
      <form onSubmit={handleSubmit(onSubmit)} className="col-lg-5 col-12">
      <Row>
      <h2 className="fw-bold text-center pt-2 mb-4 ">Inicio de sesi&oacute;n</h2>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">Correo</label><br />
          <input 
            required
            type="email" 
            name="email" 
            className="form-control entrada-login" 
            id="email" 
            {...register("email", { 
              required: "Debe ingresar un correo.",
              pattern:  {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Ingresa un correo válido."
              }
              })
            } 
          />
          {errors.email && <p className="error-icon">{errors.email.message}</p>}
          <br />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Contrase&ntilde;a</label><br />
          <input 
            required
            type="password" 
            name="password" 
            className="form-control entrada-login" 
            id="password" 
            {...register("password", { 
              required: "Debe ingresar una contraseña",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "Ingresa una contraseña válida."
              } 
              })
            } 
          />
          {errors.password && <p className="error-icon">{errors.password.message}</p>}
          <br />
        </div>
        <Col md={4} xs={6} lg={6} className="d-grid gap-2 mx-auto">
          <button type="submit" className="btn boton-login" >Ingresa</button>
        </Col>
        <div className="my-3">
          <span>No estas registrado? <a href="/register" className="link-login">Suscr&iacute;bete aqu&iacute;</a></span>
        </div>
      </Row>
     </form>
    </Container>
  );
}

export default LoginPanel;




