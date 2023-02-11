import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import User from './pages/User/User'
import Home from './pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="signup" element={<User />}/>
    </Routes>
  </BrowserRouter>
)
