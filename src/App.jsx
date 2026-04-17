import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Customer Pages
import Login from './pages/customer/Login/Login'
import Register from './pages/customer/Login/Register'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
