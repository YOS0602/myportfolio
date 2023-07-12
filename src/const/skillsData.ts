export type TSkillKind =
  | 'frontend'
  | 'server side'
  | 'framework'
  | 'cloud'
  | 'other'

export type TSkill = {
  kind: TSkillKind
  name: string
  level: number
}

export const skills: Readonly<TSkill>[] = [
  {
    kind: 'cloud',
    name: 'Microsoft Azure',
    level: 4,
  },
  {
    kind: 'cloud',
    name: 'AWS',
    level: 2,
  },
  {
    kind: 'frontend',
    name: 'JavaScript',
    level: 5,
  },
  {
    kind: 'frontend',
    name: 'React',
    level: 3,
  },
  {
    kind: 'frontend',
    name: 'Vue.js',
    level: 2,
  },
  {
    kind: 'other',
    name: 'Figma',
    level: 2,
  },
  {
    kind: 'server side',
    name: 'TypeScript',
    level: 5,
  },
  {
    kind: 'server side',
    name: 'Node.js',
    level: 5,
  },
  {
    kind: 'server side',
    name: 'SQL',
    level: 4,
  },
  {
    kind: 'server side',
    name: 'GraphQL',
    level: 1,
  },
  {
    kind: 'server side',
    name: 'Go',
    level: 1,
  },
  {
    kind: 'server side',
    name: 'Python',
    level: 2,
  },
  {
    kind: 'server side',
    name: 'C#',
    level: 1,
  },
  {
    kind: 'framework',
    name: 'Next.js',
    level: 3,
  },
  {
    kind: 'framework',
    name: 'Express',
    level: 4,
  },
  {
    kind: 'framework',
    name: 'NestJS',
    level: 1,
  },
  {
    kind: 'framework',
    name: 'Spring Boot',
    level: 1,
  },
]

// {
//   kind: '',
//   name: '',
//   level: 0,
// },
