import React, { useState } from 'react'
import TopBar from '../../../../components/customer/TopBar'
import BottomNav from '../../../../components/customer/BottomNav'
import styles from './OrderTracking.module.css'

const steps = [
  { label: 'Order Placed', date: 'Oct 24, 2023 • 09:41 AM', done: true },
  { label: 'System Processing', date: 'Oct 24, 2023 • 10:15 AM', done: true },
  { label: 'In Transit', date: 'Oct 25, 2023 • 02:30 PM', active: true, location: 'Colombo Distribution Hub' },
  { label: 'Out for Delivery', date: 'Estimated: Tomorrow', done: false },
]

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('')
  const [tracked, setTracked] = useState(true)

  const handleLocate = () => {
    if (orderId.trim()) setTracked(true)
  }

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>
        <p className={styles.portalTag}>LOGISTICS PORTAL</p>
        <h1 className={styles.title}>Track Your Tech</h1>

        {/* Search Card */}
        <div className={styles.searchCard}>
          <p className={styles.searchLabel}>ORDER IDENTIFICATION</p>
          <div className={styles.inputRow}>
            <span className={styles.qrIcon}>⊞</span>
            <input
              className={styles.input}
              placeholder="Enter Order ID (e.g. PT-99281)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLocate()}
            />
          </div>
          <button className={styles.locateBtn} onClick={handleLocate}>
            Locate Shipment
          </button>
        </div>

        {/* Tracking Result */}
        {tracked && (
          <div className={styles.trackCard}>
            <div className={styles.trackHeader}>
              <div>
                <p className={styles.deviceName}>Galaxy S24 Ultra</p>
                <p className={styles.deviceSub}>Titanium Gray • 512GB</p>
              </div>
              <span className={styles.transitBadge}>IN TRANSIT</span>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              {steps.map((step, i) => (
                <div key={i} className={styles.stepRow}>
                  {/* Dot + Line */}
                  <div className={styles.dotCol}>
                    <div className={
                      step.active ? styles.dotActive :
                      step.done ? styles.dotDone :
                      styles.dotEmpty
                    }>
                      {step.done && <span className={styles.check}>✓</span>}
                      {step.active && <div className={styles.dotInner} />}
                    </div>
                    {i < steps.length - 1 && (
                      <div className={step.done || step.active ? styles.lineActive : styles.line} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={styles.stepContent}>
                    <p className={step.active ? styles.stepLabelActive : step.done ? styles.stepLabelDone : styles.stepLabelMuted}>
                      {step.label}
                    </p>
                    <p className={step.done || step.active ? styles.stepDate : styles.stepDateMuted}>
                      {step.date}
                    </p>

                    {step.location && (
                      <div className={styles.locationBox}>
                        <p className={styles.locationLabel}>CURRENT LOCATION</p>
                        <div className={styles.locationRow}>
                          <span className={styles.pinIcon}>📍</span>
                          <p className={styles.locationText}>{step.location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default OrderTracking
