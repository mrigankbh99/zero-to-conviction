import Link from 'next/link'
import { Post } from '@/lib/types'
import { formatDateShort } from '@/lib/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group py-8 border-b border-outline-variant/30 last:border-0">
      <Link href={`/writing/${post.slug}`} className="block">
        <div className="flex items-baseline gap-8">
          <time
            dateTime={post.date}
            className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant flex-shrink-0 w-20"
          >
            {formatDateShort(post.date)}
          </time>
          <div className="flex-1 min-w-0">
            <h2 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary-container transition-colors duration-300 mb-2 tracking-tight">
              {post.title}
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                {post.tag}
              </span>
              <span className="text-outline-variant">·</span>
              <span className="font-label text-[10px] text-on-surface-variant">
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
