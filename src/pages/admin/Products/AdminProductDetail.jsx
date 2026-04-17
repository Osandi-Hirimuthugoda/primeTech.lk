import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminTopBar from '../../../components/admin/AdminTopBar'
import styles from './AdminProductDetail.module.css'

const productData = {
  1: { name: 'iPhone 16 Pro', sub: 'Desert Titanium, 256GB', price: '1099', stock: '42', display: '6.3" OLED', chip: 'A18 Pro', camera: '48MP Triple', status: 'In Stock', color: '#1c1c1e' },
  2: { name: 'MacBook Pro 16" M3', sub: 'Space Black, 512GB', price: '2499', stock: '2', display: '16.2" Liquid', chip: 'M3 Pro', camera: '12MP', status: 'Low Stock', color: '#2c2c2e' },
  3: { name: 'AirPods Max', sub: 'Space Gray', price: '549', stock: '45', display: 'N/A', chip: 'H2', camera: 'N/A', status: 'In Stock', color: '#111' },
  4: { name: 'Ultra Watch 2 Ocean', sub: 'Titanium, 49mm', price: '799', stock: '8', display: '2.1" OLED', chip: 'S9', camera: 'N/A', status: 'In Stock', color: '#3a3a3c' },
}

const AdminProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const base = productData[id] || productData[1]

  const [name, setName] = useState(base.name)
  const [sub, setSub] = useState(base.sub)
  const [price, setPrice] = useState(base.price)
  const [stock, setStock] = useState(base.stock)

  const handleUpdate = () => {
    alert('Product updated!')
    navigate('/admin/products')
  }

  const handleDelete = () => {
    if (window.confirm('Delete this product?')) navigate('/admin/products')
  }

  return (
    <div className={styles.page}>
      <AdminTopBar />

      <div className={styles.scroll}>
        {/* Hero Image */}
        <div className={styles.heroBox} style={{ background: base.color }}>
          <div className={styles.statusCard}>
            <p className={styles.statusLabel}>STATUS</p>
            <p className={styles.statusVal}>{base.status}</p>
          </div>
        </div>

        {/* Product Identity */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>PRODUCT IDENTITY</p>
          <div className={styles.editRow}>
            <input className={styles.editInput} value={name} onChange={(e) => setName(e.target.value)} />
            <span className={styles.editIcon}>✏</span>
          </div>
          <div className={styles.divider} />
          <input className={styles.editInputSub} value={sub} onChange={(e) => setSub(e.target.value)} />
          <div className={styles.divider} />
        </div>

        {/* Pricing + Stock */}
        <div className={styles.twoCol}>
          <div className={styles.colField}>
            <p className={styles.sectionLabel}>PRICING (USD)</p>
            <div className={styles.priceRow}>
              <span className={styles.dollar}>$</span>
              <input className={styles.priceInput} value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.colField}>
            <p className={styles.sectionLabel}>STOCK LEVEL</p>
            <input className={styles.priceInput} value={stock} onChange={(e) => setStock(e.target.value)} />
            <div className={styles.divider} />
          </div>
        </div>

        {/* Quick Specs */}
        <p className={styles.sectionLabel}>QUICK SPECS</p>
        <div className={styles.specsRow}>
          {[
            { label: 'Display', val: base.display },
            { label: 'Chip', val: base.chip },
            { label: 'Camera', val: base.camera },
          ].map((s) => (
            <div key={s.label} className={styles.specCard}>
              <p className={styles.specLabel}>{s.label}</p>
              <p className={styles.specVal}>{s.val}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <button className={styles.updateBtn} onClick={handleUpdate}>Update Product</button>
        <button className={styles.deleteBtn} onClick={handleDelete}>🗑 Delete Product</button>

        <div className={styles.bottomPad} />
      </div>
    </div>
  )
}

export default AdminProductDetail
