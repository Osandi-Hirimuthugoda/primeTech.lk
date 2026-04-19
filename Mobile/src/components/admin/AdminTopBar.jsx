import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AdminTopBar.module.css'

const AdminTopBar = ({ onMenuClick }) => {
  return (
    <header className={styles.bar}>
      <button className={styles.menuBtn} onClick={onMenuClick}>☰</button>
      <span className={styles.title}>PrimeTech Admin</span>
      <div className={styles.avatar}>👤</div>
    </header>
  )
}

export default AdminTopBar
