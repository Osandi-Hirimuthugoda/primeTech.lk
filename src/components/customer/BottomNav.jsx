import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './BottomNav.module.css'

const items = [
  { label: 'Home', path: '/home', icon: '🏠' },
  { label: 'Shop', path: '/shop', icon: '🛍' },
  { label: 'AI', path: '/ai', icon: '✦' },
  { label: 'Warranty', path: '/warranty', icon: '🛡' },
]

const BottomNav = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <>
      {/* Mobile bottom nav */}
      <nav className={styles.bottomNav}>
        {items.map((item) => (
          <button
            key={item.path}
            className={`${styles.item} ${pathname === item.path ? styles.active : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Desktop sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <span className={styles.brandDot}>✦</span>
          <span className={styles.brandName}>PrimeTechLK</span>
        </div>
        <nav className={styles.sidebarNav}>
          {[
            { label: 'Home', path: '/home', icon: '🏠' },
            { label: 'Shop', path: '/shop', icon: '🛍' },
            { label: 'AI Assistant', path: '/ai', icon: '✦' },
            { label: 'Warranty', path: '/warranty', icon: '🛡' },
            { label: 'Trade-In', path: '/trade-in', icon: '🔄' },
            { label: 'Repair', path: '/repair-tracker', icon: '🔧' },
            { label: 'Order Track', path: '/order-tracking', icon: '📡' },
            { label: 'Compare', path: '/compare', icon: '⚖' },
            { label: 'Referrals', path: '/referral-rewards', icon: '🎁' },
          ].map((item) => (
            <button
              key={item.path}
              className={`${styles.sideItem} ${pathname === item.path ? styles.sideActive : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className={styles.sideLabel}>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <button className={styles.sideItem} onClick={() => navigate('/login')}>
            <span className={styles.sideLabel}>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default BottomNav
