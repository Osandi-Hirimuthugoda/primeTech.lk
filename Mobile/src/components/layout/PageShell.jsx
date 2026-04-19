import React from 'react'
import styles from './PageShell.module.css'

/**
 * Wraps every customer page.
 * - Mobile: full width, bottom-nav padding
 * - Desktop: offset by sidebar, centered content with max-width
 */
const PageShell = ({ children }) => (
  <div className={styles.shell}>{children}</div>
)

export default PageShell
