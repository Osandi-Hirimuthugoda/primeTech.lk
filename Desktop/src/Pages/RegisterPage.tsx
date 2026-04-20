import React, { useState } from 'react';
import { type Page } from '../Types';

interface RegisterPageProps {
  onNavigate: (page: Page) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.wrapper}>
      <div style={styles.left}>
        <div style={styles.glowOrb} />
        <div style={styles.brandMark}>
          <div style={styles.logoBox}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="#3B82F6"/>
              <rect x="9" y="1" width="6" height="6" rx="1" fill="#3B82F6" opacity="0.6"/>
              <rect x="1" y="9" width="6" height="6" rx="1" fill="#3B82F6" opacity="0.6"/>
              <rect x="9" y="9" width="6" height="6" rx="1" fill="#3B82F6"/>
            </svg>
          </div>
          <span style={styles.brandName}>SmartDeals</span>
        </div>
        <div style={styles.heroImg}>
          <img
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=400&fit=crop&auto=format"
            alt="hero"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24, opacity: 0.8 }}
          />
        </div>
        <div style={styles.tagline}>
          <h2 style={styles.tagH}>Haurora Core.</h2>
          <p style={styles.tagP}>Join thousands of tech enthusiasts</p>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.formCard}>
          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>Start your journey with SmartDeals</p>

          <div style={styles.field}>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Email address</label>
            <input style={styles.input} type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" placeholder="Min. 8 characters" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <label style={styles.checkLabel}>
            <input type="checkbox" style={{ marginRight: 8 }} />
            <span style={{ fontSize: 12, color: '#6B7280' }}>
              I agree to the <a href="#" style={styles.link}>Terms</a> and <a href="#" style={styles.link}>Privacy Policy</a>
            </span>
          </label>

          <button style={styles.submit} onClick={() => onNavigate('home')}>
            Create Account
          </button>

          <div style={styles.divider}><span style={styles.dividerText}>or sign up with</span></div>

          <div style={styles.socials}>
            {['Google', 'Apple'].map(s => (
              <button key={s} style={styles.socialBtn}>{s}</button>
            ))}
          </div>

          <p style={styles.switch}>
            Already have an account?{' '}
            <button style={styles.switchLink} onClick={() => onNavigate('login')}>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: { display: 'flex', minHeight: '100vh', background: '#F9FAFB' },
  left: {
    width: '45%', background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
    position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 32,
  },
  glowOrb: {
    position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)', pointerEvents: 'none',
  },
  brandMark: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'auto' },
  logoBox: {
    width: 36, height: 36, borderRadius: 8, background: 'rgba(59,130,246,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  brandName: { color: '#F9FAFB', fontWeight: 700, fontSize: 16 },
  heroImg: { width: '100%', height: 280, marginBottom: 24, borderRadius: 24, overflow: 'hidden' },
  tagline: { marginTop: 'auto' },
  tagH: { color: '#F9FAFB', fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' },
  tagP: { color: '#94A3B8', fontSize: 14, margin: 0 },
  right: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 },
  formCard: { width: '100%', maxWidth: 380 },
  title: { fontSize: 24, fontWeight: 800, color: '#111827', margin: '0 0 6px', letterSpacing: '-0.5px' },
  subtitle: { fontSize: 14, color: '#6B7280', margin: '0 0 28px' },
  field: { marginBottom: 16 },
  label: { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 },
  input: {
    width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #E5E7EB',
    fontSize: 14, outline: 'none', background: '#fff', boxSizing: 'border-box', color: '#111827',
  },
  checkLabel: { display: 'flex', alignItems: 'center', marginBottom: 20, cursor: 'pointer' },
  link: { color: '#3B82F6', textDecoration: 'none' },
  submit: {
    width: '100%', padding: '12px', borderRadius: 10, background: '#3B82F6', color: '#fff',
    border: 'none', fontSize: 14, fontWeight: 700, cursor: 'pointer', marginBottom: 20,
  },
  divider: { textAlign: 'center', marginBottom: 16 },
  dividerText: { fontSize: 12, color: '#9CA3AF', background: '#F9FAFB', padding: '0 12px' },
  socials: { display: 'flex', gap: 10, marginBottom: 24 },
  socialBtn: {
    flex: 1, padding: '10px', borderRadius: 10, border: '1.5px solid #E5E7EB',
    background: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#374151',
  },
  switch: { fontSize: 13, color: '#6B7280', textAlign: 'center' },
  switchLink: { background: 'none', border: 'none', color: '#3B82F6', fontWeight: 600, cursor: 'pointer', fontSize: 13 },
};

export default RegisterPage;
