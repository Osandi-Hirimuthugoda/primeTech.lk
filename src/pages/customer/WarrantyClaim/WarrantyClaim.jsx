import React, { useState } from 'react'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './WarrantyClaim.module.css'

const WarrantyClaim = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Claim submitted successfully!')
  }

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>
        <h1 className={styles.title}>Warranty Claim</h1>
        <p className={styles.subtitle}>
          Ensure your iPhone 16 Pro remains protected. Submit your claim details below for rapid processing.
        </p>

        {/* IMEI Track */}
        <div className={styles.trackRow}>
          <span className={styles.trackIcon}>⊞</span>
          <p className={styles.trackText}>Check Status by IMEI/Serial Number</p>
          <button className={styles.trackBtn}>TRACK</button>
        </div>

        {/* Form Card */}
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>FULL NAME</label>
            <input
              className={styles.input}
              placeholder="Enter your full legal name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className={styles.divider} />
          <div className={styles.field}>
            <label className={styles.label}>EMAIL ADDRESS</label>
            <input
              className={styles.input}
              type="email"
              placeholder="contact@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </form>

        {/* Device Card */}
        <div className={styles.deviceCard}>
          <div className={styles.deviceLeft}>
            <div className={styles.deviceIcon}>📱</div>
            <div>
              <p className={styles.deviceName}>iPhone 16 Pro</p>
              <p className={styles.deviceSub}>Natural Titanium</p>
            </div>
          </div>
          <span className={styles.selectedBadge}>SELECTED</span>
        </div>

        {/* Issue Description */}
        <div className={styles.card}>
          <label className={styles.label}>ISSUE DESCRIPTION</label>
          <textarea
            className={styles.textarea}
            placeholder="Please describe the technical defect or issue in detail..."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            rows={4}
            required
          />
        </div>

        {/* Upload */}
        <label className={styles.uploadBox}>
          <div className={styles.uploadIcon}>☁️</div>
          <p className={styles.uploadTitle}>Upload Receipt/Photo</p>
          <p className={styles.uploadSub}>PNG, JPG or PDF up to 10MB</p>
          <input
            type="file"
            accept=".png,.jpg,.jpeg,.pdf"
            className={styles.fileInput}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {file && <p className={styles.fileName}>{file.name}</p>}
        </label>

        {/* Submit */}
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Submit Claim →
        </button>
        <p className={styles.terms}>
          By submitting, you agree to PrimeTechLK's warranty terms and technical inspection protocols.
        </p>

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default WarrantyClaim
