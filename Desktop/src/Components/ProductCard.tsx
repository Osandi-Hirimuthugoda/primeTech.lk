import React, { useState } from 'react';
import { type Product } from '../Types';

interface ProductCardProps {
  product: Product;
  size?: 'sm' | 'md';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, size = 'md' }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const isSmall = size === 'sm';

  return (
    <div
      style={{
        ...styles.card,
        padding: isSmall ? '10px' : '14px',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.10)' : '0 1px 3px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.badge && (
        <span style={{ ...styles.badge, background: product.badge === 'New' ? '#10B981' : '#EF4444' }}>
          {product.badge}
        </span>
      )}
      <div style={{ ...styles.imgWrap, height: isSmall ? 80 : 96 }}>
        <img src={product.image} alt={product.name} style={styles.img} />
      </div>
      <div style={styles.body}>
        <p style={styles.brand}>{product.brand}</p>
        <p style={{ ...styles.name, fontSize: isSmall ? 11 : 12 }}>{product.name}</p>
        {product.colors && (
          <div style={styles.colors}>
            {product.colors.slice(0, 4).map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                style={{
                  ...styles.colorDot,
                  background: color,
                  transform: selectedColor === i ? 'scale(1.3)' : 'scale(1)',
                  boxShadow: selectedColor === i ? `0 0 0 2px #fff, 0 0 0 3px ${color}` : 'none',
                }}
              />
            ))}
          </div>
        )}
        <div style={styles.footer}>
          <span style={styles.price}>${product.price.toLocaleString()}</span>
          <button style={styles.addBtn}>+</button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: '#FAFAFA', borderRadius: 12,
    border: '1px solid #F3F4F6', cursor: 'pointer',
    transition: 'all 0.2s ease', position: 'relative', overflow: 'hidden',
  },
  badge: {
    position: 'absolute', top: 8, right: 8,
    color: '#fff', fontSize: 9, fontWeight: 700,
    padding: '2px 6px', borderRadius: 4,
  },
  imgWrap: {
    background: '#F0F0F0', borderRadius: 8, overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  body: { marginTop: 10 },
  brand: { fontSize: 10, color: '#9CA3AF', fontWeight: 500, margin: '0 0 2px' },
  name: { color: '#111827', fontWeight: 600, margin: '0 0 8px', lineHeight: 1.3 },
  colors: { display: 'flex', gap: 4, marginBottom: 8 },
  colorDot: {
    width: 10, height: 10, borderRadius: '50%', border: 'none',
    cursor: 'pointer', padding: 0, transition: 'all 0.15s',
  },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  price: { fontSize: 13, fontWeight: 700, color: '#111827' },
  addBtn: {
    width: 22, height: 22, borderRadius: 6,
    background: '#3B82F6', color: '#fff', border: 'none',
    cursor: 'pointer', fontSize: 16, fontWeight: 300,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
};

export default ProductCard;
