import React, { useState } from 'react';
import { type Page } from '../Types';

interface AdminCustomersPageProps {
  onNavigate: (page: Page) => void;
}

const AdminCustomersPage: React.FC<AdminCustomersPageProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const kpis = [
    { label: 'Total Customers', value: '12,842', change: '+2.2%' },
    { label: 'Active Customers', value: '8,103', status: 'Healthy' },
    { label: 'New This Month', value: '428', change: '+12%' },
  ];

  const customers = [
    { id: 1, name: 'Alex Rivera', email: 'alex.rivers@design.co', orders: 42, spend: '$15,450.00', status: 'Active', avatar: 'AR' },
    { id: 2, name: 'Elena Vargas', email: 'e-vargas@entity.io', orders: 19, spend: '$4,820.00', status: 'Inactive', avatar: 'EV' },
    { id: 3, name: 'Jordan Smith', email: 'jordan.smith@vantage.com', orders: 89, spend: '$32,100.00', status: 'Active', avatar: 'JS' },
    { id: 4, name: 'Sarah Colson', email: 'sarah.c@existence.org', orders: 3, spend: '$1,120.00', status: 'Active', avatar: 'SC' },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.label}>Haurora Management</p>
            <h1 style={styles.title}>Customer Database</h1>
          </div>
          <div style={styles.headerActions}>
            <button style={styles.filterBtn}>🔍 Filter</button>
            <button style={styles.exportBtn}>📥 Export</button>
          </div>
        </div>

        <div style={styles.kpiGrid}>
          {kpis.map((kpi, idx) => (
            <div key={idx} style={styles.kpiCard}>
              <p style={styles.kpiLabel}>{kpi.label}</p>
              <h3 style={styles.kpiValue}>{kpi.value}</h3>
              <p style={styles.kpiChange}>{kpi.change || kpi.status}</p>
            </div>
          ))}
        </div>

        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Detailed Directory</h2>
        </div>

        <div style={styles.tableWrapper}>
          <div style={styles.tableHeader}>
            <span style={styles.col1}>Name</span>
            <span style={styles.col2}>Email</span>
            <span style={styles.col3}>Orders</span>
            <span style={styles.col4}>Total Spend</span>
            <span style={styles.col5}>Status</span>
            <span style={styles.col6}>Actions</span>
          </div>

          {customers.map(customer => (
            <div key={customer.id} style={styles.tableRow}>
              <div style={styles.col1}>
                <div style={styles.customerName}>
                  <div style={styles.avatar}>{customer.avatar}</div>
                  <div>
                    <p style={styles.name}>{customer.name}</p>
                    <p style={styles.detail}>{customer.avatar.toUpperCase()}</p>
                  </div>
                </div>
              </div>
              <span style={styles.col2}>{customer.email}</span>
              <span style={styles.col3}>{customer.orders}</span>
              <span style={styles.col4}>{customer.spend}</span>
              <div style={styles.col5}>
                <div style={{ ...styles.statusBadge, background: customer.status === 'Active' ? '#DCFCE7' : '#F3F4F6', color: customer.status === 'Active' ? '#16A34A' : '#6B7280' }}>
                  {customer.status}
                </div>
              </div>
              <button style={styles.col6}>⋮</button>
            </div>
          ))}
        </div>

        <div style={styles.pagination}>
          <span>Showing 1-10 of 2,842</span>
          <div style={styles.pageButtons}>
            {[1, 2, 3, 128].map(n => (
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
            <p style={styles.insightIcon}>📈</p>
            <h4 style={styles.insightTitle}>Retention Insight</h4>
            <p style={styles.insightText}>Customers who have more than 3 orders have a 84% retention rate for the upcoming quarter.</p>
          </div>

          <div style={styles.insightCard}>
            <p style={styles.insightIcon}>⚠️</p>
            <h4 style={styles.insightTitle}>VIP Alert</h4>
            <p style={styles.insightText}>20 high-value customers crossed the $5K lifetime spend threshold and have been tagged for VIP outreach.</p>
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
  headerActions: { display: 'flex', gap: 12 },
  filterBtn: { padding: '10px 16px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 10, fontWeight: 600, cursor: 'pointer', fontSize: 13 },
  exportBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 13 },
  kpiGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 },
  kpiCard: { background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E5E7EB' },
  kpiLabel: { fontSize: 11, color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  kpiValue: { fontSize: 28, fontWeight: 900, color: '#111827', margin: '8px 0 4px' },
  kpiChange: { fontSize: 13, color: '#10B981', fontWeight: 700, margin: 0 },
  sectionHeader: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 },
  tableWrapper: { background: '#fff', borderRadius: 20, border: '1px solid #E5E7EB', overflow: 'hidden', marginBottom: 24 },
  tableHeader: { display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1.2fr 1fr 0.5fr', gap: 12, padding: '16px 20px', background: '#F8FAFC', borderBottom: '1px solid #E5E7EB', fontWeight: 700, fontSize: 12, color: '#6B7280', textTransform: 'uppercase' },
  tableRow: { display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 1.2fr 1fr 0.5fr', gap: 12, padding: '16px 20px', borderBottom: '1px solid #E5E7EB', alignItems: 'center' },
  col1: {},
  col2: { fontSize: 13, color: '#374151' },
  col3: { fontSize: 13, color: '#374151' },
  col4: { fontSize: 13, fontWeight: 600, color: '#111827' },
  col5: {},
  col6: { background: 'none', border: 'none', fontSize: 18, cursor: 'pointer' },
  customerName: { display: 'flex', gap: 12, alignItems: 'center' },
  avatar: { width: 32, height: 32, borderRadius: '50%', background: '#2563EB', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 },
  name: { fontSize: 13, fontWeight: 700, color: '#111827', margin: 0 },
  detail: { fontSize: 11, color: '#9CA3AF', margin: '2px 0 0' },
  statusBadge: { display: 'inline-block', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600 },
  pagination: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', fontSize: 13, color: '#6B7280' },
  pageButtons: { display: 'flex', gap: 8 },
  pageBtn: { width: 32, height: 32, borderRadius: 8, border: '1px solid #E5E7EB', cursor: 'pointer', fontWeight: 600 },
  insightsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  insightCard: { background: '#F0F9FF', borderRadius: 16, padding: 24, border: '1px solid #E0F2FE' },
  insightIcon: { fontSize: 24, margin: 0 },
  insightTitle: { fontSize: 16, fontWeight: 800, color: '#111827', margin: '12px 0 8px' },
  insightText: { fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 },
};

export default AdminCustomersPage;
