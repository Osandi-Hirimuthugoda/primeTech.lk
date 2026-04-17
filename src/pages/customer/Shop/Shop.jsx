import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './Shop.module.css'
import samsung from '../../../assets/images/image 12.png'
import zfold from '../../../assets/images/image 24.png'
import pixel from '../../../assets/images/pixel 10 pro.png'

const filters = ['BRANDS', 'PRICE', 'STORAGE', 'COLOR']

const products = [
  { id: 1, name: 'Samsung S26 Ultra', price: '$1,199', storage: '256GB', rating: 4.8, reviews: 1200, img: samsung },
  { id: 2, name: 'Pixel Pro 5', price: '$949', storage: '128GB', rating: 4.6, reviews: 890, img: pixel },
  { id: 3, name: 'Galaxy Fold 7', price: '$1,799', storage: '512GB', rating: 4.9, reviews: 540, img: zfold },
]

const Shop = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('BRANDS')

  return (
    <div className={styles.page}>
      <TopBar showCart cartCount={2} />

      <div className={styles.header}>
        <h1 className={styles.title}>Explore Innovations</h1>
        <p className={styles.sub}>Curated high-end mobile technology.</p>
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <span>🔍</span>
        <input className={styles.searchInput} placeholder="Search devices, accessories..." />
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className={styles.list}>
        {products.map((p) => (
          <div key={p.id} className={styles.card} onClick={() => navigate(`/product/${p.id}`)}>
            <div className={styles.imgBox}>
              <img src={p.img} alt={p.name} className={styles.cardImageContent} />
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{p.name}</p>
              <p className={styles.storage}>{p.storage}</p>
              <div className={styles.ratingRow}>
                <span className={styles.star}>★</span>
                <span className={styles.rating}>{p.rating}</span>
                <span className={styles.reviews}>({p.reviews.toLocaleString()})</span>
              </div>
              <p className={styles.desc}>Next-gen mobile processing with the revolutionary Titan Chipset.</p>
            </div>
            <div className={styles.right}>
              <p className={styles.price}>{p.price}</p>
              <button className={styles.cartBtn} onClick={(e) => { e.stopPropagation(); }}>🛒</button>
            </div>
          </div>
        ))}
      </div>

      {/* Trade-In Banner */}
      <div className={styles.tradeBanner}>
        <div className={styles.tradeIcon}>🔄</div>
        <div>
          <p className={styles.tradeTitle}>Trade in your old tech.</p>
          <p className={styles.tradeSub}>Get up to $650 toward your new iPhone 16 Pro when you trade in an eligible device.</p>
          <span className={styles.tradeLink} onClick={() => navigate('/trade-in')}>How it works →</span>
        </div>
        <button className={styles.tradeBtn} onClick={() => navigate('/trade-in')}>Check Trade-In Value</button>
      </div>

      {/* Compare Banner */}
      <div className={styles.compareBanner}>
        <p className={styles.compareTitle}>Decide with confidence.</p>
        <p className={styles.compareSub}>Not sure which Phone is right for you? Compare iPhone 16 Pro with our full lineup to find your perfect match.</p>
        <button className={styles.compareBtn} onClick={() => navigate('/compare')}>⚖ Compare with other devices</button>
      </div>

      <div style={{ height: 20 }} />
      <BottomNav />
    </div>
  )
}

export default Shop
