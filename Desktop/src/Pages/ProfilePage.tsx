import React, { useState } from 'react';
import { type Page } from '../Types';

interface ProfilePageProps {
  onNavigate: (page: Page) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const [sidebarActive, setSidebarActive] = useState('profile');

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <aside style={styles.sidebar}>
            {[
              { id: 'profile', label: 'Profile' },
              { id: 'orders', label: 'Order History', onClick: () => onNavigate('orders' as any) },
              { id: 'saved', label: 'Saved Items', onClick: () => onNavigate('saved' as any) },
              { id: 'settings', label: 'Account Settings', onClick: () => onNavigate('settings' as any) },
            ].map(item => (
              <button
                key={item.id}
                style={{
                  ...styles.sidebarItem,
                  background: sidebarActive === item.id ? '#F0F4F8' : 'transparent',
                  color: sidebarActive === item.id ? '#2563EB' : '#6B7280',
                }}
                onClick={() => {
                  setSidebarActive(item.id);
                  if (item.onClick) item.onClick();
                }}
              >
                {item.label}
              </button>
            ))}
          </aside>

          <div style={styles.content}>
            <div style={styles.profileHeader}>
              <div style={styles.profileBanner} />
              <div style={styles.profileInfo}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" alt="Alex" style={styles.avatar} />
                <h1 style={styles.profileName}>Alex Curator</h1>
                <p style={styles.profileEmail}>alex.curator@email.com</p>
                <p style={styles.profileStatus}>Pro Member • 2 devices registered</p>
              </div>
            </div>

            <div style={styles.activityGrid}>
              <div style={styles.activityCard}>
                <h3 style={styles.activityTitle}>Recent Activity</h3>
                <button style={styles.viewAllBtn}>View all</button>
                <div style={styles.productGrid}>
                  <div style={styles.productCard}>
                    <img src="https://images.unsplash.com/photo-1587829191301-be659ba0db00?w=120&h=120&fit=crop&auto=format" alt="Keyboard" style={styles.productImage} />
                    <p style={styles.productName}>Stealth Core Keyboard V2</p>
                  </div>
                  <div style={styles.productCard}>
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=120&fit=crop&auto=format" alt="Headphones" style={styles.productImage} />
                    <p style={styles.productName}>Zenith ANC Headphones</p>
                  </div>
                </div>
              </div>

              <div style={styles.quickActionsCard}>
                <h3 style={styles.quickTitle}>Quick Actions</h3>
                <button style={styles.actionBtn}>Edit Profile</button>
                <button style={styles.actionBtn}>Manage Devices</button>
                <button style={styles.actionBtn}>Referral Program</button>
                <button style={styles.actionBtn}>Logout</button>
              </div>
            </div>

            <div style={styles.savedSection}>
              <h3 style={styles.savedTitle}>Saved for Later</h3>
              <div style={styles.productGrid}>
                <div style={styles.productCard}>
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&auto=format" alt="Watch" style={styles.productImage} />
                  <p style={styles.productName}>Titanium Pro Series Watch</p>
                </div>
                <div style={styles.productCard}>
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop&auto=format" alt="Headphones" style={styles.productImage} />
                  <p style={styles.productName}>Levant ANC Headphones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '24px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  grid: { display: 'grid', gridTemplateColumns: '240px 1fr', gap: 32 },
  sidebar: { display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 80 },
  sidebarItem: { textAlign: 'left', padding: '12px 16px', borderRadius: 14, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, transition: 'all 0.2s' },
  content: {},
  profileHeader: { position: 'relative', marginBottom: 32 },
  profileBanner: { height: 140, background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)', borderRadius: 24, marginBottom: -60, position: 'relative', zIndex: 1 },
  profileInfo: { background: '#fff', borderRadius: 24, padding: 32, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 24 },
  avatar: { width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginTop: -80, marginBottom: 16, border: '4px solid #fff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  profileName: { fontSize: 26, fontWeight: 900, color: '#111827', margin: 0 },
  profileEmail: { fontSize: 14, color: '#6B7280', margin: '4px 0 0' },
  profileStatus: { fontSize: 13, color: '#9CA3AF', margin: '8px 0 0' },
  activityGrid: { display: 'grid', gridTemplateColumns: '1.5fr 0.7fr', gap: 24, marginBottom: 32 },
  activityCard: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB' },
  quickActionsCard: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 12 },
  activityTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  quickTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 16px' },
  viewAllBtn: { background: 'none', border: 'none', color: '#2563EB', cursor: 'pointer', fontSize: 13, fontWeight: 700, float: 'right' },
  productGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 },
  productCard: { background: '#F8FAFF', borderRadius: 16, padding: 12, textAlign: 'center' },
  productImage: { width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 8 },
  productName: { fontSize: 13, fontWeight: 700, color: '#111827', margin: 0 },
  actionBtn: { padding: '12px 16px', background: '#F8FAFF', border: '1px solid #E5E7EB', borderRadius: 12, cursor: 'pointer', fontWeight: 600, color: '#2563EB' },
  savedSection: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB' },
  savedTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 20px' },
};

export default ProfilePage;
