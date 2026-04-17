import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './RepairTracker.module.css'
import iphone16 from '../../../assets/images/iPhone 16 Pro.png'

const steps = [
  {
    date: 'OCT 24, 09:15 AM',
    title: 'Claim Received',
    desc: 'Device registered at PrimeTech Colombo branch. Physical inspection completed.',
    done: true,
  },
  {
    date: 'OCT 25, 02:45 PM',
    title: 'Technical Assessment',
    desc: 'Fault detected in Logic Board power rails. Component replacement approved under warranty.',
    done: true,
  },
  {
    date: 'IN PROGRESS',
    title: 'Repair in Progress',
    desc: 'Genuine Apple parts sourced. Lead technician is currently performing microsoldering.',
    active: true,
    icon: '⚙',
  },
  {
    date: 'ESTIMATED: OCT 28',
    title: 'Ready for Collection',
    desc: 'Final quality assurance testing and display recalibration pending.',
    muted: true,
    icon: '📅',
  },
]

const RepairTracker = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>
        {/* Header */}
        <div className={styles.claimRow}>
          <span className={styles.activePill}>ACTIVE CLAIM</span>
          <span className={styles.claimId}>#CLM-99203481</span>
        </div>
        <h1 className={styles.title}>Repair in Progress</h1>

        {/* Device Card */}
        <div className={styles.deviceCard}>
          <div className={styles.deviceInfo}>
            <p className={styles.deviceLabel}>SERVICE DEVICE</p>
            <p className={styles.deviceName}>iPhone 16 Pro</p>
            <p className={styles.deviceSub}>Natural Titanium, 256GB</p>
            <div className={styles.warrantyRow}>
              <span className={styles.warrantyIcon}>🛡</span>
              <span className={styles.warrantyText}>Standard 1-Year Warranty</span>
            </div>
          </div>
          <div className={styles.deviceImgBox}>
            <img src={iphone16} alt="iPhone 16 Pro" className={styles.deviceImage} />
          </div>
        </div>

        {/* Timeline */}
        <p className={styles.sectionLabel}>SERVICE TIMELINE</p>
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={i} className={styles.stepRow}>
              <div className={styles.dotCol}>
                {step.done && (
                  <div className={styles.dotDone}><span className={styles.check}>✓</span></div>
                )}
                {step.active && (
                  <div className={styles.dotActive}><span className={styles.gearIcon}>⚙</span></div>
                )}
                {step.muted && (
                  <div className={styles.dotMuted}><span className={styles.calIcon}>📅</span></div>
                )}
                {i < steps.length - 1 && (
                  <div className={step.done ? styles.lineBlue : step.active ? styles.lineBlue : styles.lineGray} />
                )}
              </div>
              <div className={styles.stepContent}>
                <p className={step.active ? styles.dateActive : step.muted ? styles.dateMuted : styles.dateBlue}>
                  {step.date}
                </p>
                <p className={step.muted ? styles.titleMuted : styles.titleText}>{step.title}</p>
                <p className={step.muted ? styles.descMuted : styles.descText}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className={styles.infoRow}>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>SERVICE CENTER</p>
            <p className={styles.infoVal}>PrimeTech Colombo 03</p>
            <p className={styles.infoSub}>Tier-1 Repair Hub</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoLabel}>ASSIGNED TECH</p>
            <p className={styles.infoVal}>Asitha Perera</p>
            <p className={styles.infoSub}>Senior iOS Engineer</p>
          </div>
        </div>

        {/* Help Banner */}
        <button className={styles.helpBanner} onClick={() => navigate('/ai')}>
          <div className={styles.helpIcon}>🎧</div>
          <div className={styles.helpText}>
            <p className={styles.helpTitle}>Need help?</p>
            <p className={styles.helpSub}>Chat with our warranty specialists</p>
          </div>
          <span className={styles.helpArrow}>›</span>
        </button>

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default RepairTracker
