import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

/** Enveloppe `<section class="section …">` avec l'espacement commun. */
export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={['section', className].filter(Boolean).join(' ')}>
      {children}
    </section>
  )
}
