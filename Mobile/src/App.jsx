import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/customer/mobile/Login/Login'
import Register from './pages/customer/mobile/Login/Register'
import Home from './pages/customer/mobile/Home/Home'
import Shop from './pages/customer/mobile/Shop/Shop'
import Product from './pages/customer/mobile/Product/Product'
import Cart from './pages/customer/mobile/Cart/Cart'
import AI from './pages/customer/mobile/AI/AI'
import WarrantyClaim from './pages/customer/mobile/WarrantyClaim/WarrantyClaim'
import OrderTracking from './pages/customer/mobile/OrderTracking/OrderTracking'
import Compare from './pages/customer/mobile/Compare/Compare'
import RepairTracker from './pages/customer/mobile/RepairTracker/RepairTracker'
import ReferralRewards from './pages/customer/mobile/ReferralRewards/ReferralRewards'
import TradeIn from './pages/customer/mobile/TradeIn/TradeIn'
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
