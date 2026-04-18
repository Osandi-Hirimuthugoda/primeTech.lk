import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './TradeIn.module.css'
import tradein from '../../../assets/images/trade in.png'

const deviceTypes = ['iPhone', 'iPad', 'MacBook', 'Watch']

const screenConditions = [
  { id: 'flawless', label: 'Flawless', icon: '✓' },
  { id: 'cracked', label: 'Cracked/Dead', icon: '○' },
]

const powerConditions = [
  { id: 'on', label: 'Turns On', icon: '⏻' },
  { id: 'no_power', label: 'No Power', icon: '⏻' },
]

const bodyConditions = [
  { id: 'mint', label: 'Mint', icon: '✓' },
  { id: 'worn', label: 'Worn/Dented', icon: '○' },
]

const TradeIn = () => {
  const navigate = useNavigate()
  const [deviceType, setDeviceType] = useState('iPhone')
  const [search, setSearch] = useState('')
  const [screen, setScreen] = useState('flawless')
  const [power, setPower] = useState('on')
  const [body, setBody] = useState('mint')
  const [file, setFile] = useState(null)

  const estimatedValue = screen === 'flawless' && power === 'on' && body === 'mint' ? 450 : 280

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>
        {/* Header */}
        <p className={styles.tag}>TRADE-IN & UPGRADE</p>
        <h1 className={styles.title}>
          Turn your old tech into{' '}
          <span className={styles.titleBlue}>new possibilities.</span>
        </h1>

        {/* Hero Image Placeholder */}
        <div className={styles.heroImg} >
          <img src={tradein} alt="Trade-In" className={styles.heroImg} />
        </div>

        {/* Step 1 */}
        <div className={styles.stepHeader}>
          <div className={styles.stepBadge}>1</div>
          <span className={styles.stepTitle}>Select your device</span>
        </div>

        <div className={styles.searchRow}>
          <input
            className={styles.searchInput}
            placeholder="Search model (e.g., iPhone 14 Pro)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        <div className={styles.typeRow}>
          {deviceTypes.map((t) => (
            <button
              key={t}
              className={`${styles.typeBtn} ${deviceType === t ? styles.typeActive : ''}`}
              onClick={() => setDeviceType(t)}
            >{t}</button>
          ))}
        </div>

        {/* Step 2 */}
        <div className={styles.conditionCard}>
          <div className={styles.stepHeader}>
            <div className={styles.stepBadge}>2</div>
            <span className={styles.stepTitle}>Condition Details</span>
          </div>

          <p className={styles.condLabel}>SCREEN CONDITION</p>
          <div className={styles.condRow}>
            {screenConditions.map((c) => (
              <button
                key={c.id}
                className={`${styles.condBtn} ${screen === c.id ? styles.condActive : ''}`}
                onClick={() => setScreen(c.id)}
              >
                <span className={styles.condIcon}>{c.icon}</span>
                <span className={styles.condText}>{c.label}</span>
              </button>
            ))}
          </div>

          <p className={styles.condLabel}>POWER & FUNCTION</p>
          <div className={styles.condRow}>
            {powerConditions.map((c) => (
              <button
                key={c.id}
                className={`${styles.condBtn} ${power === c.id ? styles.condActive : ''}`}
                onClick={() => setPower(c.id)}
              >
                <span className={styles.condIcon}>{c.icon}</span>
                <span className={styles.condText}>{c.label}</span>
              </button>
            ))}
          </div>

          <p className={styles.condLabel}>BODY CONDITION</p>
          <div className={styles.condRow}>
            {bodyConditions.map((c) => (
              <button
                key={c.id}
                className={`${styles.condBtn} ${body === c.id ? styles.condActive : ''}`}
                onClick={() => setBody(c.id)}
              >
                <span className={styles.condIcon}>{c.icon}</span>
                <span className={styles.condText}>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upload */}
        <label className={styles.uploadBox}>
          <div className={styles.uploadIcon}>☁️</div>
          <p className={styles.uploadTitle}>Upload Receipt/Photo</p>
          <p className={styles.uploadSub}>PNG, JPG or PDF up to 10MB</p>
          <input type="file" accept=".png,.jpg,.jpeg,.pdf" className={styles.fileInput}
            onChange={(e) => setFile(e.target.files[0])} />
          {file && <p className={styles.fileName}>{file.name}</p>}
        </label>

        {/* Valuation Card */}
        <div className={styles.valuationCard}>
          <p className={styles.valuationLabel}>INSTANT VALUATION</p>
          <p className={styles.valuationSub}>Estimated Credit Value</p>
          <p className={styles.valuationPrice}>${estimatedValue}.00</p>
          <p className={styles.valuationLkr}>LKR {(estimatedValue * 322).toLocaleString()}*</p>
          <p className={styles.valuationNote}>*Value depends on physical inspection by our certified curators.</p>
        </div>

        {/* Actions */}
        <button className={styles.applyBtn}>Apply to Next Purchase</button>
        <button className={styles.storeBtn} onClick={() => navigate('/order-tracking')}>
          📍 Find a Store
        </button>

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default TradeIn
