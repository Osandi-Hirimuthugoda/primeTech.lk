import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './TopBar.module.css'

const TopBar = ({ title = 'PrimeTechLK', showBack = false, showCart = false, cartCount = 0 }) => {
  const navigate = useNavigate()
  return (
    <header className={styles.bar}>
      {showBack ? (
        <button className={styles.iconBtn} onClick={() => navigate(-1)}>←</button>
      ) : (
        <div className={styles.spacer} />
      )}
      <span className={styles.title}>{title}</span>
      {showCart ? (
        <button className={styles.iconBtn} onClick={() => navigate('/cart')}>
          🛒{cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </button>
      ) : (
        <button className={styles.iconBtn}>🔔</button>
      )}
    </header>
  )
}

export default TopBar
