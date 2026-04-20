import React from 'react';
import { type Page } from '../Types';

interface AccountSettingsPageProps {
  onNavigate: (page: Page) => void;
}

const AccountSettingsPage: React.FC<AccountSettingsPageProps> = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Account Settings</h1>
          <p style={styles.subtitle}>Manage your profile, preferences, security, and connected devices.</p>
        </div>

        <div style={styles.grid}>
          <div style={styles.mainContent}>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Account Overview</h3>
              <p style={styles.sectionDesc}>This is your profile information visible to others and used for account recovery. Select your preferable profile visibility.</p>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input defaultValue="Alex Curator" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input defaultValue="alex@primetech.io" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input defaultValue="" placeholder="Add phone number" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Date of Birth</label>
                <input type="date" style={styles.input} />
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Email Preferences</h3>
              <div style={styles.toggleItem}>
                <div>
                  <p style={styles.toggleLabel}>Newsletter</p>
                  <p style={styles.toggleDesc}>Stay updated with new launches</p>
                </div>
                <input type="checkbox" defaultChecked style={styles.toggle} />
              </div>
              <div style={styles.toggleItem}>
                <div>
                  <p style={styles.toggleLabel}>Marketing Promotions</p>
                  <p style={styles.toggleDesc}>Get exclusive deals and offers</p>
                </div>
                <input type="checkbox" defaultChecked style={styles.toggle} />
              </div>
            </div>
          </div>

          <aside style={styles.sidebar}>
            <div style={styles.sidebarCard}>
              <h3 style={styles.cardTitle}>Update Password</h3>
              <p style={styles.cardDesc}>Keep your account secure with a strong password.</p>
              <button style={styles.cardBtn}>Change Password</button>
            </div>

            <div style={styles.sidebarCard}>
              <h3 style={styles.cardTitle}>Two-Factor Auth</h3>
              <p style={styles.cardDesc}>Add an extra layer of security to your account</p>
              <button style={styles.cardBtn}>Enable 2FA</button>
            </div>

            <div style={{ ...styles.sidebarCard, background: '#FEE2E2', borderColor: '#FCA5A5' }}>
              <p style={styles.dangerLabel}>Danger Zone</p>
              <button style={styles.dangerBtn}>Delete Account</button>
            </div>
          </aside>
        </div>

        <div style={styles.footer}>
          <button style={styles.saveBtn}>Save All Changes</button>
          <p style={styles.footerNote}>Last updated 2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 40 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: 0 },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 640, marginTop: 12, lineHeight: 1.8 },
  grid: { display: 'grid', gridTemplateColumns: '1.6fr 0.7fr', gap: 32, marginBottom: 32 },
  mainContent: {},
  section: { background: '#fff', borderRadius: 24, padding: 32, marginBottom: 24, border: '1px solid #E5E7EB' },
  sectionTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 8px' },
  sectionDesc: { fontSize: 14, color: '#6B7280', margin: '0 0 24px', lineHeight: 1.6 },
  formGroup: { marginBottom: 20 },
  label: { display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 },
  input: { width: '100%', padding: '12px 14px', borderRadius: 14, border: '1.5px solid #E5E7EB', fontSize: 14, outline: 'none' },
  toggleItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #E5E7EB' },
  toggleLabel: { fontSize: 14, fontWeight: 700, color: '#111827', margin: 0 },
  toggleDesc: { fontSize: 13, color: '#6B7280', margin: '4px 0 0' },
  toggle: { width: 20, height: 20, cursor: 'pointer' },
  sidebar: { display: 'flex', flexDirection: 'column', gap: 16 },
  sidebarCard: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB' },
  cardTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 8px' },
  cardDesc: { fontSize: 13, color: '#6B7280', margin: '0 0 16px', lineHeight: 1.6 },
  cardBtn: { width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 0', cursor: 'pointer', fontWeight: 700, fontSize: 13 },
  dangerLabel: { fontSize: 12, color: '#DC2626', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' },
  dangerBtn: { width: '100%', background: '#DC2626', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 0', cursor: 'pointer', fontWeight: 700, fontSize: 13 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 24, background: '#fff', borderRadius: 24, border: '1px solid #E5E7EB' },
  saveBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 14, padding: '14px 32px', cursor: 'pointer', fontWeight: 700, fontSize: 14 },
  footerNote: { fontSize: 13, color: '#6B7280', margin: 0 },
};

export default AccountSettingsPage;
