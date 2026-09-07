import Section from '../Section/Section'
import SectionHead from '../SectionHead/SectionHead'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <Section id="realisations" className={styles.projects}>
      <SectionHead
        kicker="// Réalisations"
        title="Des projets qui répondent à de vrais enjeux"
        description="Architecture, sécurité, intégration et expérience utilisateur : une approche complète du produit."
      />
      <div className={styles.grid}>
        {projects.map((project) => (
          <article
            key={project.no}
            className={[styles.card, project.featured ? styles.featured : '', 'reveal']
              .filter(Boolean)
              .join(' ')}
          >
            <div className={styles.no}>{project.no}</div>
            <div>
              <p className="tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <ul>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            {project.featured && <span className={styles.arrow}>↗</span>}
          </article>
        ))}
      </div>
    </Section>
  )
}
