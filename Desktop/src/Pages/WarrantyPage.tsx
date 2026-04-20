import React, { useState } from 'react';
import { type Page } from '../Types';

interface WarrantyPageProps {
  onNavigate: (page: Page) => void;
}

const WarrantyPage: React.FC<WarrantyPageProps> = ({ onNavigate }) => {
  const [claim, setClaim] = useState({ product: 'iPhone 17 Pro', serial: '', purchaseDate: '', description: '' });

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.label}>Editorial, Premium Support</p>
            <h1 style={styles.title}>Warranty Support</h1>
            <p style={styles.subtitle}>Submit a claim, check device coverage, and get help fast from our service team.</p>
          </div>
          <button style={styles.backBtn} onClick={() => onNavigate('home')}>
            ← Back to Home
          </button>
        </div>

        <div style={styles.contentGrid}>
          <div style={styles.claimCard}>
            <h2 style={styles.claimTitle}>Submit a Claim</h2>
            <label style={styles.fieldLabel}>Product Name</label>
            <select
              value={claim.product}
              onChange={e => setClaim({ ...claim, product: e.target.value })}
              style={styles.select}
            >
              <option>iPhone 17 Pro</option>
              <option>MacBook Pro</option>
              <option>Pixel Fold</option>
            </select>
            <label style={styles.fieldLabel}>Serial Number</label>
            <input
              value={claim.serial}
              onChange={e => setClaim({ ...claim, serial: e.target.value })}
              placeholder="e.g. SN-09A-35B-92"
              style={styles.input}
            />
            <label style={styles.fieldLabel}>Purchase Date</label>
            <input
              type="date"
              value={claim.purchaseDate}
              onChange={e => setClaim({ ...claim, purchaseDate: e.target.value })}
              style={styles.input}
            />
            <label style={styles.fieldLabel}>Describe the Issue</label>
            <textarea
              value={claim.description}
              onChange={e => setClaim({ ...claim, description: e.target.value })}
              placeholder="Please provide a detailed description of the fault or performance issue."
              style={styles.textarea}
            />
            <div style={styles.uploadBox}>
              <span style={styles.uploadText}>Upload proof of the product and receipt</span>
            </div>
            <button style={styles.submitBtn}>Submit Claim</button>
          </div>

          <div style={styles.sidebar}> 
            <div style={styles.checkCard}>
              <h3 style={styles.sidebarTitle}>Check Warranty Status</h3>
              <p style={styles.sidebarText}>Enter the serial number below to view your device protection status.</p>
              <input type="text" placeholder="Enter Serial Number" style={styles.input} />
              <button style={styles.checkoutBtn}>Check Now</button>
            </div>
            <div style={styles.faqCard}>
              <h3 style={styles.sidebarTitle}>FAQ</h3>
              <div style={styles.faqItem}>
                <strong>How long is the standard warranty?</strong>
                <p style={styles.faqText}>Most devices include a 12-month limited warranty from the date of purchase.</p>
              </div>
              <div style={styles.faqItem}>
                <strong>What does the warranty cover?</strong>
                <p style={styles.faqText}>Coverage includes manufacturing defects and hardware failure. Accidental damage is handled separately.</p>
              </div>
              <div style={styles.faqItem}>
                <strong>Do I need my original receipt?</strong>
                <p style={styles.faqText}>Yes, proof of purchase helps speed up the claims process.</p>
              </div>
            </div>
            <div style={styles.helpCard}>
              <p style={styles.helpLabel}>Need immediate help?</p>
              <p style={styles.helpText}>Chat with support and get live guidance on your warranty claim.</p>
              <button style={styles.helpBtn}>Chat with Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFF', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 32, flexWrap: 'wrap' },
  label: { fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#2563EB', fontWeight: 700, marginBottom: 10 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: 0 },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 640, marginTop: 12, lineHeight: 1.8 },
  backBtn: { border: '1px solid #E5E7EB', borderRadius: 16, padding: '12px 20px', background: '#fff', color: '#111827', cursor: 'pointer', fontWeight: 700 },
  contentGrid: { display: 'grid', gridTemplateColumns: '1.35fr 0.85fr', gap: 24 },
  claimCard: { background: '#fff', borderRadius: 28, padding: 32, border: '1px solid #E5E7EB', boxShadow: '0 30px 70px rgba(15,23,42,0.06)' },
  claimTitle: { fontSize: 22, fontWeight: 900, margin: 0, color: '#111827', marginBottom: 24 },
  fieldLabel: { display: 'block', fontSize: 13, color: '#475569', marginBottom: 8, marginTop: 20, fontWeight: 700 },
  select: { width: '100%', padding: '14px 16px', borderRadius: 16, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none' },
  input: { width: '100%', padding: '14px 16px', borderRadius: 16, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none' },
  textarea: { width: '100%', minHeight: 140, borderRadius: 16, border: '1px solid #E5E7EB', padding: '14px 16px', fontSize: 14, outline: 'none', resize: 'vertical' },
  uploadBox: { marginTop: 20, padding: 20, borderRadius: 20, border: '1px dashed #CBD5E1', color: '#475569', textAlign: 'center', background: '#F8FAFF' },
  uploadText: { margin: 0, fontSize: 14 },
  submitBtn: { marginTop: 28, width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 16, padding: '16px 0', cursor: 'pointer', fontWeight: 700, fontSize: 15 },
  sidebar: { display: 'flex', flexDirection: 'column', gap: 20 },
  checkCard: { background: '#fff', borderRadius: 28, padding: 28, border: '1px solid #E5E7EB' },
  sidebarTitle: { margin: 0, fontSize: 16, fontWeight: 900, color: '#111827', marginBottom: 14 },
  sidebarText: { margin: 0, color: '#475569', lineHeight: 1.75, fontSize: 14, marginBottom: 18 },
  checkoutBtn: { width: '100%', background: '#111827', color: '#fff', border: 'none', borderRadius: 16, padding: '14px 0', cursor: 'pointer', fontWeight: 700, marginTop: 14 },
  faqCard: { background: '#fff', borderRadius: 28, padding: 28, border: '1px solid #E5E7EB' },
  faqItem: { marginBottom: 20, color: '#475569' },
  faqText: { margin: '8px 0 0', fontSize: 14, lineHeight: 1.7 },
  helpCard: { background: '#E5E7FF', borderRadius: 28, padding: 28, minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  helpLabel: { margin: 0, color: '#2563EB', fontWeight: 700, letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase' },
  helpText: { margin: '16px 0 0', color: '#111827', fontSize: 14, lineHeight: 1.75 },
  helpBtn: { marginTop: 20, background: '#111827', color: '#fff', border: 'none', borderRadius: 16, padding: '14px 0', cursor: 'pointer', fontWeight: 700 },
};

export default WarrantyPage;
