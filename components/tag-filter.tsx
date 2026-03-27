'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

interface TagFilterProps {
  tags: string[]
  activeTag?: string
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setTag = useCallback(
    (tag: string | null) => {
      const params = new URLSearchParams(searchParams.toString())
      if (tag) params.set('tag', tag)
      else params.delete('tag')
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  return (
    <div className="flex flex-wrap gap-2 mb-12">
      <button
        onClick={() => setTag(null)}
        className={`font-label text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-150 ${
          !activeTag
            ? 'bg-primary text-on-primary border-primary'
            : 'text-on-surface-variant border-outline-variant/50 hover:border-outline hover:text-on-surface'
        }`}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => setTag(tag)}
          className={`font-label text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-150 ${
            activeTag === tag
              ? 'bg-primary text-on-primary border-primary'
              : 'text-on-surface-variant border-outline-variant/50 hover:border-outline hover:text-on-surface'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
