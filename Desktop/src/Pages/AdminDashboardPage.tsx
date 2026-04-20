import React from 'react';
import { type Page } from '../Types';

interface AdminDashboardPageProps {
  onNavigate: (page: Page) => void;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = () => {
  const timeRange = 'Monthly';

  const kpis = [
    { label: 'REVENUE', value: '$1,248,300', change: '+10%', icon: '📊' },
    { label: 'ORDERS', value: '12,492', change: '+4.4%', icon: '📦' },
    { label: 'NEW CUSTOMERS', value: '1,205', change: '+8%', icon: '👥' },
    { label: 'GROWTH RATE', value: '+15.2%', status: 'Steady', icon: '📈' },
  ];

  const recentActivities = [
    { type: 'order', title: 'New order from Alex Rivera', time: '1 minute ago', icon: '📦' },
    { type: 'alert', title: 'Stock critical for Zenith X1 Headphones', time: '5 minutes ago', icon: '⚠️' },
    { type: 'vendor', title: 'New vendor account Quantum Distribution verified', time: '12 minutes ago', icon: '✓' },
    { type: 'support', title: 'Support ticket 44820 resolved by Emma S.', time: '2 hours ago', icon: '🎫' },
  ];

  const topProducts = [
    { name: 'Zenith X1', units: '4,208', revenue: '$542k', trend: '+12%' },
    { name: 'Haurora S3', units: '3,115', revenue: '$280k', trend: '+8%' },
    { name: 'Apex Pro 16', units: '2,840', revenue: '$812k', trend: '+0%' },
  ];

  const performanceData = [
    { category: 'Smartphones', percentage: 42 },
    { category: 'Laptops', percentage: 28 },
    { category: 'Audio Tech', percentage: 18 },
    { category: 'Wearables', percentage: 12 },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Prime Tech Dashboard</h1>
          <button style={styles.timeRangeBtn}>{timeRange}</button>
        </div>

        {/* KPI Cards */}
        <div style={styles.kpiGrid}>
          {kpis.map((kpi, idx) => (
            <div key={idx} style={styles.kpiCard}>
              <div style={styles.kpiIcon}>{kpi.icon}</div>
              <p style={styles.kpiLabel}>{kpi.label}</p>
              <h3 style={styles.kpiValue}>{kpi.value}</h3>
              <p style={styles.kpiChange}>{kpi.change || kpi.status}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div style={styles.chartsGrid}>
          {/* Sales Overview */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>Sales Overview</h3>
              <p style={styles.cardSubtitle}>Revenue trajectory for the last 12 months</p>
              <div style={styles.chartTabs}>
                <button style={{ ...styles.tabBtn, background: '#2563EB', color: '#fff' }}>Monthly</button>
                <button style={styles.tabBtn}>Weekly</button>
              </div>
            </div>
            <div style={styles.chart}>
              {[65, 80, 75, 90, 95, 70, 85, 90, 78, 88, 92, 75].map((height, i) => (
                <div key={i} style={{ ...styles.bar, height: `${height}px`, background: i === 5 ? '#2563EB' : '#BFDBFE' }} />
              ))}
            </div>
          </div>

          {/* Performance */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Performance</h3>
            <p style={styles.cardSubtitle}>Sales by category segment</p>
            <div style={styles.performanceList}>
              {performanceData.map((item, idx) => (
                <div key={idx} style={styles.performanceItem}>
                  <div style={styles.performanceLabel}>
                    <span>{item.category}</span>
                    <span style={styles.performancePercent}>{item.percentage}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressFill, width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
              <div style={styles.insight}>
                <span>💡</span>
                <p>Insight: Smartphone segment grew 5% more than last week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div style={styles.bottomGrid}>
          {/* Recent Activity */}
          <div style={styles.card}>
            <div style={{ ...styles.cardHeader, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={styles.cardTitle}>Recent Activity</h3>
              <a href="#" style={styles.viewAllLink}>View All</a>
            </div>
            <div style={styles.activityList}>
              {recentActivities.map((activity, idx) => (
                <div key={idx} style={styles.activityItem}>
                  <div style={styles.activityIcon}>{activity.icon}</div>
                  <div style={styles.activityContent}>
                    <p style={styles.activityTitle}>{activity.title}</p>
                    <p style={styles.activityTime}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div style={styles.card}>
            <div style={{ ...styles.cardHeader, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={styles.cardTitle}>Top Products</h3>
              <button style={styles.filterBtn}>⚙️</button>
            </div>
            <div style={styles.productTable}>
              <div style={styles.tableHeader}>
                <span>PRODUCT</span>
                <span>UNITS SOLD</span>
                <span>REVENUE</span>
                <span>TREND</span>
              </div>
              {topProducts.map((product, idx) => (
                <div key={idx} style={styles.tableRow}>
                  <div style={styles.productName}>
                    <div style={styles.productAvatar}>🛍️</div>
                    <span>{product.name}</span>
                  </div>
                  <span>{product.units}</span>
                  <span>{product.revenue}</span>
                  <span style={styles.trendPositive}>{product.trend}</span>
                </div>
              ))}
            </div>
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
  title: { fontSize: 32, fontWeight: 900, color: '#111827', margin: 0 },
  timeRangeBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', cursor: 'pointer', fontWeight: 600, fontSize: 13 },
  kpiGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 },
  kpiCard: { background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E5E7EB', textAlign: 'center' },
  kpiIcon: { fontSize: 32, marginBottom: 12 },
  kpiLabel: { fontSize: 11, color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px' },
  kpiValue: { fontSize: 28, fontWeight: 900, color: '#111827', margin: '0 0 4px' },
  kpiChange: { fontSize: 13, color: '#10B981', fontWeight: 700, margin: 0 },
  chartsGrid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, marginBottom: 24 },
  card: { background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #E5E7EB' },
  cardHeader: { display: 'flex', flexDirection: 'column', marginBottom: 20 },
  cardTitle: { fontSize: 18, fontWeight: 800, color: '#111827', margin: '0 0 4px' },
  cardSubtitle: { fontSize: 13, color: '#6B7280', margin: '0 0 16px' },
  chartTabs: { display: 'flex', gap: 8 },
  tabBtn: { padding: '8px 14px', background: '#F3F4F6', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#6B7280' },
  chart: { display: 'flex', alignItems: 'flex-end', gap: 8, height: 200, marginTop: 20 },
  bar: { flex: 1, borderRadius: 6, cursor: 'pointer', transition: 'background 0.2s' },
  performanceList: { display: 'flex', flexDirection: 'column', gap: 16 },
  performanceItem: { display: 'flex', flexDirection: 'column', gap: 6 },
  performanceLabel: { display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: '#374151' },
  performancePercent: { color: '#2563EB', fontWeight: 700 },
  progressBar: { height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', background: '#2563EB', transition: 'width 0.3s' },
  insight: { display: 'flex', gap: 8, padding: 12, background: '#F0F9FF', borderRadius: 10, marginTop: 8 },
  bottomGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  viewAllLink: { fontSize: 12, color: '#2563EB', textDecoration: 'none', fontWeight: 700 },
  filterBtn: { background: 'none', border: 'none', fontSize: 16, cursor: 'pointer' },
  activityList: { display: 'flex', flexDirection: 'column', gap: 16 },
  activityItem: { display: 'flex', gap: 12, padding: 12, borderRadius: 12, background: '#F8FAFC' },
  activityIcon: { fontSize: 20, flexShrink: 0 },
  activityContent: {},
  activityTitle: { fontSize: 13, fontWeight: 600, color: '#111827', margin: '0 0 4px' },
  activityTime: { fontSize: 12, color: '#9CA3AF', margin: 0 },
  productTable: { display: 'flex', flexDirection: 'column', gap: 0 },
  tableHeader: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr', gap: 12, padding: 12, background: '#F3F4F6', borderRadius: 8, fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase' },
  tableRow: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr', gap: 12, padding: 12, borderBottom: '1px solid #E5E7EB', alignItems: 'center', fontSize: 13, color: '#374151' },
  productName: { display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: '#111827' },
  productAvatar: { width: 32, height: 32, borderRadius: 6, background: '#F0F4F8', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  trendPositive: { color: '#2563EB', fontWeight: 700 },
};

export default AdminDashboardPage;
