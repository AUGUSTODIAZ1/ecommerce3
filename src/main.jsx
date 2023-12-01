import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Afuera de Routes elementos estaticos como navbar o footer */}
      <Routes>
        {/* En Routes van las rutas a mostrarse  */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);