import Section from '../Section/Section'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <Section id="contact" className={styles.contactSection}>
      <div className={`${styles.inner} reveal`}>
        <p className="kicker">// Contact</p>
        <h2>Construisons quelque chose d’utile.</h2>
        <p className={styles.sub}>
          Une opportunité, un projet ou simplement une discussion technique ? Écrivez-moi.
        </p>
        <a className={styles.cvBtn} href="/cv-gbane-manzara.pdf" download>
          Télécharger mon CV <span aria-hidden="true">↓</span>
        </a>
        <div className={styles.links}>
          <a href="mailto:gbanemanzara95@gmail.com">
            Email <span>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/manzara-gbane-a4b6a312b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
          <a href="https://github.com/ManzaraG" target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>
        </div>
        <small>Disponible à Abidjan · Ouverte au travail hybride et à distance</small>
      </div>
    </Section>
  )
}
