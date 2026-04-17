import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './Compare.module.css'
import iphone15 from '../../../assets/images/iPhone 15 Pro Titanium.png'
import pixel8 from '../../../assets/images/Pixel 8 Pro Porcelain.png'

const devices = {
  'iPhone 15 Pro': {
    brand: 'APPLE', price: '$999', color: '#1c1c1e', img: iphone15,
    specs: {
      'DISPLAY TECHNOLOGY': { val: 'Super Retina XDR', sub: '6.1" OLED, 120Hz' },
      'PERFORMANCE':        { val: 'A17 Pro', sub: '3nm Architecture' },
      'CAMERA SYSTEM':      { val: 'Main + Tele', sub: '48MP Wide, 3x Opt' },
      'ENDURANCE':          { val: 'Up to 23 hrs', sub: 'Video playback' },
      'INTELLIGENT FEATURES': { val: 'Spatial Video', sub: 'VISION PRO SYNC' },
    },
  },
  'Pixel 8 Pro': {
    brand: 'GOOGLE', price: '$899', color: '#e8f0fe', img: pixel8,
    specs: {
      'DISPLAY TECHNOLOGY': { val: 'Super Actua', sub: '6.7" LTPO, 120Hz' },
      'PERFORMANCE':        { val: 'Tensor G3', sub: 'Next-Gen AI Core' },
      'CAMERA SYSTEM':      { val: 'Main + Tele', sub: '50MP Wide, 5x Opt' },
      'ENDURANCE':          { val: '24+ hrs', sub: 'Extreme battery saver' },
      'INTELLIGENT FEATURES': { val: 'Magic Editor', sub: 'GENERATIVE AI' },
    },
  },
}

const SECTION_ICONS = {
  'DISPLAY TECHNOLOGY': '⊡',
  'PERFORMANCE': '⚡',
  'CAMERA SYSTEM': '📷',
  'ENDURANCE': '🔋',
  'INTELLIGENT FEATURES': '✦',
}

const Compare = () => {
  const navigate = useNavigate()
  const [leftKey, setLeftKey] = useState('iPhone 15 Pro')
  const [rightKey, setRightKey] = useState('Pixel 8 Pro')
  const [leftSearch, setLeftSearch] = useState('iPhone 15 Pro')
  const [rightSearch, setRightSearch] = useState('Pixel 8 Pro')

  const left = devices[leftKey]
  const right = devices[rightKey]
  const sections = Object.keys(left.specs)

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>
        <p className={styles.tag}>THE TECH CURATOR</p>
        <h1 className={styles.title}>Compare<br />Devices</h1>

        {/* Search Row */}
        <div className={styles.searchRow}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              className={styles.searchInput}
              value={leftSearch}
              onChange={(e) => setLeftSearch(e.target.value)}
              onBlur={() => devices[leftSearch] && setLeftKey(leftSearch)}
            />
          </div>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              className={styles.searchInput}
              value={rightSearch}
              onChange={(e) => setRightSearch(e.target.value)}
              onBlur={() => devices[rightSearch] && setRightKey(rightSearch)}
            />
          </div>
        </div>

        {/* Device Cards */}
        <div className={styles.deviceRow}>
          <div className={styles.deviceCard}>
            <div className={styles.deviceImgBox} style={{ background: left.color }}>
              <img src={left.img} alt={left.name} className={styles.deviceImageContent} />
              <div className={styles.swapBtn}>⇄</div>
            </div>
            <p className={styles.deviceBrand}>{left.brand}</p>
            <p className={styles.devicePrice}>{left.price}</p>
          </div>
          <div className={`${styles.deviceCard} ${styles.deviceCardRight}`}>
            <div className={styles.deviceImgBox} style={{ background: right.color }}>
              <img src={right.img} alt={right.name} className={styles.deviceImageContent} />
            </div>
            <p className={styles.deviceBrand}>{right.brand}</p>
            <p className={styles.devicePrice}>{right.price}</p>
          </div>
        </div>

        {/* Spec Sections */}
        {sections.map((section) => (
          <div key={section} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>{SECTION_ICONS[section]}</span>
              <span className={styles.sectionLabel}>{section}</span>
            </div>
            <div className={styles.specRow}>
              <div className={styles.specCell}>
                <p className={styles.specVal}>{left.specs[section].val}</p>
                <p className={styles.specSub}>{left.specs[section].sub}</p>
              </div>
              <div className={styles.specDivider} />
              <div className={styles.specCell}>
                <p className={styles.specVal}>{right.specs[section].val}</p>
                <p className={styles.specSub}>{right.specs[section].sub}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Actions */}
        <button className={styles.getBtn} onClick={() => navigate('/product/1')}>
          Get {leftKey} →
        </button>
        <button className={styles.saveBtn}>Save Comparison</button>

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default Compare
