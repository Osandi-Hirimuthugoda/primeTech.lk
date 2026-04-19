import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../../components/customer/TopBar'
import styles from './Product.module.css'
import iphone17 from '../../../../assets/images/image 1.png'

const specs = [
  { icon: '⚡', label: 'Processor', value: 'A18 Pro' },
  { icon: '📷', label: 'Camera', value: '48MP Fusion' },
  { icon: '🔋', label: 'Battery', value: '27h Video' },
  { icon: '📺', label: 'Display', value: '6.3" OLED' },
]

const accessories = [
  { name: 'Pro Tablet Kit', price: '$299' },
  { name: 'AirPods Max', price: '$549' },
  { name: 'Case Series 9', price: '$59' },
]

const Product = () => {
  const navigate = useNavigate()
  const [selectedStorage, setSelectedStorage] = useState('128GB')
  const [selectedColor, setSelectedColor] = useState(0)
  const colors = ['#1a1a2e', '#e8e8e8', '#3b5bfc', '#6b21a8']

  return (
    <div className={styles.page}>
      <TopBar showBack showCart cartCount={2} />

      {/* Product Image */}
      <div className={styles.imgSection}>
        <div className={styles.imgBox}>
          <img src={iphone17} alt="iPhone 17 Pro" className={styles.cardImageContent} />
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeTag}>NEW ARRIVAL</span>
          <div className={styles.ratingRow}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingVal}>4.9</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.priceRow}>
          <div>
            <p className={styles.productName}>iPhone 17 pro</p>
          </div>
          <p className={styles.price}>$1,299</p>
        </div>

        {/* Color */}
        <p className={styles.sectionLabel}>SELECT FINISH</p>
        <div className={styles.colorRow}>
          {colors.map((c, i) => (
            <button
              key={i}
              className={`${styles.colorDot} ${selectedColor === i ? styles.colorSelected : ''}`}
              style={{ background: c }}
              onClick={() => setSelectedColor(i)}
            />
          ))}
        </div>

        {/* Storage */}
        <p className={styles.sectionLabel}>CAPACITY</p>
        <div className={styles.storageRow}>
          {['128GB', '256GB', '512GB'].map((s) => (
            <button
              key={s}
              className={`${styles.storageBtn} ${selectedStorage === s ? styles.storageActive : ''}`}
              onClick={() => setSelectedStorage(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Specs */}
        <div className={styles.specsHeader}>
          <span className={styles.specsTitle}>Technical Excellence</span>
          <span className={styles.specsLink}>Full specifications</span>
        </div>
        <div className={styles.specsGrid}>
          {specs.map((s) => (
            <div key={s.label} className={styles.specCard}>
              <span className={styles.specIcon}>{s.icon}</span>
              <p className={styles.specLabel}>{s.label}</p>
              <p className={styles.specValue}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <span>Technical Specifications</span><span>›</span>
          </div>
          <div className={styles.accordionItem}>
            <span>Product Description</span><span>›</span>
          </div>
        </div>

        {/* Trade-In */}
        <div className={styles.tradeBanner}>
          <div className={styles.tradeIcon}>🔄</div>
          <div>
            <p className={styles.tradeTitle}>Trade in your old tech.</p>
            <p className={styles.tradeSub}>Get up to $650 toward your new iPhone 16 Pro when you trade in an eligible device.</p>
            <span className={styles.tradeLink}>How it works →</span>
          </div>
          <button className={styles.tradeBtn}>Check Trade-In Value</button>
        </div>

        {/* Compare */}
        <div className={styles.compareBanner}>
          <p className={styles.compareTitle}>Decide with confidence.</p>
          <p className={styles.compareSub}>Not sure which Phone is right for you? Compare iPhone 16 Pro with our full lineup.</p>
          <button className={styles.compareBtn}>⚖ Compare with other devices</button>
        </div>

        {/* Accessories */}
        <p className={styles.ecoTitle}>Complete the Ecosystem</p>
        <div className={styles.accessories}>
          {accessories.map((a) => (
            <div key={a.name} className={styles.accCard}>
              <div className={styles.accImg} />
              <p className={styles.accName}>{a.name}</p>
              <p className={styles.accPrice}>{a.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className={styles.cta}>
        <button className={styles.addBtn} onClick={() => navigate('/cart')}>Add to Cart</button>
        <button className={styles.buyBtn}>Buy Now</button>
      </div>
    </div>
  )
}

export default Product
