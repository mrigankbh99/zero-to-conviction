export type PostTag =
  | 'Thesis'
  | 'Observations'
  | 'Principles'
  | 'Learnings'
  | 'Struggles'
  | 'Research'

export interface PostFrontmatter {
  title: string
  date: string
  slug: string
  tag: PostTag
  excerpt: string
  published: boolean
  coverImage?: string
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: number
}
