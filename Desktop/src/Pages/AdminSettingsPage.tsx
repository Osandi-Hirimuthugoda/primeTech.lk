import React from 'react';
import { type Page } from '../Types';

interface AdminSettingsPageProps {
  onNavigate: (page: Page) => void;
}

const AdminSettingsPage: React.FC<AdminSettingsPageProps> = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <p style={styles.label}>Configuration Hub</p>
            <h1 style={styles.title}>Prime Tech <span style={styles.titleHighlight}>Global Control.</span></h1>
            <p style={styles.subtitle}>Adjust your platform's core identity, financial parameters, and communication protocols. These settings affect the entire editorial ecosystem.</p>
          </div>
        </div>

        <div style={styles.grid}>
          {/* General Branding */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🎨 General Branding</h3>
            <div style={styles.settingGroup}>
              <label style={styles.label}>Platform Name</label>
              <input defaultValue="Haurora Tech" style={styles.input} />
              <p style={styles.hint}>This name appears in browser tabs and system areas</p>
            </div>
            <div style={styles.settingGroup}>
              <label style={styles.label}>Support Email</label>
              <input defaultValue="curator@haurora.tech" style={styles.input} />
            </div>
            <div style={styles.settingGroup}>
              <label style={styles.label}>Platform Logo</label>
              <div style={styles.logoUpload}>
                <img src="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=100&h=80&fit=crop" alt="Logo" style={styles.logoImage} />
                <button style={styles.logoBtn}>Replace Logo</button>
                <button style={{ ...styles.logoBtn, background: '#fff', color: '#EF4444', border: '1px solid #FCA5A5' }}>Remove</button>
              </div>
              <p style={styles.logoHint}>Recommended: SVG or PNG (1080x1080px), max 2MB</p>
            </div>
          </div>

          {/* Business & Tax */}
          <div style={{ ...styles.card, background: '#2563EB', color: '#fff' }}>
            <h3 style={{ ...styles.cardTitle, color: '#fff' }}>💰 Business & Tax</h3>
            <div style={styles.settingGroup}>
              <label style={{ ...styles.label, color: '#fff' }}>Base Currency</label>
              <select style={{ ...styles.input, background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: '#fff' }}>
                <option>USD - US Dollar ($)</option>
              </select>
            </div>
            <div style={styles.settingGroup}>
              <label style={{ ...styles.label, color: '#fff' }}>Taxation Mode</label>
              <div style={styles.taxOptions}>
                <label style={styles.radioLabel}>
                  <input type="radio" defaultChecked /> Inclusive of Tax
                </label>
                <label style={styles.radioLabel}>
                  <input type="radio" /> Exclusive of Tax
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Channels */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📧 Communication</h2>
          <h3 style={styles.sectionSubtitle}>Notification Channels</h3>
          <div style={styles.channelsGrid}>
            <div style={styles.channelCard}>
              <h4 style={styles.channelTitle}>Customer Receipts</h4>
              <p style={styles.channelDesc}>Send automated transactional receipts on successful checkout</p>
              <div style={styles.toggle}>
                <input type="checkbox" defaultChecked />
                <span style={styles.toggleLabel}>Status</span>
              </div>
            </div>

            <div style={styles.channelCard}>
              <h4 style={styles.channelTitle}>Low Stock Alerts</h4>
              <p style={styles.channelDesc}>Notify the admin team when item stock falls below the set threshold</p>
              <div style={styles.toggle}>
                <input type="checkbox" defaultChecked />
                <span style={styles.toggleLabel}>Status</span>
              </div>
            </div>

            <div style={styles.channelCard}>
              <h4 style={styles.channelTitle}>Marketing Pulses</h4>
              <p style={styles.channelDesc}>Allow users to subscribe to promotional emails and lookbooks and drops</p>
              <div style={styles.toggle}>
                <input type="checkbox" />
                <span style={styles.toggleLabel}>Status</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.discardBtn}>Discard Changes</button>
          <button style={styles.saveBtn}>✓ Commit Settings</button>
          <p style={styles.unsavedNote}>⚠️ Unsaved changes detected in General Settings</p>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '24px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 48 },
  headerContent: {},
  label: { fontSize: 11, color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  title: { fontSize: 32, fontWeight: 900, color: '#111827', margin: '8px 0 0' },
  titleHighlight: { color: '#2563EB' },
  subtitle: { fontSize: 15, color: '#475569', lineHeight: 1.8, margin: '12px 0 0', maxWidth: 700 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 },
  card: { background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #E5E7EB' },
  cardTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 24px' },
  settingGroup: { marginBottom: 24 },
  input: { width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid #E5E7EB', fontSize: 14, outline: 'none' },
  hint: { fontSize: 12, color: '#6B7280', margin: '8px 0 0' },
  logoUpload: { display: 'flex', gap: 12, alignItems: 'center', padding: 16, background: '#F8FAFC', borderRadius: 12 },
  logoImage: { width: 60, height: 60, borderRadius: 8, objectFit: 'cover' },
  logoBtn: { padding: '8px 14px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer' },
  logoHint: { fontSize: 12, color: '#6B7280', margin: '12px 0 0' },
  taxOptions: { display: 'flex', flexDirection: 'column', gap: 8 },
  radioLabel: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#fff', cursor: 'pointer' },
  section: { marginBottom: 48 },
  sectionTitle: { fontSize: 24, fontWeight: 900, color: '#111827', margin: '0 0 8px' },
  sectionSubtitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 20px' },
  channelsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32 },
  channelCard: { background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E5E7EB' },
  channelTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 8px' },
  channelDesc: { fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: '0 0 16px' },
  toggle: { display: 'flex', alignItems: 'center', gap: 8 },
  toggleLabel: { fontSize: 13, fontWeight: 600, color: '#374151' },
  actions: { display: 'flex', gap: 16, alignItems: 'center', padding: 24, background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB' },
  discardBtn: { padding: '12px 24px', background: '#F3F4F6', color: '#374151', border: '1px solid #E5E7EB', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: 14 },
  saveBtn: { padding: '12px 32px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', fontSize: 14 },
  unsavedNote: { fontSize: 12, color: '#6B7280', margin: '0 0 0 auto', display: 'flex', alignItems: 'center', gap: 8 },
};

export default AdminSettingsPage;
