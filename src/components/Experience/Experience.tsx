import Section from '../Section/Section'
import SectionHead from '../SectionHead/SectionHead'
import { experiences } from '../../data/experiences'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <Section id="experiences" className={styles.experienceSection}>
      <SectionHead kicker="// Expériences" title="Mon parcours professionnel" />
      <div className={`${styles.timeline} reveal`}>
        {experiences.map((exp) => (
          <article key={exp.company + exp.period}>
            <div className={styles.time}>
              <strong>{exp.period}</strong>
              <span>{exp.place}</span>
            </div>
            <div className={styles.dot}></div>
            <div className={styles.job}>
              <span>{exp.company}</span>
              <h3>{exp.role}</h3>
              <p>{exp.description}</p>
              <div className={styles.chips}>
                {exp.chips.map((chip) => (
                  <b key={chip}>{chip}</b>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
