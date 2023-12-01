import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* en Routes van las rutas a mostrarse // Afuera de Routes elementos estaticos como navbar o footer */}
      <Routes>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
