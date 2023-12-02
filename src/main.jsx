import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FooterAD } from './components/footerPage/FooterAD';
import Error404 from './Pages/errorPage/Error404';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Afuera de Routes elementos estaticos como navbar o footer */}
      <Routes>
        {/* En Routes van las rutas a mostrarse  */}
        <Route path='/Error' element={<Error404/>}/>
      </Routes>
      <FooterAD/>
    </BrowserRouter>
  </React.StrictMode>,
);