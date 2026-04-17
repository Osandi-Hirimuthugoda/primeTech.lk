import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './BottomNav.module.css'

const HomeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
const ShopIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
const AIIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const WarrantyIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>

const items = [
  { label: 'Home', path: '/home', Icon: HomeIcon },
  { label: 'Shop', path: '/shop', Icon: ShopIcon },
  { label: 'AI', path: '/ai', Icon: AIIcon },
  { label: 'Warranty', path: '/warranty', Icon: WarrantyIcon },
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
            <item.Icon />
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
