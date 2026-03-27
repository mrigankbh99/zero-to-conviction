import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { getMDXComponents } from '@/components/mdx-components'
import PostHero from '@/components/post-hero'
import Link from 'next/link'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  if (!post || !post.published) notFound()

  return (
    <div className="px-8 max-w-screen-2xl mx-auto py-16">
      <div className="editorial-grid">
        <div className="col-span-12 md:col-start-4 md:col-span-6">

          {/* Back */}
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors mb-12"
          >
            ← Writing
          </Link>

          <PostHero post={post} />

          {post.coverImage && (
            <div className="mb-14 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg font-body">
            <MDXRemote
              source={post.content}
              components={getMDXComponents()}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
