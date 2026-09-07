import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    icon: '{ }',
    title: 'Backend',
    text: 'C# · ASP.NET · ASP.NET Core · Web API · Entity Framework · Dapper · Architecture en couches',
  },
  {
    icon: '◫',
    title: 'Frontend & mobile',
    text: 'React.js · TypeScript · JavaScript · HTML · CSS · jQuery · Flutter',
  },
  {
    icon: '⌁',
    title: 'Data',
    text: 'SQL Server · PostgreSQL · MongoDB · Modélisation · Requêtes',
  },
  {
    icon: '◇',
    title: 'Sécurité',
    text: 'JWT · OAuth · API Keys · CORS · Autorisations · Keycloak',
  },
  {
    icon: '✓',
    title: 'Conception & outils',
    text: 'Git · GitLab · Docker · Postman · Swagger · Trello · Notion · Figma · Tests',
  },
  {
    icon: '✦',
    title: 'Intelligence artificielle',
    text: 'GitHub Copilot · ChatGPT · Claude · Claude Code · LLM · Agents IA',
    accent: true,
  },
]
