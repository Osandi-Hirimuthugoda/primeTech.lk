import React, { useState } from 'react';
import { type Page } from '../Types';

interface TradeInPageProps {
  onNavigate: (page: Page) => void;
}

const TradeInPage: React.FC<TradeInPageProps> = ({ onNavigate }) => {
  const [selectedDevice, setSelectedDevice] = useState('smartphone');

  const devices = [
    { id: 'smartphone', name: 'Smartphone', icon: '📱' },
    { id: 'tablet', name: 'Tablet', icon: '📲' },
    { id: 'laptop', name: 'Laptop', icon: '💻' },
    { id: 'watch', name: 'Watch', icon: '⌚' },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Turn your old tech into<br /><span style={styles.highlight}>new possibilities.</span></h1>
          <p style={styles.subtitle}>Get an instant valuation for your device and apply it directly to your next upgrade. Fast, secure, and sustainable.</p>
        </div>

        <div style={styles.grid}>
          <div style={styles.leftPanel}>
            <div style={styles.deviceSelector}>
              <h3 style={styles.selectorTitle}>Select your device</h3>
              <div style={styles.searchBox}>
                <input placeholder="Search by brand, model, or serial number..." style={styles.searchInput} />
              </div>
              <div style={styles.deviceGrid}>
                {devices.map(device => (
                  <button
                    key={device.id}
                    style={{
                      ...styles.deviceOption,
                      background: selectedDevice === device.id ? '#2563EB' : '#F8FAFF',
                      color: selectedDevice === device.id ? '#fff' : '#111827',
                    }}
                    onClick={() => setSelectedDevice(device.id)}
                  >
                    <div style={styles.deviceIcon}>{device.icon}</div>
                    <div style={styles.deviceName}>{device.name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.conditionSection}>
              <h3 style={styles.conditionTitle}>Condition Details</h3>
              <div style={styles.conditionItem}>
                <label style={styles.conditionLabel}>
                  <input type="radio" name="condition" defaultChecked /> Flawless
                </label>
              </div>
              <div style={styles.conditionItem}>
                <label style={styles.conditionLabel}>
                  <input type="radio" name="condition" /> Cracked Screen
                </label>
              </div>
              <div style={styles.conditionItem}>
                <label style={styles.conditionLabel}>
                  <input type="radio" name="condition" /> Major Damage
                </label>
              </div>
            </div>

            <div style={styles.powerSection}>
              <h3 style={styles.powerTitle}>Power & Functionality</h3>
              <div style={styles.powerItem}>
                <label style={styles.powerLabel}>
                  <input type="checkbox" defaultChecked /> Turns On
                </label>
              </div>
              <div style={styles.powerItem}>
                <label style={styles.powerLabel}>
                  <input type="checkbox" /> No Power
                </label>
              </div>
            </div>
          </div>

          <div style={styles.rightPanel}>
            <div style={styles.creditCard}>
              <p style={styles.creditLabel}>Estimated Credit Value</p>
              <h2 style={styles.creditValue}>$450.00</h2>
              <p style={styles.creditDesc}>Based on device details</p>
              <button style={styles.applyBtn} onClick={() => onNavigate('cart')}>Apply to Next Purchase</button>
              <button style={styles.findStoreBtn}>Find a Store</button>
              <div style={styles.noteBox}>
                <p style={styles.noteText}>Your device receives FREE shipping in any condition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F3F6FB', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 40 },
  title: { fontSize: 42, fontWeight: 900, color: '#111827', margin: 0, lineHeight: 1.1 },
  highlight: { color: '#2563EB' },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 640, marginTop: 16, lineHeight: 1.8 },
  grid: { display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: 32 },
  leftPanel: { display: 'flex', flexDirection: 'column', gap: 28 },
  rightPanel: {},
  deviceSelector: { background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #E5E7EB' },
  selectorTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 20px' },
  searchBox: { marginBottom: 24 },
  searchInput: { width: '100%', padding: '14px 16px', borderRadius: 14, border: '1.5px solid #E5E7EB', fontSize: 14, outline: 'none' },
  deviceGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 },
  deviceOption: { border: '1.5px solid #E5E7EB', borderRadius: 16, padding: 16, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, transition: 'all 0.2s' },
  deviceIcon: { fontSize: 28 },
  deviceName: { fontSize: 13, fontWeight: 600 },
  conditionSection: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB' },
  conditionTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 16px' },
  conditionItem: { marginBottom: 12 },
  conditionLabel: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: '#475569' },
  powerSection: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB' },
  powerTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 16px' },
  powerItem: { marginBottom: 12 },
  powerLabel: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: '#475569' },
  creditCard: { background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #E5E7EB', boxShadow: '0 25px 60px rgba(15,23,42,0.06)' },
  creditLabel: { fontSize: 13, color: '#6B7280', fontWeight: 700, margin: 0 },
  creditValue: { fontSize: 36, fontWeight: 900, color: '#111827', margin: '12px 0 4px' },
  creditDesc: { fontSize: 13, color: '#6B7280', margin: '0 0 24px' },
  applyBtn: { width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 16, padding: '16px 0', cursor: 'pointer', fontWeight: 700, marginBottom: 12 },
  findStoreBtn: { width: '100%', background: '#F8FAFF', color: '#2563EB', border: '1.5px solid #E5E7EB', borderRadius: 16, padding: '16px 0', cursor: 'pointer', fontWeight: 700 },
  noteBox: { marginTop: 20, padding: 16, background: '#F0F9FF', borderRadius: 12, borderLeft: '3px solid #2563EB' },
  noteText: { fontSize: 13, color: '#1E40AF', margin: 0, fontWeight: 600 },
};

export default TradeInPage;
