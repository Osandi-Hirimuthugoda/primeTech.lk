import React, { useState } from 'react';
import { collectionPhones } from '../Data/mockData';
import type { Product, Page } from '../Types';

interface CollectionPageProps {
  onNavigate: (page: Page) => void;
}

const PhoneCollectionCard: React.FC<{ product: Product; onNavigate: (page: Page) => void }> = ({ product, onNavigate }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        boxShadow: hovered ? '0 6px 20px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate('productdetails')}
    >
      {product.badge && (
        <span style={{ ...styles.badge, background: product.badge === 'Hot' ? '#EF4444' : '#10B981' }}>
          {product.badge}
        </span>
      )}
      <div style={styles.imgWrap}>
        <img src={product.image} alt={product.name} style={styles.img} />
      </div>
      <div style={styles.info}>
        <p style={styles.brand}>{product.brand}</p>
        <p style={styles.name}>{product.name}</p>
        {product.colors && (
          <div style={styles.colors}>
            {product.colors.slice(0, 4).map((c, i) => (
              <button
                key={i}
                style={{
                  ...styles.colorDot,
                  background: c,
                  transform: selectedColor === i ? 'scale(1.35)' : 'scale(1)',
                  boxShadow: selectedColor === i ? `0 0 0 2px #fff, 0 0 0 3.5px ${c}` : 'none',
                }}
                onClick={() => setSelectedColor(i)}
              />
            ))}
          </div>
        )}
        {product.storage && (
          <div style={styles.storageRow}>
            {product.storage.map((s, i) => (
              <button
                key={i}
                style={{
                  ...styles.storageChip,
                  background: selectedStorage === i ? '#3B82F6' : '#F3F4F6',
                  color: selectedStorage === i ? '#fff' : '#6B7280',
                  borderColor: selectedStorage === i ? '#3B82F6' : '#E5E7EB',
                }}
                onClick={() => setSelectedStorage(i)}
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div style={styles.footer}>
          <span style={styles.price}>${product.price.toLocaleString()}</span>
          <button style={styles.addBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const CollectionPage: React.FC<CollectionPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const filters = ['All', 'Samsung', 'Apple', 'OnePlus', 'Google', 'Xiaomi'];
  const priceRanges = ['All Prices', 'Under $500', '$500–$1000', '$1000+'];

  const filtered = activeFilter === 'All'
    ? collectionPhones
    : collectionPhones.filter(p => p.brand === activeFilter);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>The Mobile Collection.</h1>
            <p style={styles.subtitle}>Discover the latest and greatest smartphones from every major brand</p>
          </div>
          <button style={styles.backBtn} onClick={() => onNavigate('home')}>← Back to Home</button>
        </div>

        {/* Filters */}
        <div style={styles.filtersRow}>
          <div style={styles.filterTabs}>
            {filters.map(f => (
              <button
                key={f}
                style={{
                  ...styles.filterTab,
                  background: activeFilter === f ? '#111827' : '#fff',
                  color: activeFilter === f ? '#fff' : '#374151',
                  borderColor: activeFilter === f ? '#111827' : '#E5E7EB',
                }}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div style={styles.sortRow}>
            <select style={styles.select}>
              <option>Sort: Newest</option>
              <option>Sort: Price Low–High</option>
              <option>Sort: Price High–Low</option>
              <option>Sort: Rating</option>
            </select>
            <select style={styles.select}>
              {priceRanges.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div style={styles.grid}>
          {filtered.map(p => <PhoneCollectionCard key={p.id} product={p} onNavigate={onNavigate} />)}
        </div>

        {/* Pagination */}
        <div style={styles.pagination}>
          {[1, 2, 3, 4].map(n => (
            <button
              key={n}
              style={{
                ...styles.pageBtn,
                background: currentPage === n ? '#3B82F6' : '#fff',
                color: currentPage === n ? '#fff' : '#374151',
                borderColor: currentPage === n ? '#3B82F6' : '#E5E7EB',
              }}
              onClick={() => setCurrentPage(n)}
            >
              {n}
            </button>
          ))}
          <button style={styles.pageBtn}>→</button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F9FAFB', minHeight: '100vh', padding: '32px 0 60px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 },
  title: { fontSize: 30, fontWeight: 900, color: '#111827', margin: '0 0 6px', letterSpacing: '-0.7px' },
  subtitle: { fontSize: 14, color: '#6B7280', margin: 0 },
  backBtn: {
    background: 'none', border: '1px solid #E5E7EB', borderRadius: 8,
    padding: '8px 16px', fontSize: 13, color: '#374151', cursor: 'pointer', fontWeight: 600,
    flexShrink: 0,
  },
  filtersRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 },
  filterTabs: { display: 'flex', gap: 6, flexWrap: 'wrap' },
  filterTab: {
    padding: '7px 16px', borderRadius: 20, border: '1.5px solid',
    fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
  },
  sortRow: { display: 'flex', gap: 8 },
  select: {
    padding: '8px 12px', borderRadius: 8, border: '1.5px solid #E5E7EB',
    fontSize: 13, color: '#374151', background: '#fff', cursor: 'pointer', outline: 'none',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 },
  card: {
    background: '#fff', borderRadius: 16, border: '1px solid #F3F4F6',
    overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s ease', position: 'relative',
  },
  badge: {
    position: 'absolute', top: 10, right: 10,
    color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 6,
  },
  imgWrap: {
    height: 180, background: '#F8F8F8', overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  info: { padding: '14px' },
  brand: { fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 3px' },
  name: { fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 10px', lineHeight: 1.3 },
  colors: { display: 'flex', gap: 5, marginBottom: 10 },
  colorDot: { width: 11, height: 11, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.15s' },
  storageRow: { display: 'flex', gap: 4, marginBottom: 12, flexWrap: 'wrap' },
  storageChip: {
    padding: '3px 8px', borderRadius: 6, border: '1.5px solid', fontSize: 10,
    fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s',
  },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  price: { fontSize: 15, fontWeight: 800, color: '#111827' },
  addBtn: {
    background: '#3B82F6', color: '#fff', border: 'none',
    padding: '7px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer',
  },
  pagination: { display: 'flex', justifyContent: 'center', gap: 6 },
  pageBtn: {
    width: 36, height: 36, borderRadius: 10, border: '1.5px solid',
    fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
};

export default CollectionPage;
