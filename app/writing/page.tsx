import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getAllPosts, getAllTags } from '@/lib/posts'
import PostList from '@/components/post-list'
import TagFilter from '@/components/tag-filter'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'All writing — thesis, observations, learnings, and everything in between.',
}

interface PageProps {
  searchParams: { tag?: string }
}

export default function WritingPage({ searchParams }: PageProps) {
  const allPosts = getAllPosts()
  const allTags = getAllTags()
  const activeTag = searchParams.tag
  const posts = activeTag ? allPosts.filter(p => p.tag === activeTag) : allPosts

  return (
    <div className="px-8 max-w-screen-2xl mx-auto py-16">

      {/* Header */}
      <div className="editorial-grid mb-16">
        <div className="col-span-12 md:col-span-3">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant block mb-4">
            Archive
          </span>
          <h1 className="font-headline text-5xl font-bold text-primary tracking-tighter leading-none">
            Writing
          </h1>
        </div>
        <div className="col-span-12 md:col-start-5 md:col-span-8 flex items-end">
          <p className="font-body text-lg text-on-surface-variant leading-relaxed italic">
            Thesis, observations, learnings, and everything in between.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="editorial-grid">
        <div className="col-span-12 md:col-start-4 md:col-span-9">
          {/* Tag filter */}
          <Suspense>
            <TagFilter tags={allTags} activeTag={activeTag} />
          </Suspense>

          {/* Post list */}
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  )
}
