export interface NavLink {
  href: string
  label: string
  cta?: boolean
}

export interface Project {
  no: string
  tag: string
  title: string
  description: string
  stack: string[]
  featured?: boolean
}

export interface SkillGroup {
  icon: string
  title: string
  text: string
  accent?: boolean
}

export interface Experience {
  period: string
  place: string
  company: string
  role: string
  description: string
  chips: string[]
}

export interface Education {
  year: string
  title: string
  school: string
}
