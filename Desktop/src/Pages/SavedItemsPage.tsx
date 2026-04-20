import React from 'react';
import { type Page } from '../Types';

interface SavedItemsPageProps {
  onNavigate: (page: Page) => void;
}

const SavedItemsPage: React.FC<SavedItemsPageProps> = () => {
  const savedItems = [
    { id: '1', name: 'Titanium Pro Series', price: '$449', rating: 4.8, reviews: '256 reviews', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&auto=format', colors: ['#1A1A1A', '#C0C0C0'] },
    { id: '2', name: 'Zenith ANC Headphones', price: '$349', rating: 4.7, reviews: '128 reviews', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format', colors: ['#1A1A1A', '#4A90D9'] },
    { id: '3', name: 'Lumina Buds', price: '$99', rating: 4.9, reviews: '892 reviews', image: 'https://images.unsplash.com/photo-1606841837239-c5a1a33342b0?w=200&h=200&fit=crop&auto=format', colors: ['#F5F5F5', '#1A1A1A'] },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Your Saved Collection</h1>
          <p style={styles.subtitle}>Curated picks and products you're saving for. Track prices and get notified when items go on sale.</p>
        </div>

        <div style={styles.grid}>
          {savedItems.map(item => (
            <div key={item.id} style={styles.card}>
              <div style={styles.imageWrapper}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <button style={styles.heartBtn}>♡</button>
              </div>
              <div style={styles.info}>
                <p style={styles.category}>FEATURED TECH</p>
                <h3 style={styles.name}>{item.name}</h3>
                <div style={styles.priceRow}>
                  <span style={styles.price}>{item.price}</span>
                  <span style={styles.rating}>★ {item.rating}</span>
                </div>
                <p style={styles.reviews}>{item.reviews}</p>
                <div style={styles.colors}>
                  {item.colors.map((color, idx) => (
                    <button key={idx} style={{ ...styles.colorDot, background: color }} />
                  ))}
                </div>
                <button style={styles.addBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 48 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: 0, lineHeight: 1.05 },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 680, marginTop: 12, lineHeight: 1.8 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 },
  card: { background: '#fff', borderRadius: 20, padding: 16, border: '1px solid #E5E7EB', transition: 'all 0.2s' },
  imageWrapper: { position: 'relative', marginBottom: 16, height: 200, borderRadius: 16, overflow: 'hidden', background: '#F8FAFF' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  heartBtn: { position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: '50%', background: '#fff', border: 'none', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  info: {},
  category: { fontSize: 10, color: '#2563EB', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  name: { fontSize: 14, fontWeight: 800, color: '#111827', margin: '8px 0 12px' },
  priceRow: { display: 'flex', justifyContent: 'space-between', marginBottom: 4 },
  price: { fontSize: 16, fontWeight: 900, color: '#111827' },
  rating: { fontSize: 13, color: '#F59E0B' },
  reviews: { fontSize: 12, color: '#6B7280', margin: '0 0 12px' },
  colors: { display: 'flex', gap: 6, marginBottom: 16 },
  colorDot: { width: 14, height: 14, borderRadius: '50%', border: 'none', cursor: 'pointer' },
  addBtn: { width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 0', cursor: 'pointer', fontWeight: 700, fontSize: 13 },
};

export default SavedItemsPage;
