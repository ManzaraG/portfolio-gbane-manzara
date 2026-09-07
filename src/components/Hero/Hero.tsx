import styles from './Hero.module.css'

const metrics = [
  { value: '5+', label: 'expériences professionnelles' },
  { value: '8+', label: 'années de parcours IT' },
  { value: 'M2', label: 'systèmes informatiques' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="accueil">
      <div className="reveal">
        <p className="eyebrow">Développeuse logiciel · Abidjan</p>
        <h1>
          Je transforme des besoins métiers complexes en <span>solutions fiables.</span>
        </h1>
        <p className={styles.lead}>
          Développeuse <strong>.NET / React</strong>, je conçois des API sécurisées et des
          applications métiers performantes dans les secteurs de la finance, des titres et de
          l’assurance.
        </p>
        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.primary}`} href="#realisations">
            Voir mes projets
          </a>
          <a className={`${styles.btn} ${styles.secondary}`} href="#contact">
            Me contacter
          </a>
        </div>
      </div>

      <div className={`${styles.visual} reveal`} aria-label="Profil technique de GBANE Manzara">
        <div className={styles.codeHead}>
          <span></span>
          <span></span>
          <span></span>
          <small>manzara.profile.cs</small>
        </div>
        <pre>
          <code>
            <i>public class</i> <b>Developpeuse</b>
            {`
{
  `}
            <em>Stack</em>
            {` = ".NET + React";
  `}
            <em>Focus</em>
            {` = "API sécurisées";
  `}
            <em>Valeur</em>
            {` = "Fiabilité métier";
  `}
            <em>Localisation</em>
            {` = "Abidjan";
}`}
          </code>
        </pre>
        <div className={styles.status}>
          <span></span> Ouverte aux opportunités
        </div>
      </div>

      <div className={`${styles.metrics} reveal`}>
        {metrics.map((m) => (
          <div key={m.label}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
