import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Register.module.css'
// Replace with your actual image: import gearImg from '../../../assets/images/gear-hero.png'
const gearImg = null

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to backend
    navigate('/login')
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <p className={styles.brand}>PrimeTechLK</p>

        {/* Hero Image */}
        <div className={styles.heroWrap}>
          <img src={gearImg} alt="Precision engineered" className={styles.heroImg} style={{ display: gearImg ? 'block' : 'none' }} />
          <div className={styles.badge}>
            <span className={styles.badgeLabel}>STATUS</span>
            <span className={styles.badgeValue}>Precision Engineered</span>
          </div>
        </div>

        <h1 className={styles.title}>Create your<br />Prime Account.</h1>
        <p className={styles.subtitle}>Join the future of high-end curated mobile technology.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>FULL NAME</label>
            <input
              name="name"
              type="text"
              placeholder="Johnathan Doe"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>EMAIL ADDRESS</label>
            <input
              name="email"
              type="email"
              placeholder="hello@primetech.lk"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>PASSWORD</label>
            <div className={styles.passwordWrap}>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••"
                className={styles.input}
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>CONFIRM PASSWORD</label>
            <input
              name="confirm"
              type="password"
              placeholder="••••••••••••"
              className={styles.input}
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </div>

          <label className={styles.checkLabel}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className={styles.checkbox}
            />
            <span>
              I agree to the{' '}
              <Link to="/terms" className={styles.link}>Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
              {' '}of PrimeTechLK.
            </span>
          </label>

          <button type="submit" className={styles.signupBtn} disabled={!agreed}>
            Sign Up →
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account?{' '}
          <Link to="/login" className={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
