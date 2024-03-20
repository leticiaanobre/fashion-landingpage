import React from 'react'
import {Search, ShoppingCart} from 'lucide-react'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.name}>
            <p>Josepine co.</p>
        </div>
        <ul className={styles.listNames}>
            <li>Home</li>
            <li>Product</li>
            <li>Trends</li>
            <li>Blog</li>
        </ul>
        <div className={styles.items}>
            <Search />
            <ShoppingCart strokeWidth={1.25} />
        </div>
    </nav>
  )
}
