import React, { useState } from 'react';
import { collectionPhones } from '../Data/mockData';
import { type Page, type Product } from '../Types';

interface CartPageProps {
  onNavigate: (page: Page) => void;
}

const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const [items, setItems] = useState<Product[]>([collectionPhones[3], collectionPhones[0]]);
  const [promo, setPromo] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = items.length ? 0 : 0;
  const tax = Math.round(subtotal * 0.06);
  const total = subtotal + shipping + tax;

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.topLabel}>Your Selection</p>
            <h1 style={styles.title}>Shopping Cart</h1>
            <p style={styles.subtitle}>Review your order and complete checkout with confidence.</p>
          </div>
        </div>

        <div style={styles.grid}> 
          <div style={styles.cartList}>
            {items.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.cartImage} />
                <div style={styles.cartInfo}>
                  <div style={styles.cartTitle}>{item.name}</div>
                  <div style={styles.cartMeta}>{item.brand} • {item.storage?.[0] ?? '256GB'}</div>
                </div>
                <div style={styles.cartPrice}>${item.price.toLocaleString()}</div>
                <button style={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}

            <div style={styles.promoCard}>
              <h3 style={styles.promoTitle}>Promotional Code</h3>
              <div style={styles.promoForm}>
                <input
                  value={promo}
                  onChange={e => setPromo(e.target.value)}
                  placeholder="Enter code"
                  style={styles.promoInput}
                />
                <button style={styles.promoBtn}>Apply</button>
              </div>
            </div>
          </div>

          <div style={styles.orderCard}>
            <div style={styles.summaryHeader}>
              <span style={styles.summaryLabel}>Order Summary</span>
              <span style={styles.summaryTotal}>${total.toLocaleString()}</span>
            </div>
            <div style={styles.summaryRow}><span>Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
            <div style={styles.summaryRow}><span>Shipping</span><span>FREE</span></div>
            <div style={styles.summaryRow}><span>Estimated Tax</span><span>${tax.toLocaleString()}</span></div>
            <div style={styles.summaryDivider} />
            <div style={styles.summaryRow}><strong>Total</strong><strong>${total.toLocaleString()}</strong></div>
            <button style={styles.checkoutBtn}>Checkout →</button>
            <div style={styles.quickNote}>
              <p style={styles.noteLabel}>The Curator’s Pick</p>
              <p style={styles.noteBody}>Add a PrimeTech Pro Case to protect your new purchase for only $49.</p>
              <button style={styles.noteBtn} onClick={() => onNavigate('warranty')}>Add for $49</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F3F6FB', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { marginBottom: 32 },
  topLabel: { color: '#2563EB', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 10 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: 0 },
  subtitle: { fontSize: 16, color: '#475569', marginTop: 12, lineHeight: 1.8 },
  grid: { display: 'grid', gridTemplateColumns: '1.45fr 0.85fr', gap: 24, alignItems: 'start' },
  cartList: { display: 'flex', flexDirection: 'column', gap: 18 },
  cartItem: { display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 16, alignItems: 'center', padding: 18, borderRadius: 24, background: '#fff', border: '1px solid #E5E7EB' },
  cartImage: { width: 100, height: 100, objectFit: 'cover', borderRadius: 18 },
  cartInfo: { display: 'flex', flexDirection: 'column', gap: 4 },
  cartTitle: { fontSize: 15, fontWeight: 800, color: '#111827' },
  cartMeta: { fontSize: 13, color: '#6B7280' },
  cartPrice: { fontSize: 15, fontWeight: 800, color: '#111827' },
  removeBtn: { background: 'none', border: 'none', color: '#2563EB', cursor: 'pointer', fontSize: 13, fontWeight: 700 },
  promoCard: { background: '#fff', borderRadius: 24, padding: 24, border: '1px solid #E5E7EB' },
  promoTitle: { margin: 0, fontSize: 16, fontWeight: 800, color: '#111827', marginBottom: 16 },
  promoForm: { display: 'flex', gap: 12, alignItems: 'center' },
  promoInput: { flex: 1, padding: '14px 16px', borderRadius: 14, border: '1px solid #E5E7EB', fontSize: 14, outline: 'none' },
  promoBtn: { background: '#111827', color: '#fff', border: 'none', borderRadius: 14, padding: '14px 22px', cursor: 'pointer', fontWeight: 700 },
  orderCard: { background: '#fff', borderRadius: 28, padding: 32, border: '1px solid #E5E7EB', boxShadow: '0 25px 60px rgba(15,23,42,0.06)' },
  summaryHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  summaryLabel: { fontSize: 13, color: '#6B7280', fontWeight: 700 },
  summaryTotal: { fontSize: 20, fontWeight: 900, color: '#111827' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: 14, color: '#475569', marginBottom: 12 },
  summaryDivider: { height: 1, background: '#E5E7EB', margin: '20px 0' },
  checkoutBtn: { width: '100%', background: '#2563EB', color: '#fff', border: 'none', borderRadius: 16, padding: '16px 0', fontSize: 15, fontWeight: 800, cursor: 'pointer' },
  quickNote: { marginTop: 28, padding: 20, background: '#F8FAFF', borderRadius: 20, border: '1px solid #E2E8F0' },
  noteLabel: { fontSize: 12, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 800, margin: 0 },
  noteBody: { fontSize: 14, color: '#475569', margin: '10px 0 0', lineHeight: 1.7 },
  noteBtn: { marginTop: 16, background: '#111827', color: '#fff', border: 'none', borderRadius: 14, padding: '12px 18px', cursor: 'pointer', fontWeight: 700 },
};

export default CartPage;
