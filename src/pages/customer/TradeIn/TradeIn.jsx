import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './TradeIn.module.css'

const devices = [
  { id: 1, name: 'iPhone 16 Pro', sub: 'Natural Titanium', value: '$450', condition: 'Good' },
  { id: 2, name: 'iPhone 15', sub: 'Black', value: '$280', condition: 'Good' },
  { id: 3, name: 'Samsung S24 Ultra', sub: 'Titanium Gray', value: '$390', condition: 'Fair' },
]

const conditions = ['Excellent', 'Good', 'Fair', 'Poor']

const TradeIn = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(devices[0])
  const [condition, setCondition] = useState('Good')
  const [step, setStep] = useState(1)

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>
        <p className={styles.tag}>TRADE-IN PROGRAM</p>
        <h1 className={styles.title}>Get the Best<br />Value for Your<br />Device</h1>
        <p className={styles.sub}>Instant valuation. No hidden fees. Credit applied directly to your next purchase.</p>

        {/* Step Indicator */}
        <div className={styles.steps}>
          {['Select Device', 'Condition', 'Confirm'].map((s, i) => (
            <div key={s} className={styles.stepItem}>
              <div className={`${styles.stepNum} ${step > i ? styles.stepDone : step === i + 1 ? styles.stepActive : styles.stepIdle}`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span className={`${styles.stepLabel} ${step === i + 1 ? styles.stepLabelActive : ''}`}>{s}</span>
              {i < 2 && <div className={`${styles.stepLine} ${step > i + 1 ? styles.stepLineDone : ''}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <>
            <p className={styles.sectionLabel}>SELECT YOUR DEVICE</p>
            <div className={styles.deviceList}>
              {devices.map((d) => (
                <div
                  key={d.id}
                  className={`${styles.deviceCard} ${selected.id === d.id ? styles.deviceSelected : ''}`}
                  onClick={() => setSelected(d)}
                >
                  <div className={styles.deviceImgBox} />
                  <div className={styles.deviceInfo}>
                    <p className={styles.deviceName}>{d.name}</p>
                    <p className={styles.deviceSub}>{d.sub}</p>
                  </div>
                  <div className={styles.deviceRight}>
                    <p className={styles.deviceValue}>{d.value}</p>
                    <p className={styles.deviceValueSub}>est. value</p>
                  </div>
                  {selected.id === d.id && <span className={styles.checkMark}>✓</span>}
                </div>
              ))}
            </div>
            <button className={styles.nextBtn} onClick={() => setStep(2)}>
              Continue →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className={styles.sectionLabel}>DEVICE CONDITION</p>
            <div className={styles.conditionList}>
              {conditions.map((c) => (
                <button
                  key={c}
                  className={`${styles.conditionBtn} ${condition === c ? styles.conditionActive : ''}`}
                  onClick={() => setCondition(c)}
                >
                  <span className={styles.conditionIcon}>
                    {c === 'Excellent' ? '⭐' : c === 'Good' ? '👍' : c === 'Fair' ? '👌' : '⚠️'}
                  </span>
                  <div>
                    <p className={styles.conditionName}>{c}</p>
                    <p className={styles.conditionDesc}>
                      {c === 'Excellent' ? 'Like new, no scratches' :
                       c === 'Good' ? 'Minor wear, fully functional' :
                       c === 'Fair' ? 'Visible wear, works fine' :
                       'Heavy wear or damage'}
                    </p>
                  </div>
                  {condition === c && <span className={styles.checkMark}>✓</span>}
                </button>
              ))}
            </div>
            <div className={styles.btnRow}>
              <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
              <button className={styles.nextBtn2} onClick={() => setStep(3)}>See Value →</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className={styles.valueCard}>
              <p className={styles.valueLabel}>ESTIMATED TRADE-IN VALUE</p>
              <p className={styles.valueBig}>{selected.value}</p>
              <div className={styles.valueDeviceRow}>
                <div className={styles.deviceImgBoxSm} />
                <div>
                  <p className={styles.deviceName}>{selected.name}</p>
                  <p className={styles.deviceSub}>{selected.sub}</p>
                </div>
                <span className={styles.conditionPill}>{condition}</span>
              </div>
            </div>

            <div className={styles.infoBox}>
              <p className={styles.infoItem}>✅ Credit applied to next purchase</p>
              <p className={styles.infoItem}>✅ Free device pickup available</p>
              <p className={styles.infoItem}>✅ Instant approval in 24 hrs</p>
            </div>

            <button className={styles.startTradeBtn} onClick={() => navigate('/shop')}>
              Start Trade-In →
            </button>
            <button className={styles.backBtn2} onClick={() => setStep(2)}>← Adjust Condition</button>
          </>
        )}

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default TradeIn
