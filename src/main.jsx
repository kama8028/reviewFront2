import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import StartPage from './StartPage'
import Review from './Review'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
