import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './Home.module.css'

const quickLinks = [
  { icon: '📦', label: 'New Arrivals', path: '/shop' },
  { icon: '🔄', label: 'Trade-In', path: '/trade-in' },
  { icon: '🛡', label: 'Warranty', path: '/warranty' },
  { icon: '🔧', label: 'Repair', path: '/repair-tracker' },
  { icon: '📡', label: 'Order Track', path: '/order-tracking' },
]

const categories = [
  { icon: '💻', label: 'Laptops' },
  { icon: '🎧', label: 'Audio' },
  { icon: '📱', label: 'Tablets' },
]

const popular = [
  { id: 1, tag: 'APPLE', name: 'Pixel Prime', price: '$999', color: '#111' },
  { id: 2, tag: 'POPULAR', name: 'MacBook Pro', price: '$1,199', color: '#1a1a2e' },
]

const latest = [
  { id: 1, tag: 'NEW ARRIVAL', name: 'Pixel 10 Pro', price: '$999', color: '#d1fae5' },
  { id: 2, tag: 'POPULAR', name: 'ZFold 7', price: '$1,799', color: '#dbeafe' },
]

const compareSpecs = [
  { label: 'iPhone 16 Pro Max', sub: 'A18 Pro Chip', price: '$1,199' },
  { label: 'AI Booster Pro', sub: 'Tensor G4', price: '$999' },
]

const Home = () => {
  const navigate = useNavigate()
  const [brand, setBrand] = useState('All')

  return (
    <div className={styles.page}>
      <TopBar showCart cartCount={2} />

      {/* Hero */}
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
          <button
            key={b}
            className={`${styles.brandBtn} ${brand === b ? styles.brandActive : ''}`}
            onClick={() => setBrand(b)}
          >{b}</button>
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

      {/* Current Categories */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Current Categories</span>
        </div>
        <div className={styles.categoryRow}>
          {categories.map((c) => (
            <div key={c.label} className={styles.categoryCard} onClick={() => navigate('/shop')}>
              <div className={styles.categoryImgBox}>{c.icon}</div>
              <span className={styles.categoryLabel}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Hardware */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Popular Hardware</span>
          <span className={styles.seeAll} onClick={() => navigate('/shop')}>View All →</span>
        </div>
        <div className={styles.productRow}>
          {popular.map((p) => (
            <div key={p.id} className={styles.darkCard} onClick={() => navigate(`/product/${p.id}`)}>
              <div className={styles.darkCardImg} style={{ background: p.color }} />
              <span className={styles.darkCardTag}>{p.tag}</span>
              <p className={styles.darkCardName}>{p.name}</p>
              <p className={styles.darkCardPrice}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Banner */}
      <div className={styles.aiBanner}>
        <div className={styles.aiTop}>
          <div className={styles.aiIcon}>✦</div>
          <div>
            <p className={styles.aiTitle}>AI Tech Expert</p>
            <p className={styles.aiSub}>Get personalized recommendations for your unique needs.</p>
          </div>
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
          {latest.map((p) => (
            <div key={p.id} className={styles.lightCard} onClick={() => navigate(`/product/${p.id}`)}>
              <div className={styles.lightCardImg} style={{ background: p.color }} />
              <span className={styles.productTag}>{p.tag}</span>
              <p className={styles.productName}>{p.name}</p>
              <p className={styles.productPrice}>{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Tech */}
      <div className={styles.featuredBanner}>
        <div className={styles.featuredLeft}>
          <span className={styles.featuredTag}>FEATURED TECH</span>
          <h2 className={styles.featuredTitle}>Ultra<br />Performance</h2>
          <p className={styles.featuredSub}>Next-generation mobile computing power.</p>
          <p className={styles.featuredPrice}>$1,199</p>
          <button className={styles.addBtn} onClick={() => navigate('/product/1')}>Add to Cart</button>
        </div>
        <div className={styles.featuredImgBox} />
      </div>

      {/* Compare Specs */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Compare Specs</span>
          <span className={styles.seeAll} onClick={() => navigate('/compare')}>Compare →</span>
        </div>
        <div className={styles.compareRow}>
          {compareSpecs.map((c, i) => (
            <div key={i} className={styles.compareCard} onClick={() => navigate('/compare')}>
              <div className={styles.compareImgBox} />
              <p className={styles.compareName}>{c.label}</p>
              <p className={styles.compareSub}>{c.sub}</p>
              <p className={styles.comparePrice}>{c.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomPad} />
      <BottomNav />
    </div>
  )
}

export default Home
