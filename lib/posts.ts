import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Post, PostFrontmatter } from './types'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'writing')

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR)
  const mdxFiles = files.filter(f => f.endsWith('.mdx') && !f.startsWith('_'))

  const posts = mdxFiles
    .map(filename => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      const frontmatter = data as PostFrontmatter
      const rt = readingTime(content)

      return {
        ...frontmatter,
        content,
        readingTime: Math.ceil(rt.minutes),
      } as Post
    })
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), 'utf-8')
    const { data, content } = matter(raw)
    const rt = readingTime(content)
    return {
      ...(data as PostFrontmatter),
      content,
      readingTime: Math.ceil(rt.minutes),
    }
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  return getAllPosts().map(p => p.slug)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  return Array.from(new Set(posts.map(p => p.tag)))
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  })
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}
