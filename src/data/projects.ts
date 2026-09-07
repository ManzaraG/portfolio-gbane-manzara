import type { Project } from './types'

export const projects: Project[] = [
  {
    no: '01',
    tag: 'FINTECH · API',
    title: 'Plateforme de gestion de titres',
    description:
      "Sécurisation des échanges, intégration de données de marché et gestion des autorisations pour un environnement financier exigeant.",
    stack: ['ASP.NET Framework', 'SQL Server', 'JWT & API Keys', 'Swagger'],
    featured: true,
  },
  {
    no: '02',
    tag: 'DATA · CRÉDIT',
    title: 'Extraction réglementaire BIC',
    description:
      "Extraction des engagements amortissables et non amortissables pour les clients consentants et non consentants du groupe Société Générale en zone UEMOA.",
    stack: ['Informix 4GL', 'Oracle', 'Excel'],
  },
  {
    no: '03',
    tag: 'ÉDUCATION · CARTOGRAPHIE',
    title: 'Carte scolaire & e-commerce',
    description:
      "Conception d’applications mobiles et web, consommation d’API, déploiement sur Microsoft Azure et intégration d’une API cartographique.",
    stack: ['C#', 'ASP.NET', 'jQuery', 'SuperGeo'],
  },
]
