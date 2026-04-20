import React from 'react';
import { collectionPhones } from '../Data/mockData';
import { type Page } from '../Types';

interface ComparePageProps {
  onNavigate: (page: Page) => void;
}

const compareItems = collectionPhones.slice(0, 3);

const ComparePage: React.FC<ComparePageProps> = ({ onNavigate }) => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.tag}>The Tech Curators</p>
            <h1 style={styles.title}>Compare Devices</h1>
            <p style={styles.description}>Analyze the world’s most advanced mobile hardware and find the perfect balance of performance and elegance.</p>
          </div>
          <button style={styles.backBtn} onClick={() => onNavigate('home')}>
            ← Back to Home
          </button>
        </div>

        <div style={styles.comparisonCard}>
          <div style={styles.productRow}>
            {compareItems.map(item => (
              <div key={item.id} style={styles.productPreview}>
                <img src={item.image} alt={item.name} style={styles.productImage} />
                <div style={styles.productName}>{item.name}</div>
                <div style={styles.productPrice}>${item.price.toLocaleString()}</div>
                <button style={styles.productButton}>Get Device</button>
              </div>
            ))}
          </div>

          <div style={styles.specsTable}>
            <div style={styles.specsHeader} />
            {compareItems.map(item => (
              <div key={`col-${item.id}`} style={styles.specsHeading}>{item.brand}</div>
            ))}

            <div style={styles.specRow}>
              <div style={styles.specLabel}>Screen</div>
              <div style={styles.specValue}>6.8" OLED</div>
              <div style={styles.specValue}>6.7" AMOLED</div>
              <div style={styles.specValue}>6.5" LTPO</div>
            </div>
            <div style={styles.specRow}>
              <div style={styles.specLabel}>Performance</div>
              <div style={styles.specValue}>A19 Pro</div>
              <div style={styles.specValue}>Snapdragon 8 Gen 3</div>
              <div style={styles.specValue}>Tensor G3</div>
            </div>
            <div style={styles.specRow}>
              <div style={styles.specLabel}>Camera</div>
              <div style={styles.specValue}>108 MP</div>
              <div style={styles.specValue}>50 MP</div>
              <div style={styles.specValue}>50 MP</div>
            </div>
            <div style={styles.specRow}>
              <div style={styles.specLabel}>Battery</div>
              <div style={styles.specValue}>5200 mAh</div>
              <div style={styles.specValue}>5000 mAh</div>
              <div style={styles.specValue}>4900 mAh</div>
            </div>
            <div style={styles.specRow}> 
              <div style={styles.specLabel}>Network</div>
              <div style={styles.specValue}>5G</div>
              <div style={styles.specValue}>5G</div>
              <div style={styles.specValue}>5G</div>
            </div>
          </div>
        </div>

        <div style={styles.summarySection}>
          <div style={styles.summaryText}>
            <h2 style={styles.summaryTitle}>The Curator’s Verdict</h2>
            <p style={styles.summaryParagraph}>
              Every configuration is designed to deliver exceptional mobile performance with refined design language and premium camera systems.
              This comparison highlights devices with the best balance of display quality, power, and usability.
            </p>
          </div>
          <div style={styles.summaryCard}>
            <h3 style={styles.cardHeading}>Why Pixel wins in AI efficiency</h3>
            <p style={styles.cardBody}>The Pixel platform delivers smarter image processing, cleaner UI interactions, and premium battery management without sacrificing performance.</p>
            <button style={styles.readMoreBtn}>Read full editorial review →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F4F7FD', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 32, flexWrap: 'wrap' },
  tag: { fontSize: 12, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 16, fontWeight: 700 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: 0, lineHeight: 1.05 },
  description: { fontSize: 16, color: '#475569', maxWidth: 680, marginTop: 12, lineHeight: 1.8 },
  backBtn: { border: '1px solid #E5E7EB', borderRadius: 16, padding: '12px 20px', background: '#fff', color: '#111827', cursor: 'pointer', fontWeight: 700 },
  comparisonCard: { background: '#fff', borderRadius: 28, border: '1px solid #E5E7EB', padding: 24, marginBottom: 36, boxShadow: '0 30px 60px rgba(15,23,42,0.06)' },
  productRow: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18, marginBottom: 28 },
  productPreview: { background: '#F8FAFF', borderRadius: 24, padding: 24, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' },
  productImage: { width: '100%', height: 220, objectFit: 'cover', borderRadius: 20, marginBottom: 8 },
  productName: { fontSize: 16, fontWeight: 800, color: '#111827' },
  productPrice: { fontSize: 14, color: '#475569', fontWeight: 700 },
  productButton: { marginTop: 'auto', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 18px', cursor: 'pointer', fontWeight: 700 },
  specsTable: { display: 'grid', gridTemplateColumns: '210px repeat(3, minmax(0, 1fr))', background: '#F8FAFF', borderRadius: 24, overflow: 'hidden' },
  specsHeader: { background: '#F1F5F9', padding: '18px 16px' },
  specsHeading: { padding: '18px 16px', background: '#fff', borderBottom: '1px solid #E2E8F0', textAlign: 'center', fontWeight: 700, color: '#111827' },
  specRow: { display: 'contents' },
  specLabel: { padding: '18px 16px', background: '#F8FAFF', color: '#475569', fontWeight: 700, borderBottom: '1px solid #E2E8F0' },
  specValue: { padding: '18px 16px', borderBottom: '1px solid #E2E8F0', color: '#111827', textAlign: 'center' },
  summarySection: { display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 24, alignItems: 'stretch' },
  summaryText: { display: 'flex', flexDirection: 'column', gap: 20 },
  summaryTitle: { fontSize: 28, fontWeight: 900, color: '#111827', margin: 0 },
  summaryParagraph: { fontSize: 15, color: '#475569', lineHeight: 1.8, margin: 0 },
  summaryCard: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #E5E7EB', boxShadow: '0 24px 60px rgba(15,23,42,0.06)' },
  cardHeading: { margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' },
  cardBody: { margin: '16px 0 0', color: '#475569', lineHeight: 1.75, fontSize: 14 },
  readMoreBtn: { marginTop: 20, background: '#2563EB', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 18px', cursor: 'pointer', fontWeight: 700 },
};

export default ComparePage;
