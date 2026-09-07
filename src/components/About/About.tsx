import Section from '../Section/Section'
import SectionHead from '../SectionHead/SectionHead'
import { education } from '../../data/education'
import styles from './About.module.css'

export default function About() {
  return (
    <Section id="a-propos">
      <SectionHead kicker="// À propos" title="Une développeuse qui comprend le métier" />
      <div className={`${styles.grid} reveal`}>
        <div className={styles.copy}>
          <p>
            Je suis <strong>GBANE Manzara</strong>, développeuse logiciel basée à Abidjan, titulaire
            d’un <strong>Master en Systèmes Informatiques et Génie Logiciel</strong>. J’aime
            comprendre le fonctionnement réel d’un métier avant d’écrire la solution technique.
          </p>
          <p>
            Mon parcours couvre la finance, la gestion de patrimoine, le contrôle dépositaire,
            l’assurance santé, le crédit, la cartographie et le mobile. Il m’a appris à être
            rigoureuse face aux données sensibles, aux règles complexes et aux contraintes de
            sécurité.
          </p>
          <p>
            Je parle français et possède un niveau intermédiaire en anglais. Mon ambition est de
            contribuer à des produits à fort impact, de renforcer mon expertise en architecture et
            cybersécurité, et de construire des solutions de niveau international.
          </p>
        </div>
        <aside className={styles.aside}>
          <h3>Formation</h3>
          <p className={styles.asideSub}>Un parcours construit autour du logiciel et des données</p>
          <ul>
            {education.map((item) => (
              <li key={item.title + item.year}>
                <span>{item.year}</span>
                <b>{item.title}</b> — {item.school}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
