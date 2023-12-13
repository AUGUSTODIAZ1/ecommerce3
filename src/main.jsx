import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/homePage/HomePage.module';
import { FooterAD } from './components/footerPage/FooterAD.modules';
import Error404 from './Pages/errorPage/Error404.module';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar-Component/NavbarComp.modules';
import LoginPanel from './Pages/LoginPanel/LoginPanel';
import RegisterPanel from './Pages/RegisterPanel/RegisterPanel';
// import Admin from './Pages/Admin/Admin';


// const user = {
//   isLog: true,
//   role: 'admin',
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Afuera de Routes elementos estaticos como navbar o footer */}
        <NavbarComp path='/Navbar' elemt={<NavbarComp />} />
      <Routes>
        {/* <Route path='/Register' element={<Register/>}/> */}
        <Route path="/" element={<HomePage />} />
        {/* En Routes van las rutas a mostrarse  */}
        <Route path='*' element={<Error404/>}/>
        <Route path='/Login' element={<LoginPanel />}/>
        <Route path='/Register' element={<RegisterPanel/>}/>
        {/* <Route path='/admin' element={ user.isLog && user.role == 'admin' ? <Admin /> : <Error404 />} /> */}
      </Routes>
      <FooterAD/>
    </BrowserRouter>
  </React.StrictMode>,
);