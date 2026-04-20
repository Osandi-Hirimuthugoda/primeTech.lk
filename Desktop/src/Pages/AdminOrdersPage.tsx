import React, { useState } from 'react';
import { type Page } from '../Types';

interface AdminOrdersPageProps {
  onNavigate: (page: Page) => void;
}

const AdminOrdersPage: React.FC<AdminOrdersPageProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    { id: 'IHT-0421', customer: 'Alex Rivera', date: 'Oct 24, 2024', total: '$1,299.00', status: 'Processing', avatar: 'AR' },
    { id: 'IHT-0420', customer: 'Sarah Kinsley', date: 'Oct 23, 2024', total: '$450.00', status: 'Delivered', avatar: 'SK' },
    { id: 'IHT-0419', customer: 'Jordan Smith', date: 'Oct 22, 2024', total: '$2,840.50', status: 'Shipping', avatar: 'JS' },
    { id: 'IHT-0418', customer: 'Marcus Low', date: 'Oct 22, 2024', total: '$320.00', status: 'Cancelled', avatar: 'ML' },
    { id: 'IHT-0417', customer: 'Elena Luz', date: 'Oct 21, 2024', total: '$5,100.00', status: 'Processing', avatar: 'EL' },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, { bg: string; color: string }> = {
      'Processing': { bg: '#DBEAFE', color: '#0284C7' },
      'Delivered': { bg: '#DCFCE7', color: '#16A34A' },
      'Shipping': { bg: '#FEF3C7', color: '#B45309' },
      'Cancelled': { bg: '#FDE2E4', color: '#991B1B' },
    };
    return colors[status] || { bg: '#E5E7EB', color: '#6B7280' };
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.label}>Commerce Module</p>
            <h1 style={styles.title}>Order Management</h1>
          </div>
          <div style={styles.headerActions}>
            <select style={styles.select}>
              <option>Status: All Orders</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <select style={styles.select}>
              <option>Date: Oct 20 - Oct 27, 2024</option>
            </select>
            <button style={styles.exportBtn}>Export Report</button>
          </div>
        </div>

        <div style={styles.tableWrapper}>
          <div style={styles.tableHeader}>
            <span style={styles.col1}>Order ID</span>
            <span style={styles.col2}>Customer</span>
            <span style={styles.col3}>Date</span>
            <span style={styles.col4}>Total</span>
            <span style={styles.col5}>Status</span>
            <span style={styles.col6}>Actions</span>
          </div>

          {orders.map(order => (
            <div key={order.id} style={styles.tableRow}>
              <span style={{ ...styles.col1, color: '#2563EB', fontWeight: 700 }}>{order.id}</span>
              <div style={styles.col2}>
                <div style={styles.customerInfo}>
                  <div style={styles.avatar}>{order.avatar}</div>
                  <span>{order.customer}</span>
                </div>
              </div>
              <span style={styles.col3}>{order.date}</span>
              <span style={styles.col4}>{order.total}</span>
              <div style={styles.col5}>
                <div style={{ ...styles.statusBadge, background: getStatusColor(order.status).bg, color: getStatusColor(order.status).color }}>
                  {order.status}
                </div>
              </div>
              <button style={styles.col6}>⋮</button>
            </div>
          ))}
        </div>

        <div style={styles.pagination}>
          <span>Showing 1-10 of 154 orders</span>
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

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <p style={styles.statLabel}>Total Revenue</p>
            <h3 style={styles.statValue}>$142,500</h3>
          </div>
          <div style={styles.statCard}>
            <p style={styles.statLabel}>Pending Orders</p>
            <h3 style={styles.statValue}>24</h3>
          </div>
          <div style={styles.statCard}>
            <p style={styles.statLabel}>Avg Ticket</p>
            <h3 style={styles.statValue}>$540</h3>
          </div>
          <div style={styles.statCard}>
            <p style={styles.statLabel}>Conversion Rate</p>
            <h3 style={styles.statValue}>4.2%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '24px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 32 },
  label: { fontSize: 11, color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 },
  title: { fontSize: 32, fontWeight: 900, color: '#111827', margin: '8px 0 0' },
  headerActions: { display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' },
  select: { padding: '10px 12px', borderRadius: 10, border: '1.5px solid #E5E7EB', fontSize: 13, fontWeight: 600, cursor: 'pointer', background: '#fff' },
  exportBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, cursor: 'pointer', fontSize: 13 },
  tableWrapper: { background: '#fff', borderRadius: 20, border: '1px solid #E5E7EB', overflow: 'hidden', marginBottom: 24 },
  tableHeader: { display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr 1fr 1.2fr 0.5fr', gap: 16, padding: '16px 20px', background: '#F8FAFC', borderBottom: '1px solid #E5E7EB', fontWeight: 700, fontSize: 12, color: '#6B7280', textTransform: 'uppercase' },
  tableRow: { display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr 1fr 1.2fr 0.5fr', gap: 16, padding: '16px 20px', borderBottom: '1px solid #E5E7EB', alignItems: 'center' },
  col1: {},
  col2: {},
  col3: {},
  col4: {},
  col5: {},
  col6: { background: 'none', border: 'none', fontSize: 18, cursor: 'pointer' },
  customerInfo: { display: 'flex', gap: 8, alignItems: 'center' },
  avatar: { width: 32, height: 32, borderRadius: '50%', background: '#2563EB', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 },
  statusBadge: { display: 'inline-block', padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, textAlign: 'center' },
  pagination: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', fontSize: 13, color: '#6B7280' },
  pageButtons: { display: 'flex', gap: 8 },
  pageBtn: { width: 32, height: 32, borderRadius: 8, border: '1px solid #E5E7EB', cursor: 'pointer', fontWeight: 600 },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  statCard: { background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #E5E7EB', textAlign: 'center' },
  statLabel: { fontSize: 11, color: '#6B7280', fontWeight: 700, margin: 0 },
  statValue: { fontSize: 24, fontWeight: 900, color: '#111827', margin: '8px 0 0' },
};

export default AdminOrdersPage;
