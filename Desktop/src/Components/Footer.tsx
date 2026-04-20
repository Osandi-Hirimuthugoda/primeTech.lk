import React from 'react';

const Footer: React.FC = () => {
  const cols = [
    { title: 'SmartDeals', links: ['About Us', 'Careers', 'Press', 'Blog'] },
    { title: 'Support', links: ['Help Center', 'Contact Us', 'Returns', 'Warranty'] },
    { title: 'Products', links: ['Phones', 'Laptops', 'Audio', 'Accessories'] },
    { title: 'Policies', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.grid}>
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={styles.colTitle}>{col.title}</h4>
              {col.links.map(link => (
                <a key={link} href="#" style={styles.link}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={styles.bottom}>
          <span style={styles.copy}>© 2026 SmartDeals. All rights reserved.</span>
          <div style={styles.socials}>
            {['Twitter', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" style={styles.social}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: { background: '#111827', color: '#9CA3AF', marginTop: 80 },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '48px 24px 24px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 40 },
  colTitle: { color: '#F9FAFB', fontSize: 13, fontWeight: 700, marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' },
  link: { display: 'block', color: '#6B7280', fontSize: 13, textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' },
  bottom: { borderTop: '1px solid #1F2937', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copy: { fontSize: 12, color: '#6B7280' },
  socials: { display: 'flex', gap: 16 },
  social: { fontSize: 12, color: '#6B7280', textDecoration: 'none' },
};

export default Footer;
