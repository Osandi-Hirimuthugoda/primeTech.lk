import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './BottomNav.module.css'

const BottomNav = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const items = [
    { label: 'Home', path: '/home', icon: '🏠' },
    { label: 'Shop', path: '/shop', icon: '🛍' },
    { label: 'AI', path: '/ai', icon: '✦' },
    { label: 'Warranty', path: '/warranty', icon: '🛡' },
  ]

  return (
    <nav className={styles.nav}>
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
  )
}

export default BottomNav
