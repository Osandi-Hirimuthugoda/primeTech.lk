import React, { useState } from 'react';
import { ecosystemItems } from '../Data/mockData';
import { type Page } from '../Types';

interface EcosystemPageProps {
  onNavigate: (page: Page) => void;
}

const EcosystemPage: React.FC<EcosystemPageProps> = ({ onNavigate }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <div>
            <p style={styles.breadcrumb}>The Collection</p>
            <h1 style={styles.title}>Core Ecosystem</h1>
            <p style={styles.subtitle}>Precision-engineered hardware and seamless digital experiences, categorized for your evolving workspace.</p>
          </div>
          <button style={styles.backBtn} onClick={() => onNavigate('home')}>
            ← Back to Home
          </button>
        </div>

        <div style={styles.mosaicGrid}>
          {ecosystemItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                ...styles.gridItem,
                ...getItemSpan(index),
                position: 'relative',
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={item.image} alt={item.name} style={styles.mosaicImg} />
              <div style={{ ...styles.overlay, opacity: hoveredId === item.id ? 1 : 0 }}>
                <span style={styles.overlayCategory}>{item.category}</span>
                {index < 2 && (
                  <button style={styles.shopNowBtn} onClick={() => onNavigate('collection')}>
                    Shop Now →
                  </button>
                )}
              </div>
              <div style={styles.itemLabel}>{item.name}</div>
            </div>
          ))}
        </div>

        <div style={styles.curatedSection}>
          <div style={styles.curatedText}>
            <span style={styles.curatedTag}>Curated Series</span>
            <h2 style={styles.curatedTitle}>Curated for the Modern Professional</h2>
            <p style={styles.curatedDesc}>
              “Success isn’t just about the tools you use, but how they integrate into your lifestyle. PrimeTech Core selects only the most essential innovations for the high-performance individual.”
            </p>
            <button style={styles.exploreBtn} onClick={() => onNavigate('collection')}>
              View Lookbook
            </button>
          </div>
          <div style={styles.curatedImageCard}>
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=520&h=420&fit=crop&auto=format"
              alt="Professional workspace"
              style={styles.curatedImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const getItemSpan = (index: number): React.CSSProperties => {
  if (index === 0) {
    return { gridColumn: 'span 2', gridRow: 'span 2' };
  }
  if (index === 1) {
    return { gridColumn: 'span 2', gridRow: 'span 1' };
  }
  return { gridColumn: 'span 1', gridRow: 'span 1' };
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#EBF2FF', minHeight: '100vh', padding: '40px 0 80px' },
  container: { maxWidth: 1360, margin: '0 auto', padding: '0 24px' },
  pageHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 36, flexWrap: 'wrap' },
  breadcrumb: { textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: 11, color: '#2563EB', marginBottom: 12, fontWeight: 700 },
  title: { fontSize: 42, fontWeight: 900, color: '#0F172A', margin: '0 0 16px', lineHeight: 1.05 },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 680, lineHeight: 1.8, margin: 0 },
  backBtn: {
    background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16,
    padding: '14px 22px', fontSize: 14, color: '#0F172A', fontWeight: 700,
    cursor: 'pointer', boxShadow: '0 20px 60px rgba(15,23,42,0.06)',
  },
  mosaicGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gridAutoRows: '220px', gap: 16,
    marginBottom: 48,
  },
  gridItem: {
    borderRadius: 24, overflow: 'hidden', background: '#fff', boxShadow: '0 25px 70px rgba(15,23,42,0.08)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  mosaicImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  overlay: {
    position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 18,
    gap: 12, opacity: 0, transition: 'opacity 0.25s ease',
  },
  overlayCategory: {
    background: '#3B82F6', color: '#fff', fontSize: 11,
    fontWeight: 700, padding: '5px 12px', borderRadius: 999,
    letterSpacing: '0.08em', textTransform: 'uppercase', width: 'fit-content',
  },
  shopNowBtn: {
    background: '#fff', color: '#0F172A', border: 'none',
    padding: '10px 18px', borderRadius: 14, fontSize: 13, fontWeight: 700,
    cursor: 'pointer', width: 'fit-content',
  },
  itemLabel: {
    position: 'absolute', bottom: 16, left: 16,
    color: '#fff', fontSize: 13, fontWeight: 800,
    textShadow: '0 12px 28px rgba(0,0,0,0.35)',
  },
  curatedSection: {
    display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32,
    background: '#fff', borderRadius: 28, padding: 40, boxShadow: '0 30px 80px rgba(15,23,42,0.08)',
  },
  curatedText: { display: 'flex', flexDirection: 'column', gap: 18 },
  curatedTag: { fontSize: 12, color: '#2563EB', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 },
  curatedTitle: { fontSize: 32, fontWeight: 900, color: '#0F172A', margin: 0, lineHeight: 1.05 },
  curatedDesc: { fontSize: 16, color: '#475569', lineHeight: 1.8, margin: 0, maxWidth: 560 },
  exploreBtn: {
    width: 'fit-content', background: '#111827', color: '#fff', border: 'none',
    padding: '14px 24px', borderRadius: 16, fontSize: 14, fontWeight: 700,
    cursor: 'pointer', marginTop: 4,
  },
  curatedImageCard: {
    borderRadius: 24, overflow: 'hidden', minHeight: 320, background: '#F8FAFF',
    display: 'flex', alignItems: 'stretch', justifyContent: 'stretch',
  },
  curatedImage: { width: '100%', height: '100%', objectFit: 'cover' },
};

export default EcosystemPage;
