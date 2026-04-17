import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './AI.module.css'

const QUICK_ACTIONS = [
  'Start Trade-In →',
  'Compare iPhone 16 vs S6',
  'Check Repair Status',
  'Warranty FAQ',
]

const AI = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1, from: 'ai',
      text: "Hello! I'm your PrimeTech Assistant. I can help you with repairs, value your trade-in devices, or compare the latest phones. What would you like today?",
    },
  ])
  const [showRepairCard, setShowRepairCard] = useState(false)
  const [showTradeCard, setShowTradeCard] = useState(false)
  const [showCompareCard, setShowCompareCard] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, showRepairCard, showTradeCard, showCompareCard])

  const send = (text) => {
    if (!text.trim()) return
    setMessages(prev => [...prev, { id: Date.now(), from: 'user', text }])
    setInput('')
    setTimeout(() => {
      if (text.toLowerCase().includes('repair') || text.toLowerCase().includes('check repair')) {
        setMessages(prev => [...prev, { id: Date.now(), from: 'ai', text: "Of course! I've located your repair ticket for the iPhone 16 Pro - here is the real-time status." }])
        setShowRepairCard(true)
      } else if (text.toLowerCase().includes('trade')) {
        setMessages(prev => [...prev, { id: Date.now(), from: 'ai', text: "Based on current market data, the condition of iPhone 16 Pro is \"Good\". I don't need them to give your estimated trade-in value." }])
        setShowTradeCard(true)
      } else if (text.toLowerCase().includes('compare')) {
        setShowCompareCard(true)
        setMessages(prev => [...prev, { id: Date.now(), from: 'ai', text: "Here's a technical breakdown comparing iPhone 16 and Samsung S24 Ultra." }])
      } else {
        setMessages(prev => [...prev, { id: Date.now(), from: 'ai', text: "I'm on it! Let me find the best answer for you." }])
      }
    }, 700)
  }

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>

        {/* AI Header */}
        <div className={styles.aiHeader}>
          <div className={styles.aiAvatar}>✦</div>
          <h2 className={styles.aiName}>Prime Assistant</h2>
          <p className={styles.aiDesc}>Your personal curator for the latest &amp; most innovative technology.</p>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickRow}>
          {QUICK_ACTIONS.map((q) => (
            <button key={q} className={styles.quickChip} onClick={() => send(q)}>{q}</button>
          ))}
        </div>

        {/* Messages */}
        <div className={styles.chatArea}>
          {messages.map((msg) => (
            <div key={msg.id} className={msg.from === 'ai' ? styles.aiBubble : styles.userBubble}>
              {msg.text}
            </div>
          ))}

          {/* Repair Ticket Card */}
          {showRepairCard && (
            <div className={styles.card}>
              <div className={styles.cardRow}>
                <div>
                  <p className={styles.cardMeta}>ADDRESS</p>
                  <p className={styles.cardTitle}>#PR001 - REPAIR-X</p>
                </div>
                <span className={styles.activeBadge}>ACTIVE</span>
              </div>
              <div className={styles.stepRow}>
                <div className={styles.stepLine}>
                  <div className={styles.stepDotFilled} />
                  <div className={styles.stepConnector} />
                  <div className={styles.stepDotEmpty} />
                </div>
                <div className={styles.stepInfo}>
                  <div className={styles.stepBlock}>
                    <p className={styles.stepTitle}>Technician General</p>
                    <p className={styles.stepStatus}>DISPATCHED/ENGINEERING</p>
                  </div>
                </div>
              </div>
              <button className={styles.linkBtn} onClick={() => navigate('/repair-tracker')}>View complete repair status → What's Next</button>
            </div>
          )}

          {/* Trade-In Value Card */}
          {showTradeCard && (
            <div className={styles.card}>
              <button className={styles.tradeInBtn} onClick={() => navigate('/trade-in')}>
                How much is my iPhone 16 Pro worth?
              </button>
              <div className={styles.estimatedSection}>
                <p className={styles.estimatedLabel}>ESTIMATED VALUE</p>
                <p className={styles.estimatedPrice}>$450.00</p>
                <div className={styles.deviceRow}>
                  <div className={styles.deviceLeft}>
                    <div className={styles.phoneImgBox} />
                    <div>
                      <p className={styles.deviceModel}>iPhone 16</p>
                      <p className={styles.deviceSub}>Pro</p>
                    </div>
                  </div>
                  <div className={styles.conditionBox}>
                    <p className={styles.conditionLabel}>CONDITION</p>
                    <p className={styles.conditionVal}>Good</p>
                  </div>
                </div>
                <button className={styles.startTradeBtn} onClick={() => navigate('/trade-in')}>
                  Start Trade-In →
                </button>
              </div>
            </div>
          )}

          {/* Compare + Technical Breakdown */}
          {showCompareCard && (
            <div className={styles.card}>
              <button className={styles.compareBtn}>
                Compare iPhone 16 Pro vs S24 Ultra →
              </button>

              <p className={styles.breakdownTitle}>Technical Breakdown</p>

              <div className={styles.comparePhones}>
                <div className={styles.phoneCard}>
                  <div className={styles.phonePlaceholder} />
                  <p className={styles.phoneBrand}>APPLE</p>
                  <p className={styles.phoneModel}>iPhone 16</p>
                </div>
                <div className={styles.phoneCard}>
                  <div className={styles.phonePlaceholderSamsung} />
                  <p className={styles.phoneBrand}>SAMSUNG</p>
                  <p className={styles.phoneModel}>S24 Ultra</p>
                </div>
              </div>

              <div className={styles.specTable}>
                {[
                  { label: 'DISPLAY', a: '6.3" ProMotion', b: '6.8" Dynamic' },
                  { label: 'CAMERA SYSTEM', a: '48MP Pocket', b: '200MP Plus' },
                  { label: 'VIDEO', a: '4K 120fps\nPro Modes', b: '8K Video\nPro Filming' },
                ].map((row) => (
                  <div key={row.label} className={styles.specRow}>
                    <p className={styles.specLabel}>{row.label}</p>
                    <p className={styles.specVal}>{row.a}</p>
                    <p className={styles.specVal}>{row.b}</p>
                  </div>
                ))}
              </div>

              <button className={styles.shopLocBtn}>Where's a Shop Location? →</button>

              <div className={styles.shopCard}>
                <p className={styles.shopName}>PrimeTech 5th Ave</p>
                <p className={styles.shopHours}>Today's Hours</p>
                <p className={styles.shopTime}>9:30 AM – 9:00 PM</p>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input Bar */}
      <div className={styles.inputBar}>
        <input
          className={styles.chatInput}
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send(input)}
        />
        <button className={styles.micBtn} onClick={() => send(input)}>🎤</button>
      </div>

      <BottomNav />
    </div>
  )
}

export default AI
