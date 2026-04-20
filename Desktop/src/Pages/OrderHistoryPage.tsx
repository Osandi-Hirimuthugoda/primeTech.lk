import React from 'react';
import { type Page } from '../Types';

interface OrderHistoryPageProps {
  onNavigate: (page: Page) => void;
}

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = () => {
  const orders = [
    { id: '1', name: 'Ultra Pro Workstation X7', price: '$2,499.00', status: 'Delivered', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop&auto=format' },
    { id: '2', name: 'Sonic Core Wireless Q2', price: '$349.00', status: 'Delivered', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&auto=format' },
    { id: '3', name: 'Aura Sync Smartwatch', price: '$899.00', status: 'Pending', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&auto=format' },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>Account Activity</p>
          <h1 style={styles.title}>Order History</h1>
          <p style={styles.subtitle}>Track, manage, and review your past purchases and shipment statuses.</p>
          <div style={styles.filterBtns}>
            <button style={{ ...styles.filterBtn, background: '#2563EB', color: '#fff' }}>All Orders</button>
            <button style={styles.filterBtn}>In Progress</button>
            <button style={styles.filterBtn}>Delivered</button>
            <button style={styles.filterBtn}>Cancelled</button>
            <button style={styles.downloadBtn}>Download Invoice</button>
          </div>
        </div>

        <div style={styles.ordersList}>
          {orders.map(order => (
            <div key={order.id} style={styles.orderCard}>
              <img src={order.image} alt={order.name} style={styles.orderImage} />
              <div style={styles.orderInfo}>
                <h3 style={styles.orderName}>{order.name}</h3>
                <p style={styles.orderMeta}>Order #{order.id} • Placed 2 weeks ago</p>
                <div style={styles.orderStatus}>
                  <span style={{ ...styles.statusBadge, background: order.status === 'Delivered' ? '#E0F2FE' : '#FEF3C7', color: order.status === 'Delivered' ? '#0284C7' : '#92400E' }}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div style={styles.orderPrice}>{order.price}</div>
              <div style={styles.orderActions}>
                <button style={styles.actionBtn}>Track Order</button>
                <button style={styles.actionBtn}>View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.pagination}>
          <button style={styles.pageBtn}>Load More Purchases</button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F8FAFC', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 32 },
  label: { fontSize: 12, color: '#2563EB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: '12px 0 8px' },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 680, lineHeight: 1.8, margin: 0 },
  filterBtns: { display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' },
  filterBtn: { padding: '12px 18px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: 14, cursor: 'pointer', fontWeight: 600, fontSize: 14, color: '#374151' },
  downloadBtn: { padding: '12px 18px', background: 'none', border: '1.5px solid #E5E7EB', borderRadius: 14, cursor: 'pointer', fontWeight: 600, fontSize: 14, color: '#374151', marginLeft: 'auto' },
  ordersList: { display: 'flex', flexDirection: 'column', gap: 16 },
  orderCard: { background: '#fff', borderRadius: 20, padding: 20, border: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: '100px 1fr auto auto', gap: 24, alignItems: 'center' },
  orderImage: { width: 100, height: 100, objectFit: 'cover', borderRadius: 16 },
  orderInfo: {},
  orderName: { fontSize: 16, fontWeight: 800, color: '#111827', margin: 0 },
  orderMeta: { fontSize: 13, color: '#6B7280', margin: '4px 0 0' },
  orderStatus: { marginTop: 8 },
  statusBadge: { padding: '6px 12px', borderRadius: 10, fontSize: 12, fontWeight: 700 },
  orderPrice: { fontSize: 18, fontWeight: 900, color: '#2563EB' },
  orderActions: { display: 'flex', flexDirection: 'column', gap: 8 },
  actionBtn: { padding: '8px 14px', background: '#F8FAFF', border: '1px solid #E5E7EB', borderRadius: 10, cursor: 'pointer', fontSize: 12, fontWeight: 700, color: '#2563EB' },
  pagination: { display: 'flex', justifyContent: 'center', marginTop: 32 },
  pageBtn: { padding: '14px 32px', background: 'none', border: '1.5px solid #E5E7EB', borderRadius: 16, cursor: 'pointer', fontSize: 14, fontWeight: 700, color: '#374151' },
};

export default OrderHistoryPage;
