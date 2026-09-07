interface SectionHeadProps {
  kicker: string
  title: string
  description?: string
}

/** Bloc titre commun aux sections (`<div class="section-head reveal">`). */
export default function SectionHead({ kicker, title, description }: SectionHeadProps) {
  return (
    <div className="section-head reveal">
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}
