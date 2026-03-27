import type { Metadata } from 'next'
import { getAllPosts, formatDateShort } from '@/lib/posts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Archive',
  description: 'Complete archive of all writing.',
}

export default function ArchivePage() {
  const posts = getAllPosts()

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.split('-')[0]
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="px-8 max-w-screen-2xl mx-auto py-16">

      {/* Header */}
      <div className="editorial-grid mb-20">
        <div className="col-span-12 md:col-span-3">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant block mb-4">
            Complete Archive
          </span>
          <h1 className="font-headline text-5xl font-bold text-primary tracking-tighter leading-none">
            Archive
          </h1>
        </div>
      </div>

      {/* Year groups */}
      <div className="editorial-grid gap-y-0">
        <div className="col-span-12 md:col-start-4 md:col-span-9 space-y-20">
          {years.map(year => (
            <div key={year}>
              <div className="flex items-center gap-6 mb-8">
                <span className="font-headline text-6xl font-bold text-outline-variant/30 leading-none">
                  {year}
                </span>
                <div className="flex-1 h-[1px] bg-outline-variant/30" />
              </div>
              <div>
                {byYear[year].map((post, i) => (
                  <article
                    key={post.slug}
                    className={`group flex items-baseline gap-8 py-6 ${i < byYear[year].length - 1 ? 'border-b border-outline-variant/30' : ''}`}
                  >
                    <time className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant flex-shrink-0 w-12">
                      {formatDateShort(post.date).split(' ')[0]}
                    </time>
                    <Link href={`/writing/${post.slug}`} className="flex-1">
                      <h2 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary-container transition-colors duration-300 tracking-tight">
                        {post.title}
                      </h2>
                    </Link>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hidden sm:block flex-shrink-0">
                      {post.tag}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
