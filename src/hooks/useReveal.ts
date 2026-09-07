import { useEffect } from 'react'

/**
 * Observe tous les éléments `.reveal` du document et leur ajoute la classe
 * `.visible` lorsqu'ils entrent dans le viewport (une seule fois).
 * Équivalent React de l'ancien `script.js`.
 */
export function useReveal(): void {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}
