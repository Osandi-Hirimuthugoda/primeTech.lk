import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminTopBar from '../../../components/admin/AdminTopBar'
import styles from './AdminNewProduct.module.css'

const brands = ['Apple', 'Samsung', 'Google', 'Sony']
const categories = ['Phones', 'Laptops', 'Audio', 'Tablets']

const AdminNewProduct = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('Apple')
  const [category, setCategory] = useState('Phones')
  const [desc, setDesc] = useState('')
  const [imgFile, setImgFile] = useState(null)

  const handleSave = (e) => {
    e.preventDefault()
    alert('Product saved!')
    navigate('/admin/products')
  }

  return (
    <div className={styles.page}>
      <AdminTopBar />

      <div className={styles.scroll}>
        <h1 className={styles.title}>New Product</h1>
        <p className={styles.sub}>Add a premium device to the digital lookbook.</p>

        {/* Upload */}
        <label className={styles.uploadBox}>
          <div className={styles.uploadIcon}>📷</div>
          <p className={styles.uploadTitle}>Upload Product Visuals</p>
          <p className={styles.uploadSub}>High-res PNG or JPG (Max 10MB)</p>
          <input type="file" accept=".png,.jpg,.jpeg" className={styles.fileInput} onChange={(e) => setImgFile(e.target.files[0])} />
          {imgFile
            ? <span className={styles.fileName}>{imgFile.name}</span>
            : <span className={styles.previewFrame}>PREVIEW FRAME</span>
          }
        </label>

        <form className={styles.form} onSubmit={handleSave}>
          {/* Product Name */}
          <div className={styles.field}>
            <label className={styles.label}>PRODUCT NAME</label>
            <input
              className={styles.input}
              placeholder="e.g. iPhone 16 Pro Max"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className={styles.divider} />
          </div>

          {/* Price + Brand */}
          <div className={styles.row}>
            <div className={styles.fieldHalf}>
              <label className={styles.label}>PRICE (LKR)</label>
              <input
                className={styles.input}
                placeholder="450,000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <div className={styles.divider} />
            </div>
            <div className={styles.fieldHalf}>
              <label className={styles.label}>BRAND</label>
              <div className={styles.selectWrap}>
                <select className={styles.select} value={brand} onChange={(e) => setBrand(e.target.value)}>
                  {brands.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className={styles.divider} />
            </div>
          </div>

          {/* Category */}
          <div className={styles.field}>
            <label className={styles.label}>CATEGORY</label>
            <div className={styles.chips}>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`${styles.chip} ${category === c ? styles.chipActive : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className={styles.field}>
            <label className={styles.label}>EDITORIAL DESCRIPTION</label>
            <textarea
              className={styles.textarea}
              placeholder="Highlight the tech-specs and aesthetic appeal..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
            />
            <div className={styles.divider} />
          </div>

          <button type="submit" className={styles.saveBtn}>Save Product</button>
        </form>

        <div className={styles.bottomPad} />
      </div>
    </div>
  )
}

export default AdminNewProduct
