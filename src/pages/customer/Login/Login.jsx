import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.css'
// Replace with your actual image: import phoneImg from '../../../assets/images/phone-hero.png'
const phoneImg = null

const Login = () => {
  const [role, setRole] = useState('customer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: connect to backend
    navigate('/home')
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Header */}
        <p className={styles.brand}>PrimeTechLK</p>

        {/* Hero Image */}
        <div className={styles.heroWrap}>
          <img src={phoneImg} alt="PrimeTech device" className={styles.heroImg} style={{ display: phoneImg ? 'block' : 'none' }} />
        </div>

        {/* Title */}
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Access your curated tech ecosystem.</p>

        {/* Role Toggle */}
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${role === 'customer' ? styles.active : ''}`}
            onClick={() => setRole('customer')}
          >
            CUSTOMER
          </button>
          <button
            className={`${styles.toggleBtn} ${role === 'admin' ? styles.active : ''}`}
            onClick={() => setRole('admin')}
          >
            ADMIN
          </button>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.field}>
            <label className={styles.label}>EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="name@company.com"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <div className={styles.passwordHeader}>
              <label className={styles.label}>PASSWORD</label>
              <Link to="/forgot-password" className={styles.forgot}>FORGOT?</Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            LOGIN TO PRIMETECH →
          </button>
        </form>

        {/* Footer */}
        <p className={styles.footer}>
          New to PrimeTech?{' '}
          <Link to="/register" className={styles.link}>Create Account</Link>
        </p>

        {/* Trust Icons */}
        <div className={styles.trustIcons}>
          <span className={styles.icon}>🛡</span>
          <span className={styles.icon}>✅</span>
          <span className={styles.icon}>🔒</span>
        </div>
      </div>
    </div>
  )
}

export default Login
