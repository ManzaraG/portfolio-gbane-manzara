import { useState } from 'react'
import { navLinks } from '../../data/nav'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#accueil">
        GBANE <span>MANZARA</span>
      </a>
      <button
        className={styles.menu}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>
      <nav
        aria-label="Navigation principale"
        className={[styles.nav, open ? styles.open : ''].filter(Boolean).join(' ')}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.cta ? styles.navCta : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
