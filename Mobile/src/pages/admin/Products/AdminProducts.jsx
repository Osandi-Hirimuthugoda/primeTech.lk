import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminTopBar from '../../../components/admin/AdminTopBar'
import styles from './AdminProducts.module.css'
import headphone from '../../../assets/images/Headphones.png'
import iphone from '../../../assets/images/iPhone 15 Pro Titanium.png'
import macbook from '../../../assets/images/MacBook Pro.png'
import watch from '../../../assets/images/Watch.png'

const categories = ['All Items', 'Phones', 'Laptops', 'Audio', 'Wearables']

const products = [
  { id: 1, category: 'PHONES', name: 'iPhone 15 Pro Max', price: '$1,199', stock: 12, status: 'in', updated: '2h ago', color: '#1c1c1e', img: iphone },
  { id: 2, category: 'LAPTOPS', name: 'MacBook Pro 16" M3', price: '$2,499', stock: 2, status: 'low', updated: '5h ago', color: '#2c2c2e', img: macbook },
  { id: 3, category: 'AUDIO', name: 'AirPods Max Space Gray', price: '$549', stock: 45, status: 'in', updated: '1d ago', color: '#111', img: headphone },
  { id: 4, category: 'WEARABLES', name: 'Ultra Watch 2 Ocean', price: '$799', stock: 8, status: 'in', updated: '3h ago', color: '#3a3a3c', img: watch },
]

const AdminProducts = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All Items')
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCat = activeFilter === 'All Items' || p.category.toLowerCase() === activeFilter.toLowerCase()
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className={styles.page}>
      <AdminTopBar />

      <div className={styles.scroll}>
        <p className={styles.tag}>INVENTORY CONTROL</p>
        <h1 className={styles.title}>Stock Overview</h1>

        {/* Search */}
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.searchInput}
            placeholder="Search product serial or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {categories.map((c) => (
            <button
              key={c}
              className={`${styles.filterBtn} ${activeFilter === c ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className={styles.list}>
          {filtered.map((p) => (
            <div
              key={p.id}
              className={`${styles.card} ${p.status === 'low' ? styles.cardLow : ''}`}
              onClick={() => navigate(`/admin/products/${p.id}`)}
            >
              <div className={styles.imgBox} style={{ background: p.color }} >
                <img src={p.img} alt={p.name} className={styles.img} />
              </div>
              <div className={styles.info}>
                <p className={styles.category}>{p.category}</p>
                <p className={styles.name}>{p.name}</p>
                <div className={styles.stockRow}>
                  {p.status === 'low'
                    ? <span className={styles.badgeLow}>LOW STOCK – {p.stock} LEFT</span>
                    : <span className={styles.badgeIn}>{p.stock} IN STOCK</span>
                  }
                  <span className={styles.updated}>Last updated {p.updated}</span>
                </div>
              </div>
              <p className={styles.price}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <button className={styles.fab} onClick={() => navigate('/admin/products/new')}>+</button>
    </div>
  )
}

export default AdminProducts
