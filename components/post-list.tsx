import { Post } from '@/lib/types'
import PostCard from './post-card'

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <p className="font-body text-sm text-muted py-12 text-center">
        Nothing here yet.
      </p>
    )
  }

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
