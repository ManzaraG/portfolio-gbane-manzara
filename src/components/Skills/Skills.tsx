import Section from '../Section/Section'
import SectionHead from '../SectionHead/SectionHead'
import { skills } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <Section id="competences">
      <SectionHead
        kicker="// Compétences"
        title="Une stack solide, orientée produit"
        description="Des outils choisis pour construire des solutions maintenables, sécurisées et utiles."
      />
      <div className={`${styles.grid} reveal`}>
        {skills.map((group) => (
          <div
            key={group.title}
            className={[styles.group, group.accent ? styles.accent : ''].filter(Boolean).join(' ')}
          >
            <span className={styles.icon}>{group.icon}</span>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
