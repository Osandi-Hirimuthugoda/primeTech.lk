import React, { useState } from 'react';
import { type Page } from '../Types';

interface AdminWarrantyPageProps {
  onNavigate: (page: Page) => void;
}

const AdminWarrantyPage: React.FC<AdminWarrantyPageProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const kpis = [
    { label: 'Total Claims', value: '1,284', change: '+12% this month' },
    { label: 'Pending', value: '42', status: 'Pending review' },
    { label: 'Approved', value: '892', status: 'Resolution in progress' },
    { label: 'Rejected', value: '350', status: 'Out of policy scope' },
  ];

  const claims = [
    { id: 'HARA-9923', product: 'iPhone 17 Pro Max', customer: 'Sarah Jenkins', date: 'Oct 24, 2023', status: 'Pending Review' },
    { id: 'HARA-9918', product: 'Haurora Watch X', customer: 'Marcus Thorne', date: 'Oct 23, 2023', status: 'Approved' },
    { id: 'HARA-9914', product: 'Haurora Book Pro 16"', customer: 'Elena Rodriguez', date: 'Oct 22, 2023', status: 'Rejected' },
    { id: 'HARA-9876', product: 'Haurora Pods Elite', customer: 'David Kim', date: 'Oct 21, 2023', status: 'Pending Review' },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, { bg: string; color: string }> = {
      'Pending Review': { bg: '#FEF3C7', color: '#B45309' },
      'Approved': { bg: '#DCFCE7', color: '#16A34A' },
      'Rejected': { bg: '#FDE2E4', color: '#991B1B' },
    };
    return colors[status] || { bg: '#E5E7EB', color: '#6B7280' };
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.label}>Quality Assurance</p>
            <h1 style={styles.title}>Warranty Claims <span style={styles.titleHighlight}>Management</span></h1>
          </div>
          <button style={styles.exportBtn}>📥 Export Data</button>
        </div>

        <div style={styles.kpiGrid}>
          {kpis.map((kpi, idx) => (
            <div key={idx} style={styles.kpiCard}>
              <p style={styles.kpiLabel}>{kpi.label}</p>
              <h3 style={styles.kpiValue}>{kpi.value}</h3>
              <p style={styles.kpiStatus}>{kpi.change || kpi.status}</p>
              {kpi.label === 'Total Claims' && <div style={styles.kpiBorder} />}
            </div>
          ))}
        </div>

        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Recent Submissions</h3>
          <div style={styles.badge}>Live Updates</div>
        </div>

        <div style={styles.filterActions}>
          <button style={styles.filterBtn}>🔍 Filter</button>
          <button style={styles.exportBtn}>📥 Export Data</button>
        </div>

        <div style={styles.tableWrapper}>
          <div style={styles.tableHeader}>
            <span style={styles.col1}>CLAIM ID</span>
            <span style={styles.col2}>PRODUCT NAME</span>
            <span style={styles.col3}>CUSTOMER</span>
            <span style={styles.col4}>DATE SUBMITTED</span>
            <span style={styles.col5}>STATUS</span>
            <span style={styles.col6}>ACTIONS</span>
          </div>

          {claims.map(claim => (
            <div key={claim.id} style={styles.tableRow}>
              <span style={{ ...styles.col1, color: '#2563EB', fontWeight: 700 }}>{claim.id}</span>
              <div style={styles.col2}>
                <div style={styles.productInfo}>
                  <div style={styles.productImage}>🛍️</div>
                  <span>{claim.product}</span>
                </div>
              </div>
              <span style={styles.col3}>{claim.customer}</span>
              <span style={styles.col4}>{claim.date}</span>
              <div style={styles.col5}>
                <div style={{ ...styles.statusBadge, background: getStatusColor(claim.status).bg, color: getStatusColor(claim.status).color }}>
                  {claim.status}
                </div>
              </div>
              <button style={styles.col6}>⋮</button>
            </div>
          ))}
        </div>

        <div style={styles.pagination}>
          <span>Showing 1-10 of 1,284 results</span>
          <div style={styles.pageButtons}>
            {[1, 2, 3].map(n => (
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
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '24px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  label: { fontSize: 11, color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  title: { fontSize: 32, fontWeight: 900, color: '#111827', margin: '8px 0 0' },
  titleHighlight: { color: '#2563EB' },
  exportBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 13 },
  kpiGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 },
  kpiCard: { background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #E5E7EB', position: 'relative' },
  kpiLabel: { fontSize: 11, color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  kpiValue: { fontSize: 24, fontWeight: 900, color: '#111827', margin: '8px 0 4px' },
  kpiStatus: { fontSize: 12, color: '#6B7280', margin: 0 },
  kpiBorder: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#FF6B6B', borderRadius: '16px 0 0 16px' },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 },
  badge: { background: '#2563EB', color: '#fff', padding: '6px 12px', borderRadius: 6, fontSize: 11, fontWeight: 700 },
  filterActions: { display: 'flex', gap: 12, marginBottom: 20 },
  filterBtn: { padding: '10px 16px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 10, fontWeight: 600, cursor: 'pointer', fontSize: 13 },
  tableWrapper: { background: '#fff', borderRadius: 20, border: '1px solid #E5E7EB', overflow: 'hidden', marginBottom: 24 },
  tableHeader: { display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.2fr 1.2fr 1.2fr 0.5fr', gap: 12, padding: '16px 20px', background: '#F8FAFC', borderBottom: '1px solid #E5E7EB', fontWeight: 700, fontSize: 12, color: '#6B7280', textTransform: 'uppercase' },
  tableRow: { display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.2fr 1.2fr 1.2fr 0.5fr', gap: 12, padding: '16px 20px', borderBottom: '1px solid #E5E7EB', alignItems: 'center' },
  col1: {},
  col2: {},
  col3: { fontSize: 13, color: '#374151' },
  col4: { fontSize: 13, color: '#374151' },
  col5: {},
  col6: { background: 'none', border: 'none', fontSize: 18, cursor: 'pointer' },
  productInfo: { display: 'flex', gap: 8, alignItems: 'center' },
  productImage: { fontSize: 16 },
  statusBadge: { display: 'inline-block', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600 },
  pagination: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', fontSize: 13, color: '#6B7280' },
  pageButtons: { display: 'flex', gap: 8 },
  pageBtn: { width: 32, height: 32, borderRadius: 8, border: '1px solid #E5E7EB', cursor: 'pointer', fontWeight: 600 },
};

export default AdminWarrantyPage;
