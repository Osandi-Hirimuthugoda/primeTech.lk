import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/customer/Login/Login'
import Register from './pages/customer/Login/Register'
import Home from './pages/customer/Home/Home'
import Shop from './pages/customer/Shop/Shop'
import Product from './pages/customer/Product/Product'
import Cart from './pages/customer/Cart/Cart'
import AI from './pages/customer/AI/AI'
import WarrantyClaim from './pages/customer/WarrantyClaim/WarrantyClaim'
import OrderTracking from './pages/customer/OrderTracking/OrderTracking'
import Compare from './pages/customer/Compare/Compare'
import RepairTracker from './pages/customer/RepairTracker/RepairTracker'
import ReferralRewards from './pages/customer/ReferralRewards/ReferralRewards'
import TradeIn from './pages/customer/TradeIn/TradeIn'
import AdminProducts from './pages/admin/Products/AdminProducts'
import AdminNewProduct from './pages/admin/Products/AdminNewProduct'
import AdminProductDetail from './pages/admin/Products/AdminProductDetail'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/ai" element={<AI />} />
      <Route path="/warranty" element={<WarrantyClaim />} />
      <Route path="/order-tracking" element={<OrderTracking />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/repair-tracker" element={<RepairTracker />} />
      <Route path="/referral-rewards" element={<ReferralRewards />} />
      <Route path="/trade-in" element={<TradeIn />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/products/new" element={<AdminNewProduct />} />
      <Route path="/admin/products/:id" element={<AdminProductDetail />} />
    </Routes>
  )
}

export default App
