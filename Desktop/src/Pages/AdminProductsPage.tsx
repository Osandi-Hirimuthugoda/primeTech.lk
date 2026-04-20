import React, { useState } from 'react';
import { type Page } from '../Types';

interface AdminProductsPageProps {
  onNavigate: (page: Page) => void;
}

const AdminProductsPage: React.FC<AdminProductsPageProps> = () => {
  const [activeFilter, setActiveFilter] = useState('All Items (1,240)');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    'All Items (1,240)',
    'Active (1,902)',
    'Out of Stock (12)',
    'Archived (128)',
  ];

  const products = [
    { id: 1, name: 'iPhone 17 Pro Max', sku: 'SKU-220-TI', category: 'Smartphones', price: '$1,199.00', stock: 30, status: 'Active' },
    { id: 2, name: 'Haurora Oneudo X', sku: 'SKU-012-SL', category: 'Wearables', price: '$899.00', stock: 0, status: 'Active' },
    { id: 3, name: 'Ultra Tab Pro', sku: 'UTP-12-128', category: 'Tablets', price: '$899.00', stock: 0, status: 'Active' },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.label}>Inventory & Logistics</p>
            <h1 style={styles.title}>Product Catalog</h1>
          </div>
          <button style={styles.addBtn}>+ Add New Product</button>
        </div>

        <div style={styles.filterRow}>
          {filters.map(filter => (
            <button
              key={filter}
              style={{
                ...styles.filterBtn,
                background: activeFilter === filter ? '#2563EB' : '#fff',
                color: activeFilter === filter ? '#fff' : '#374151',
                borderColor: activeFilter === filter ? '#2563EB' : '#E5E7EB',
              }}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div style={styles.tableWrapper}>
          <div style={styles.tableHeader}>
            <span style={styles.col1}>Product Details</span>
            <span style={styles.col2}>Category</span>
            <span style={styles.col3}>Price</span>
            <span style={styles.col4}>Stock Level</span>
            <span style={styles.col5}>Status</span>
            <span style={styles.col6}>Actions</span>
          </div>

          {products.map(product => (
            <div key={product.id} style={styles.tableRow}>
              <div style={styles.col1}>
                <div style={styles.productInfo}>
                  <div style={styles.productImage}>🛍️</div>
                  <div>
                    <p style={styles.productName}>{product.name}</p>
                    <p style={styles.productSku}>{product.sku}</p>
                  </div>
                </div>
              </div>
              <span style={styles.col2}>{product.category}</span>
              <span style={styles.col3}>{product.price}</span>
              <div style={styles.col4}>
                <div style={styles.stockBar}>
                  <div style={{ ...styles.stockFill, width: `${(product.stock / 100) * 100}%` }} />
                </div>
                <span>{product.stock}%</span>
              </div>
              <span style={styles.col5}>
                <div style={styles.statusBadge}>{product.status}</div>
              </span>
              <div style={styles.col6}>
                <button style={styles.actionBtn}>✏️</button>
                <button style={styles.actionBtn}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.pagination}>
          <span>Showing 1-10 of 1,240 results</span>
          <div style={styles.pageButtons}>
            {[1, 2, 3, 4].map(n => (
              <button
                key={n}
                style={{
                  ...styles.pageBtn,
                  background: currentPage === n ? '#2563EB' : '#fff',
                  color: currentPage === n ? '#fff' : '#374151',
                }}
                onClick={() => setCurrentPage(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.insightsGrid}>
          <div style={styles.insightCard}>
            <p style={styles.insightIcon}>📊</p>
            <h4 style={styles.insightTitle}>Demand Forecasting</h4>
            <p style={styles.insightText}>Based on current velocity, iPhone 17 Pro Max stock are expected to deplete in 14 days. Consider initiating a reorder catch for 500 units.</p>
          </div>

          <div style={styles.insightCard}>
            <p style={styles.insightIcon}>🎯</p>
            <h4 style={styles.insightTitle}>Curator's Campaign</h4>
            <p style={styles.insightText}>The "Haurora Chrome X" is currently featured in the Luxe Collection drop. Traffic to this product page is up by +75% this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '24px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  label: { fontSize: 11, color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  title: { fontSize: 32, fontWeight: 900, color: '#111827', margin: '8px 0 0' },
  addBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontWeight: 700, cursor: 'pointer', fontSize: 14 },
  filterRow: { display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' },
  filterBtn: { padding: '10px 16px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 12, cursor: 'pointer', fontWeight: 600, fontSize: 13 },
  tableWrapper: { background: '#fff', borderRadius: 20, border: '1px solid #E5E7EB', overflow: 'hidden', marginBottom: 24 },
  tableHeader: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.8fr 0.6fr', gap: 16, padding: '16px 20px', background: '#F8FAFC', borderBottom: '1px solid #E5E7EB', fontWeight: 700, fontSize: 12, color: '#6B7280', textTransform: 'uppercase' },
  tableRow: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.8fr 0.6fr', gap: 16, padding: '16px 20px', borderBottom: '1px solid #E5E7EB', alignItems: 'center' },
  col1: { gridColumn: '1 / 2' },
  col2: { gridColumn: '2 / 3' },
  col3: { gridColumn: '3 / 4' },
  col4: { gridColumn: '4 / 5' },
  col5: { gridColumn: '5 / 6' },
  col6: { gridColumn: '6 / 7', display: 'flex', gap: 8 },
  productInfo: { display: 'flex', gap: 12, alignItems: 'center' },
  productImage: { width: 40, height: 40, borderRadius: 8, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 },
  productName: { fontSize: 13, fontWeight: 700, color: '#111827', margin: 0 },
  productSku: { fontSize: 11, color: '#9CA3AF', margin: '4px 0 0' },
  stockBar: { height: 6, background: '#E5E7EB', borderRadius: 3, overflow: 'hidden', marginBottom: 4 },
  stockFill: { height: '100%', background: '#2563EB', transition: 'width 0.3s' },
  statusBadge: { padding: '6px 12px', background: '#DBEAFE', color: '#0284C7', borderRadius: 8, fontSize: 12, fontWeight: 600 },
  actionBtn: { width: 28, height: 28, borderRadius: 6, background: '#F3F4F6', border: 'none', cursor: 'pointer', fontSize: 14 },
  pagination: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', fontSize: 13, color: '#6B7280' },
  pageButtons: { display: 'flex', gap: 8 },
  pageBtn: { width: 32, height: 32, borderRadius: 8, border: '1px solid #E5E7EB', cursor: 'pointer', fontWeight: 600 },
  insightsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  insightCard: { background: '#F0F9FF', borderRadius: 16, padding: 24, border: '1px solid #E0F2FE' },
  insightIcon: { fontSize: 24, margin: 0 },
  insightTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '12px 0 8px' },
  insightText: { fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 },
};

export default AdminProductsPage;
