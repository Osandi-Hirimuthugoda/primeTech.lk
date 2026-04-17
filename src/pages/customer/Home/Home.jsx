import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './Home.module.css'

const quickLinks = [
  { icon: '📦', label: 'New Arrivals', path: '/shop' },
  { icon: '🔄', label: 'Trade-In', path: '/trade-in' },
  { icon: '🛡', label: 'Warranty Tracker', path: '/warranty' },
  { icon: '🔧', label: 'Repair Scheduler', path: '/repair-tracker' },
  { icon: '📡', label: 'Order Track', path: '/order-tracking' },
]

const featured = [
  { id: 1, name: 'Pixel 10 Pro', price: '$999', tag: 'NEW ARRIVAL', img: null },
  { id: 2, name: 'ZFold 7', price: '$1,799', tag: 'POPULAR', img: null },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <TopBar showCart cartCount={2} />

      {/* Hero Banner */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.heroTag}>LATEST RELEASE</span>
          <h1 className={styles.heroTitle}>Titanium<br />Pure. Power.</h1>
          <p className={styles.heroSub}>Experience the new flagship smartphone mobile engineering.</p>
          <button className={styles.heroBtn} onClick={() => navigate('/shop')}>Explore Now</button>
        </div>
        <div className={styles.heroImgBox} />
      </div>

      {/* Brand Filter */}
      <div className={styles.brandRow}>
        {['All', 'Apple', 'Samsung'].map((b) => (
          <button key={b} className={`${styles.brandBtn} ${b === 'All' ? styles.brandActive : ''}`}>{b}</button>
        ))}
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon}>🔍</span>
        <input className={styles.searchInput} placeholder="Search devices, accessories..." />
      </div>

      {/* Quick Links */}
      <div className={styles.quickLinks}>
        {quickLinks.map((q) => (
          <div key={q.label} className={styles.quickItem} onClick={() => navigate(q.path)}>
            <div className={styles.quickIcon}>{q.icon}</div>
            <span className={styles.quickLabel}>{q.label}</span>
          </div>
        ))}
      </div>

      {/* AI Banner */}
      <div className={styles.aiBanner}>
        <div className={styles.aiIcon}>✦</div>
        <div>
          <p className={styles.aiTitle}>AI Tech Expert</p>
          <p className={styles.aiSub}>Get personalized recommendations for your unique needs.</p>
        </div>
        <button className={styles.aiBtn} onClick={() => navigate('/ai')}>Start AI Consultation</button>
      </div>

      {/* Latest Drop */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>The Latest Drop</span>
        <span className={styles.seeAll} onClick={() => navigate('/shop')}>View All →</span>
        </div>
        <div className={styles.productRow}>
          {featured.map((p) => (
            <div key={p.id} className={styles.productCard} onClick={() => navigate(`/product/${p.id}`)}>
              <div className={styles.productImg} />
              <span className={styles.productTag}>{p.tag}</span>
              <p className={styles.productName}>{p.name}</p>
              <p className={styles.productPrice}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Tech */}
      <div className={styles.featuredBanner}>
        <span className={styles.featuredTag}>FEATURED TECH</span>
        <h2 className={styles.featuredTitle}>Ultra Performance</h2>
        <p className={styles.featuredSub}>Next-generation mobile computing power.</p>
        <p className={styles.featuredPrice}>$1,199</p>
        <button className={styles.addBtn} onClick={() => navigate('/product/1')}>Add to Cart</button>
      </div>

      <div className={styles.bottomPad} />
      <BottomNav />
    </div>
  )
}

export default Home
