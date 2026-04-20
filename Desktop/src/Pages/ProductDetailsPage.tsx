import React, { useState } from 'react';
import { type Page } from '../Types';

interface ProductDetailsPageProps {
  onNavigate: (page: Page) => void;
}

type TabType = 'description' | 'specifications' | 'info' | 'reviews' | 'accessories';

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = () => {
  const [activeTab, setActiveTab] = useState<TabType>('description');
  const [selectedColor, setSelectedColor] = useState(0);

  const tabs: Array<{ id: TabType; label: string }> = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'info', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const colors = [
    { name: 'Black', hex: '#1a1a1a' },
    { name: 'Orange', hex: '#ff6b35' },
    { name: 'Blue', hex: '#2563EB' },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Product Header */}
        <div style={styles.header}>
          <div style={styles.heroSection}>
            <img
              src="https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop&auto=format"
              alt="iPhone 17 Pro Max"
              style={styles.heroImage}
            />
            <div style={styles.productInfo}>
              <p style={styles.badge}>NEW LAUNCH</p>
              <h1 style={styles.productTitle}>iPhone 17 Pro Max</h1>
              <p style={styles.price}>From $1,199</p>
              <p style={styles.description}>
                Powered by the latest A18 Bionic processor, this iPhone features the most advanced camera system yet. Experience desktop-class performance in your pocket.
              </p>

              <div style={styles.colors}>
                <p style={styles.colorLabel}>Color:</p>
                <div style={styles.colorGrid}>
                  {colors.map((color, idx) => (
                    <button
                      key={idx}
                      style={{
                        ...styles.colorOption,
                        border: selectedColor === idx ? '2px solid #2563EB' : '2px solid transparent',
                      }}
                      onClick={() => setSelectedColor(idx)}
                    >
                      <div style={{ ...styles.colorDot, background: color.hex }} />
                      <span style={styles.colorName}>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={styles.specs}>
                <div style={styles.specItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                  </svg>
                  <span>6.9"</span>
                </div>
                <div style={styles.specItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span>A18 Pro</span>
                </div>
                <div style={styles.specItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  <span>12MP + 48MP</span>
                </div>
              </div>

              <div style={styles.rating}>
                <span style={styles.ratingStars}>★★★★★</span>
                <span style={styles.ratingValue}>4.9 out of 5</span>
              </div>

              <div style={styles.actions}>
                <button style={styles.primaryBtn}>Buy Online Now</button>
                <button style={styles.secondaryBtn}>Compare</button>
                <button style={styles.secondaryBtn}>💚</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div style={styles.subNav}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              style={{
                ...styles.subNavItem,
                color: activeTab === tab.id ? '#2563EB' : '#6B7280',
                borderBottom: activeTab === tab.id ? '2px solid #2563EB' : 'none',
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={styles.content}>
          {activeTab === 'description' && (
            <div style={styles.tabSection}>
              <div style={styles.featureRow}>
                <h3 style={styles.featureTitle}>A19 Pro Chip. Speed redefined.</h3>
                <p style={styles.featureDesc}>The industry's first 3-nanometer architecture. Experience blazing-fast performance and efficiency. Designed for gaming and next-generation applications.</p>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format" alt="Chip" style={styles.featureImage} />
              </div>

              <div style={styles.featureRow}>
                <h3 style={styles.featureTitle}>Super Retina XDR.</h3>
                <p style={styles.featureDesc}>The highest contrast OLED display ever on a phone. Stunning color accuracy and peak brightness for any situation. Experience the future of mobile displays.</p>
                <img src="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop&auto=format" alt="Display" style={styles.featureImage} />
              </div>

              <div style={styles.featureRow}>
                <h3 style={styles.featureTitle}>Advanced Camera System.</h3>
                <p style={styles.featureDesc}>Three advanced camera systems work together to capture stunning photos and videos in any light. Pro features like ProRAW and ProRes now available to everyone.</p>
                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop&auto=format" alt="Camera" style={styles.featureImage} />
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div style={styles.tabSection}>
              <div style={styles.specGrid}>
                <div style={styles.specCard}>
                  <h4 style={styles.specCardTitle}>Display</h4>
                  <div style={styles.specList}>
                    <p>6.9-inch Super Retina XDR</p>
                    <p>2796 x 1290 @ 460 ppi</p>
                    <p>ProMotion 120Hz</p>
                    <p>Peak brightness 3000 nits</p>
                  </div>
                </div>

                <div style={styles.specCard}>
                  <h4 style={styles.specCardTitle}>Performance</h4>
                  <div style={styles.specList}>
                    <p>Apple A18 Pro</p>
                    <p>8-core CPU</p>
                    <p>6GB RAM</p>
                    <p>Up to 2TB storage</p>
                  </div>
                </div>

                <div style={styles.specCard}>
                  <h4 style={styles.specCardTitle}>Camera</h4>
                  <div style={styles.specList}>
                    <p>48MP Main Sensor</p>
                    <p>12MP Ultra Wide</p>
                    <p>12MP 5x Telephoto</p>
                    <p>LiDAR Scanner</p>
                  </div>
                </div>

                <div style={styles.specCard}>
                  <h4 style={styles.specCardTitle}>Battery & Charging</h4>
                  <div style={styles.specList}>
                    <p>5,000 mAh Battery</p>
                    <p>All-day battery life</p>
                    <p>45W USB-C fast charging</p>
                    <p>MagSafe wireless charging</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'info' && (
            <div style={styles.tabSection}>
              <div style={styles.infoBox}>
                <h3 style={styles.infoTitle}>📋 Shipping Information</h3>
                <ul style={styles.infoList}>
                  <li>Standard Delivery: 2-3 business days</li>
                  <li>Express Delivery: Next day delivery</li>
                  <li>International: 5-7 business days</li>
                  <li>Free shipping on all orders</li>
                </ul>
              </div>

              <div style={styles.infoBox}>
                <h3 style={styles.infoTitle}>🔄 Return Policy</h3>
                <ul style={styles.infoList}>
                  <li>30-day return guarantee</li>
                  <li>Full refund if unused</li>
                  <li>Partial refund for used items</li>
                  <li>No return shipping fees</li>
                </ul>
              </div>

              <div style={styles.warrantyBox}>
                <div style={styles.warrantyIcon}>🛡️</div>
                <h3 style={styles.warrantyTitle}>Coverage & Warranty</h3>
                <p style={styles.warrantyDesc}>Includes 1-year hardware warranty, 90-day software support, and optional AppleCare+ protection plans available.</p>
                <button style={styles.warrantyBtn}>Learn About Warranty</button>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div style={styles.tabSection}>
              <div style={styles.reviewsHeader}>
                <div style={styles.ratingBox}>
                  <div style={styles.ratingNumber}>4.9</div>
                  <div style={styles.ratingStars}>★★★★★</div>
                  <p style={styles.reviewCount}>Based on 2,847 reviews</p>
                </div>

                <div style={styles.ratingBars}>
                  {[5, 4, 3, 2, 1].map(rating => (
                    <div key={rating} style={styles.ratingBar}>
                      <span>{rating}★</span>
                      <div style={styles.barBg}>
                        <div style={{ ...styles.barFill, width: `${100 - (5 - rating) * 15}%` }} />
                      </div>
                      <span>{100 - (5 - rating) * 15}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={styles.reviewsWrite}>
                <h4>Write a Review</h4>
                <button style={styles.writeBtn}>Share Your Experience</button>
              </div>

              <div style={styles.reviewsList}>
                <div style={styles.reviewCard}>
                  <div style={styles.reviewHeader}>
                    <div style={styles.reviewerInfo}>
                      <div style={styles.reviewerAvatar}>MM</div>
                      <div>
                        <p style={styles.reviewerName}>Marcus Chen</p>
                        <p style={styles.reviewDate}>Verified Purchase</p>
                      </div>
                    </div>
                    <div style={styles.reviewRating}>★★★★★</div>
                  </div>
                  <p style={styles.reviewTitle}>Absolutely stunning upgrade!</p>
                  <p style={styles.reviewText}>The new camera system is incredible. Photos are sharper and colors are more vibrant. The 120Hz display makes everything feel buttery smooth. Highly recommended!</p>
                  <a href="#" style={styles.loadMoreLink}>Load More Reviews</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'accessories' && (
            <div style={styles.tabSection}>
              <h3 style={styles.accessoriesTitle}>Essential Pairings</h3>
              <div style={styles.accessoriesGrid}>
                <div style={styles.accessoryCard}>
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format" alt="Headphones" style={styles.accessoryImage} />
                  <h4>AirPods Max 2</h4>
                  <p>Spatial audio excellence</p>
                  <p style={styles.accessoryPrice}>From $399</p>
                  <button style={styles.accessoryBtn}>View Details</button>
                </div>

                <div style={styles.accessoryCard}>
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format" alt="Case" style={styles.accessoryImage} />
                  <h4>ToughScreen Case with MagSafe</h4>
                  <p>Military-grade protection</p>
                  <p style={styles.accessoryPrice}>$49</p>
                  <button style={styles.accessoryBtn}>View Details</button>
                </div>

                <div style={styles.accessoryCard}>
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format" alt="Drive" style={styles.accessoryImage} />
                  <h4>Western Digital G-DRIVE ArmorATP Portable Hard Drive</h4>
                  <p>Ultra-durable storage</p>
                  <p style={styles.accessoryPrice}>$249</p>
                  <button style={styles.accessoryBtn}>View Details</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '24px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 40 },
  heroSection: { display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' },
  heroImage: { width: '100%', borderRadius: 20, objectFit: 'cover' },
  productInfo: { paddingTop: 20 },
  badge: { fontSize: 12, color: '#2563EB', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  productTitle: { fontSize: 42, fontWeight: 900, color: '#111827', margin: '12px 0 8px' },
  price: { fontSize: 24, fontWeight: 800, color: '#2563EB', margin: '0 0 12px' },
  description: { fontSize: 15, color: '#475569', lineHeight: 1.8, margin: '0 0 24px' },
  colors: { marginBottom: 24 },
  colorLabel: { fontSize: 13, fontWeight: 700, color: '#111827', margin: '0 0 12px' },
  colorGrid: { display: 'flex', gap: 12 },
  colorOption: { display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 10, background: '#F8FAFF', cursor: 'pointer' },
  colorDot: { width: 16, height: 16, borderRadius: '50%' },
  colorName: { fontSize: 13, fontWeight: 600, color: '#374151' },
  specs: { display: 'flex', gap: 20, marginBottom: 20 },
  specItem: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#111827' },
  rating: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 },
  ratingStars: { fontSize: 14 },
  ratingValue: { fontSize: 13, color: '#6B7280' },
  actions: { display: 'flex', gap: 12 },
  primaryBtn: { flex: 1, background: '#2563EB', color: '#fff', border: 'none', borderRadius: 16, padding: '16px 0', fontWeight: 700, cursor: 'pointer' },
  secondaryBtn: { padding: '16px 20px', background: '#F8FAFF', border: '1.5px solid #E5E7EB', borderRadius: 16, cursor: 'pointer', fontWeight: 700, color: '#2563EB' },
  subNav: { display: 'flex', gap: 0, borderBottom: '1px solid #E5E7EB', marginBottom: 40 },
  subNavItem: { background: 'none', border: 'none', padding: '16px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' },
  content: { marginBottom: 48 },
  tabSection: { display: 'flex', flexDirection: 'column', gap: 40 },
  featureRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' },
  featureTitle: { fontSize: 24, fontWeight: 900, color: '#111827', margin: '0 0 12px' },
  featureDesc: { fontSize: 15, color: '#475569', lineHeight: 1.8, margin: 0 },
  featureImage: { width: '100%', borderRadius: 16, objectFit: 'cover', height: 300 },
  specGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 },
  specCard: { background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #E5E7EB' },
  specCardTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 16px' },
  specList: { fontSize: 13, color: '#475569', lineHeight: 2 },
  infoBox: { background: '#F8FAFF', borderRadius: 20, padding: 24, marginBottom: 24 },
  infoTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '0 0 12px' },
  infoList: { fontSize: 13, color: '#475569', margin: 0, paddingLeft: 20, lineHeight: 2 },
  warrantyBox: { background: '#2563EB', borderRadius: 20, padding: 32, color: '#fff', textAlign: 'center' },
  warrantyIcon: { fontSize: 48, marginBottom: 12 },
  warrantyTitle: { fontSize: 18, fontWeight: 800, margin: '0 0 12px' },
  warrantyDesc: { fontSize: 14, lineHeight: 1.8, margin: '0 0 20px' },
  warrantyBtn: { background: '#fff', color: '#2563EB', border: 'none', borderRadius: 12, padding: '12px 24px', fontWeight: 700, cursor: 'pointer' },
  reviewsHeader: { display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40, marginBottom: 32 },
  ratingBox: { textAlign: 'center' },
  ratingNumber: { fontSize: 48, fontWeight: 900, color: '#111827' },
  ratingBars: { display: 'flex', flexDirection: 'column', gap: 8 },
  ratingBar: { display: 'grid', gridTemplateColumns: '30px 1fr 50px', gap: 12, alignItems: 'center', fontSize: 12 },
  barBg: { height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' },
  barFill: { height: '100%', background: '#2563EB', transition: 'width 0.3s' },
  reviewsWrite: { background: '#F8FAFF', borderRadius: 16, padding: 20, marginBottom: 32 },
  writeBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontWeight: 700, cursor: 'pointer' },
  reviewsList: { display: 'flex', flexDirection: 'column', gap: 20 },
  reviewCard: { background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E5E7EB' },
  reviewHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  reviewerInfo: { display: 'flex', gap: 12 },
  reviewerAvatar: { width: 40, height: 40, borderRadius: '50%', background: '#2563EB', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 },
  reviewerName: { fontSize: 14, fontWeight: 700, color: '#111827', margin: 0 },
  reviewDate: { fontSize: 12, color: '#6B7280', margin: 0 },
  reviewRating: { color: '#F59E0B', fontSize: 14 },
  reviewTitle: { fontSize: 14, fontWeight: 700, color: '#111827', margin: '0 0 8px' },
  reviewText: { fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 },
  loadMoreLink: { fontSize: 12, color: '#2563EB', textDecoration: 'none', fontWeight: 700 },
  accessoriesTitle: { fontSize: 24, fontWeight: 900, color: '#111827', marginBottom: 24 },
  accessoriesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 },
  accessoryCard: { background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #E5E7EB', textAlign: 'center' },
  accessoryImage: { width: '100%', height: 200, objectFit: 'cover', borderRadius: 12, marginBottom: 12 },
  accessoryPrice: { fontSize: 14, fontWeight: 800, color: '#2563EB', margin: '8px 0' },
  accessoryBtn: { width: '100%', background: '#F8FAFF', border: '1px solid #E5E7EB', borderRadius: 10, padding: '10px 0', fontSize: 12, fontWeight: 700, color: '#2563EB', cursor: 'pointer' },
};

export default ProductDetailsPage;
