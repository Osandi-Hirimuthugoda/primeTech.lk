import React, { useState } from 'react';
import { type Page } from '../Types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [cartCount] = useState(2);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const navItems: Array<{label: string; page: Page}> = [
    { label: 'Home', page: 'home' },
    { label: 'Categories', page: 'collection' },
    { label: 'Compare', page: 'compare' },
    { label: 'Chat bot', page: 'chat' },
    { label: 'Trade in', page: 'tradein' },
    { label: 'Referral', page: 'referral' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        {/* Logo */}
        <div style={styles.logo} onClick={() => onNavigate('home')}>
          <div style={styles.logoIcon}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="#3B82F6"/>
              <rect x="9" y="1" width="6" height="6" rx="1" fill="#3B82F6" opacity="0.6"/>
              <rect x="1" y="9" width="6" height="6" rx="1" fill="#3B82F6" opacity="0.6"/>
              <rect x="9" y="9" width="6" height="6" rx="1" fill="#3B82F6"/>
            </svg>
          </div>
          <span style={styles.logoText}>SmartDeals</span>
        </div>

        {/* Nav Links */}
        <div style={styles.navLinks}>
          {navItems.map(item => (
            <button
              key={item.label}
              style={{
                ...styles.navLink,
                color: currentPage === item.page ? '#3B82F6' : '#374151',
              }}
              onClick={() => onNavigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div style={styles.actions}>
          <button style={styles.actionBtn} onClick={() => onNavigate('ecosystem')}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button style={styles.actionBtn} onClick={() => onNavigate('collection')}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button style={styles.cartBtn} onClick={() => onNavigate('cart')}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </button>
          <div style={styles.profileMenuWrapper}>
            <button style={styles.profileBtn} onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
              <div style={styles.profileAvatar}>AC</div>
            </button>
            {profileMenuOpen && (
              <div style={styles.profileMenu}>
                <button style={styles.menuItem} onClick={() => { onNavigate('profile'); setProfileMenuOpen(false); }}>Profile</button>
                <button style={styles.menuItem} onClick={() => { onNavigate('orders'); setProfileMenuOpen(false); }}>Order History</button>
                <button style={styles.menuItem} onClick={() => { onNavigate('saved'); setProfileMenuOpen(false); }}>Saved Items</button>
                <button style={styles.menuItem} onClick={() => { onNavigate('settings'); setProfileMenuOpen(false); }}>Settings</button>
                <div style={styles.menuDivider} />
                <div style={styles.menuGroup}>
                  <p style={styles.menuGroupLabel}>Admin</p>
                  <button style={styles.menuItem} onClick={() => { onNavigate('admindashboard'); setProfileMenuOpen(false); }}>Dashboard</button>
                  <button style={styles.menuItem} onClick={() => { onNavigate('adminproducts'); setProfileMenuOpen(false); }}>Products</button>
                  <button style={styles.menuItem} onClick={() => { onNavigate('adminorders'); setProfileMenuOpen(false); }}>Orders</button>
                  <button style={styles.menuItem} onClick={() => { onNavigate('admincustomers'); setProfileMenuOpen(false); }}>Customers</button>
                  <button style={styles.menuItem} onClick={() => { onNavigate('adminwarranty'); setProfileMenuOpen(false); }}>Warranty</button>
                  <button style={styles.menuItem} onClick={() => { onNavigate('adminsettings'); setProfileMenuOpen(false); }}>Settings</button>
                </div>
                <div style={styles.menuDivider} />
                <button style={styles.menuItem} onClick={() => { onNavigate('login'); setProfileMenuOpen(false); }}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #E5E7EB', padding: '0 24px',
  },
  inner: {
    maxWidth: 1280, margin: '0 auto',
    display: 'flex', alignItems: 'center', gap: 32, height: 56,
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flexShrink: 0,
  },
  logoIcon: {
    width: 28, height: 28, borderRadius: 6,
    background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  logoText: { fontWeight: 700, fontSize: 15, color: '#111827', letterSpacing: '-0.3px' },
  navLinks: { display: 'flex', gap: 4, flex: 1 },
  navLink: {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: 13, fontWeight: 500, padding: '6px 10px', borderRadius: 6,
    transition: 'color 0.2s',
  },
  actions: { display: 'flex', alignItems: 'center', gap: 4 },
  actionBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#6B7280', padding: 8, borderRadius: 8, display: 'flex',
    transition: 'background 0.2s',
  },
  cartBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    color: '#6B7280', padding: 8, borderRadius: 8, display: 'flex',
    position: 'relative', transition: 'background 0.2s',
  },
  cartBadge: {
    position: 'absolute', top: 2, right: 2,
    width: 14, height: 14, borderRadius: '50%',
    background: '#3B82F6', color: '#fff', fontSize: 9,
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
  },
  profileMenuWrapper: { position: 'relative', marginLeft: 8 },
  profileBtn: {
    background: 'none', border: 'none', cursor: 'pointer',
    padding: 4, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  profileAvatar: {
    width: 32, height: 32, borderRadius: '50%', background: '#3B82F6',
    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 12, fontWeight: 700,
  },
  profileMenu: {
    position: 'absolute', top: '100%', right: 0, marginTop: 8,
    background: '#fff', borderRadius: 12, border: '1px solid #E5E7EB',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 1000,
    minWidth: 180,
  },
  menuItem: {
    width: '100%', padding: '12px 16px', background: 'none', border: 'none',
    cursor: 'pointer', fontSize: 13, color: '#374151', fontWeight: 500,
    textAlign: 'left', transition: 'background 0.2s',
  },
  menuGroup: { padding: '8px 0' },
  menuGroupLabel: { fontSize: 11, color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '8px 16px', margin: 0 },
  menuDivider: { height: 1, background: '#E5E7EB', margin: '4px 0' },
};

export default Navbar;
