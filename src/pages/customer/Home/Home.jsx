import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './Home.module.css'
import titaniumphone from '../../../assets/images/home1.png'
import pixelphone from '../../../assets/images/Phone.png'
import laptop from '../../../assets/images/Laptop.png'
import pixel10 from '../../../assets/images/pixel 10 pro.png'
import zfold from '../../../assets/images/zfold7.png'
import ultra from '../../../assets/images/ultra performance.png'


const quickLinks = [
  { icon: '📦', label: 'New Arrivals', path: '/shop' },
  { icon: '🔄', label: 'Trade-In', path: '/trade-in' },
  { icon: '🛡', label: 'Warranty', path: '/warranty' },
  { icon: '🔧', label: 'Repair', path: '/repair-tracker' },
  { icon: '📡', label: 'Order Track', path: '/order-tracking' },
]

const categories = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, label: 'Laptops' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>, label: 'Audio' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, label: 'Tablets' },
]

const popular = [
  { id: 1, tag: 'APPLE', name: 'Pixel Prime', price: '$999', color: '#111', img: pixelphone },
  { id: 2, tag: 'POPULAR', name: 'MacBook Pro', price: '$1,199', color: '#1a1a2e', img: laptop },
]

const latest = [
  { id: 1, tag: 'NEW ARRIVAL', name: 'Pixel 10 Pro', price: '$999', color: '#d1fae5', img: pixel10 },
  { id: 2, tag: 'POPULAR', name: 'ZFold 7', price: '$1,799', color: '#dbeafe', img: zfold },
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
        <div className={styles.heroImgBox}>
          <img src={titaniumphone} alt="Titanium Phone" className={styles.heroImg} />
        </div>
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
        <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input className={styles.searchInput} placeholder="Search devices, accessories..." />
      </div>

      {/* Service Grid */}
      <div className={styles.section}>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard} onClick={() => navigate('/referral-rewards')}>
            <div className={styles.serviceIconWrap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.serviceIcon}><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
            </div>
            <p className={styles.serviceName}>Referral Rewards</p>
            <p className={styles.serviceSub}>Earn $50 per friend</p>
          </div>
          <div className={styles.serviceCard} onClick={() => navigate('/order-tracking')}>
            <div className={styles.serviceIconWrap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.serviceIcon}><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <p className={styles.serviceName}>Track My Order</p>
            <p className={styles.serviceSub}>Real-time updates</p>
          </div>
          <div className={styles.serviceCard} onClick={() => navigate('/warranty')}>
            <div className={styles.serviceIconWrap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.serviceIcon}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            </div>
            <p className={styles.serviceName}>Warranty Tracker</p>
            <p className={styles.serviceSub}>Check coverage</p>
          </div>
          <div className={styles.serviceCard} onClick={() => navigate('/repair-tracker')}>
            <div className={styles.serviceIconWrap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.serviceIcon}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <p className={styles.serviceName}>Repair Selection</p>
            <p className={styles.serviceSub}>Book a service</p>
          </div>
        </div>
        <div className={styles.serviceCardWide} onClick={() => navigate('/trade-in')}>
          <div className={styles.serviceIconWrap}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={styles.serviceIcon}><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
          </div>
          <div>
            <p className={styles.serviceName}>Trade-in</p>
            <p className={styles.serviceSub}>Get instant credit</p>
          </div>
        </div>
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
              <div className={styles.darkCardImg}>
                <img src={p.img} alt={p.name} className={styles.cardImageContent} />
              </div>
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
              <div className={styles.lightCardImg}>
                <img src={p.img} alt={p.name} className={styles.cardImageContent} />
              </div>
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
        <div className={styles.featuredImgBox}>
          <img src={ultra} alt="Ultra Performance" className={styles.cardImageContent} />
        </div>
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
