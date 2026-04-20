import React from 'react';
import { type Page } from '../Types';

interface ReferralPageProps {
  onNavigate: (page: Page) => void;
}

const ReferralPage: React.FC<ReferralPageProps> = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Share the Innovation.</h1>
          <p style={styles.subtitle}>Bring your network to Heurora Core and unlock premium technology perks.</p>
          <div style={styles.headerBtns}>
            <button style={styles.primaryBtn}>View Referrals</button>
            <button style={styles.secondaryBtn}>How it Works</button>
          </div>
        </div>

        <div style={styles.heroImage}>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&auto=format" alt="Innovation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }} />
        </div>

        <div style={styles.section}>
          <p style={styles.sectionLabel}>Reward Tiers</p>
          <h2 style={styles.sectionTitle}>Our Rewards</h2>
          <div style={styles.tierGrid}>
            <div style={styles.tierCard}>
              <h3 style={styles.tierName}>Invite & Earn</h3>
              <p style={styles.tierDesc}>Earn credits on every referral</p>
              <button style={styles.tierBtn}>$5 Credit</button>
            </div>
            <div style={styles.tierCard}>
              <h3 style={styles.tierName}>10% Off Next Purchase</h3>
              <p style={styles.tierDesc}>Unlocked at Friend Accept</p>
              <div style={styles.tierBadge}>SILVER</div>
            </div>
            <div style={styles.tierCard}>
              <h3 style={styles.tierName}>Free Lumina Buds</h3>
              <p style={styles.tierDesc}>$99 Reward</p>
              <div style={styles.tierBadge}>GOLD</div>
            </div>
            <div style={styles.tierCard}>
              <h3 style={styles.tierName}>Exclusive Curator Access</h3>
              <p style={styles.tierDesc}>$599+ exclusive access and collection access in 24 hours</p>
              <div style={styles.tierBadge}>PLATINUM</div>
            </div>
          </div>
        </div>

        <div style={styles.progressSection}>
          <div style={styles.progressCard}>
            <h3 style={styles.progressTitle}>Your Progress</h3>
            <div style={styles.progressItem}>
              <span>Invites Sent</span>
              <span style={styles.progressValue}>12</span>
            </div>
            <div style={{ ...styles.progressBar, width: '60%', height: 8, background: '#2563EB', borderRadius: 4, marginTop: 8 }} />
            <div style={{ ...styles.progressItem, marginTop: 16 }}>
              <span>Friends Joined</span>
              <span style={styles.progressValue}>04</span>
            </div>
            <div style={{ ...styles.progressBar, width: '40%', height: 8, background: '#10B981', borderRadius: 4, marginTop: 8 }} />
            <div style={{ ...styles.progressItem, marginTop: 16 }}>
              <span>Rewards Earned</span>
              <span style={styles.progressValue}>00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 40 },
  title: { fontSize: 42, fontWeight: 900, color: '#111827', margin: 0, lineHeight: 1.05 },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 600, marginTop: 12, lineHeight: 1.8 },
  headerBtns: { display: 'flex', gap: 16, marginTop: 24 },
  primaryBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 16, padding: '14px 28px', cursor: 'pointer', fontWeight: 700 },
  secondaryBtn: { background: 'none', border: '1.5px solid #E5E7EB', borderRadius: 16, padding: '14px 28px', cursor: 'pointer', fontWeight: 700 },
  heroImage: { borderRadius: 24, overflow: 'hidden', height: 280, marginBottom: 48 },
  section: { marginBottom: 48 },
  sectionLabel: { fontSize: 12, color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' },
  sectionTitle: { fontSize: 28, fontWeight: 900, color: '#111827', margin: '12px 0 28px' },
  tierGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  tierCard: { background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E5E7EB', textAlign: 'center' },
  tierName: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 8px' },
  tierDesc: { fontSize: 13, color: '#6B7280', margin: '0 0 16px' },
  tierBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 20px', cursor: 'pointer', fontWeight: 700, width: '100%' },
  tierBadge: { background: '#F0F4F8', color: '#2563EB', padding: '8px 14px', borderRadius: 10, fontSize: 11, fontWeight: 800, marginTop: 12 },
  progressSection: { marginTop: 48 },
  progressCard: { background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #E5E7EB' },
  progressTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 24px' },
  progressItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, color: '#475569' },
  progressValue: { fontSize: 14, fontWeight: 800, color: '#111827' },
  progressBar: {},
};

export default ReferralPage;
