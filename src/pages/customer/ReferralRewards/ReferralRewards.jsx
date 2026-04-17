import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/customer/TopBar'
import BottomNav from '../../../components/customer/BottomNav'
import styles from './ReferralRewards.module.css'

const purchases = [
  { name: 'iPhone 16 Pro', pts: '+500 pts' },
  { name: 'Apple Watch Ultra 2', pts: '+350 pts' },
  { name: 'AirPods Max', pts: '+200 pts' },
]

const activity = [
  { name: 'Marcus Holloway', joined: 'JOINED 2 DAYS AGO', reward: '+$50.00', badge: 'CREDITED', color: '#3b5bfc' },
  { name: 'Elena Rodriguez', joined: 'JOINED 1 WEEK AGO', reward: '10% OFF', badge: 'REWARDED', color: '#a855f7' },
]

const ReferralRewards = () => {
  const navigate = useNavigate()

  const copyCode = () => {
    navigator.clipboard.writeText('PRIME-X82K')
  }

  return (
    <div className={styles.page}>
      <TopBar title="PrimeTechLK" showBack />

      <div className={styles.scroll}>

        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <span className={styles.limitedBadge}>LIMITED OFFER</span>
          <h2 className={styles.heroTitle}>Share the tech,<br />reap the rewards.</h2>
          <p className={styles.heroSub}>Get a 20% discount for every 5 successful referrals to the Prime ecosystem.</p>
          <div className={styles.codeRow}>
            <span className={styles.codeText}>PRIME-X82K</span>
            <button className={styles.copyBtn} onClick={copyCode}>⧉</button>
            <button className={styles.shareBtn}>Share</button>
          </div>
          <div className={styles.heroIcon}>👥</div>
        </div>

        {/* Loyalty Points */}
        <div className={styles.sectionRow}>
          <p className={styles.sectionLabel}>LOYALTY POINTS</p>
          <div className={styles.pointsBadge}>
            <span className={styles.pointsIcon}>🔷</span>
            <span className={styles.pointsVal}>2,450 pts</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.purchaseList}>
            <p className={styles.purchaseTitle}>Purchases Rewards</p>
            {purchases.map((p) => (
              <div key={p.name} className={styles.purchaseRow}>
                <span className={styles.bullet}>•</span>
                <span className={styles.purchaseName}>{p.name}</span>
                <span className={styles.purchasePts}>{p.pts}</span>
              </div>
            ))}
          </div>
          <div className={styles.cartIcon}>🛒</div>
        </div>

        <button className={styles.redeemBtn}>REDEEM POINTS</button>

        {/* Active Reward */}
        <div className={styles.rewardRow}>
          <div>
            <p className={styles.rewardLabel}>ACTIVE REWARD</p>
            <p className={styles.rewardTitle}>3/5 Referrals Completed</p>
          </div>
          <span className={styles.discountBadge}>20% OFF</span>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: '60%' }} />
        </div>
        <div className={styles.progressDots}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className={styles.dotWrap}>
              <div className={n <= 3 ? styles.dotFilled : styles.dotEmpty} />
              <span className={styles.dotNum}>{n}</span>
            </div>
          ))}
        </div>

        {/* Total Impact */}
        <p className={styles.sectionLabel}>TOTAL IMPACT</p>
        <div className={styles.impactRow}>
          <div className={styles.impactCard}>
            <span className={styles.impactIcon}>📋</span>
            <p className={styles.impactVal}>$420.00</p>
            <p className={styles.impactSub}>CREDITS EARNED</p>
          </div>
          <div className={styles.impactCard}>
            <span className={styles.impactIcon}>🎉</span>
            <p className={styles.impactVal}>12</p>
            <p className={styles.impactSub}>SUCCESSFUL INVITES</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.sectionRow}>
          <p className={styles.sectionLabel}>RECENT ACTIVITY</p>
          <button className={styles.viewAll}>VIEW ALL</button>
        </div>

        <div className={styles.activityList}>
          {activity.map((a) => (
            <div key={a.name} className={styles.activityCard} style={{ borderLeftColor: a.color }}>
              <div className={styles.activityAvatar}>👤</div>
              <div className={styles.activityInfo}>
                <p className={styles.activityName}>{a.name}</p>
                <p className={styles.activityJoined}>{a.joined}</p>
              </div>
              <div className={styles.activityRight}>
                <p className={styles.activityReward} style={{ color: a.color }}>{a.reward}</p>
                <span className={styles.activityBadge} style={{ color: a.color, borderColor: a.color }}>
                  {a.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomPad} />
      </div>

      <BottomNav />
    </div>
  )
}

export default ReferralRewards
