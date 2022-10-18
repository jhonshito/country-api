import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataPaises from './components/DataPaises';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='dataPaises/:name' element={<DataPaises />} />
  </Routes>
  </BrowserRouter>
);
