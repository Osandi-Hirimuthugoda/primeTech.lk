import React, { useState } from 'react'
import TopBar from '../../../components/customer/TopBar'
import styles from './Cart.module.css'
import iphone17 from '../../../assets/images/Obsidian Black Smartphone.png'
import pixel8 from '../../../assets/images/Titanium Grey Smartphone.png'

const initialItems = [
  { id: 1, name: 'iPhone 17', variant: 'TITANIUM BLUE • 512GB', price: 1399, qty: 1, img: iphone17 },
  { id: 2, name: 'Pixel 8 Pro', variant: 'OBSIDIAN • 256GB', price: 999, qty: 1, img: pixel8 },
]

const Cart = () => {
  const [items, setItems] = useState(initialItems)
  const [promo, setPromo] = useState('')

  const updateQty = (id, delta) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ))
  }

  const removeItem = (id) => setItems(items.filter((item) => item.id !== id))

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const tax = +(subtotal * 0.08).toFixed(2)
  const total = subtotal + tax

  return (
    <div className={styles.page}>
      <TopBar showBack title="PrimeTechLK" />

      <div className={styles.header}>
        <span className={styles.headerTag}>YOUR SELECTION</span>
        <h1 className={styles.title}>Shopping Cart</h1>
      </div>

      <div className={styles.items}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={item.img} alt={item.name} className={styles.cardImageContent} />
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.variant}>{item.variant}</p>
              <p className={styles.price}>${(item.price * item.qty).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            </div>
            <div className={styles.actions}>
              <button className={styles.deleteBtn} onClick={() => removeItem(item.id)}>🗑</button>
              <div className={styles.qtyRow}>
                <button className={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>−</button>
                <span className={styles.qty}>{item.qty}</span>
                <button className={styles.qtyBtn} onClick={() => updateQty(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promo */}
      <div className={styles.promoWrap}>
        <span className={styles.promoIcon}>🏷</span>
        <input
          className={styles.promoInput}
          placeholder="Promo Code"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
        />
        <button className={styles.applyBtn}>APPLY</button>
      </div>

      <div className={styles.divider} />

      {/* Summary */}
      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span className={styles.free}>Free</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Estimated Tax</span>
          <span>${tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
          <span>Total</span>
          <span className={styles.totalVal}>${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      <div className={styles.ctaWrap}>
        <button className={styles.checkoutBtn}>Checkout →</button>
      </div>
    </div>
  )
}

export default Cart
