import Link from 'next/link'
import { Post } from '@/lib/types'
import { formatDate } from '@/lib/posts'

interface PostHeroProps {
  post: Post
}

export default function PostHero({ post }: PostHeroProps) {
  return (
    <div className="mb-14">
      {/* Tag + meta on one line */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href={`/writing?tag=${post.tag}`}
          className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant hover:text-primary transition-colors"
        >
          {post.tag}
        </Link>
        <span className="text-outline-variant/50">·</span>
        <time dateTime={post.date} className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
          {formatDate(post.date)}
        </time>
        <span className="text-outline-variant/50">·</span>
        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
          {post.readingTime} min read
        </span>
      </div>

      {/* Title */}
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-[1.0] tracking-tighter mb-10">
        {post.title}
      </h1>

      {/* Separator */}
      <div className="w-full h-[1px] bg-outline-variant/30" />
    </div>
  )
}
