import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/homePage/HomePage.module';
import { FooterAD } from './components/footerPage/FooterAD.modules';
import Error404 from './Pages/errorPage/Error404.module';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/footerPage/Navbar-Component/NavbarComp.modules';
import { DetailPage } from './Pages/detailPage/DetailPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Afuera de Routes elementos estaticos como navbar o footer */}
        <NavbarComp path='/Navbar' elemt={<NavbarComp />} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* En Routes van las rutas a mostrarse  */}
        <Route path='/Error' element={<Error404 />}/>
        <Route path='/Detailpage' element={<DetailPage />}/>
      </Routes>
      <FooterAD/>
    </BrowserRouter>
  </React.StrictMode>,
);