import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Tweet } from 'react-tweet'

export function getMDXComponents(): MDXComponents {
  return {
    Tweet,
    h2: ({ children, ...props }) => (
      <h2 className="font-headline font-bold tracking-tight" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="font-headline font-bold tracking-tight text-primary" {...props}>
        {children}
      </h3>
    ),
    a: ({ href, children, ...props }) => {
      const isInternal = href?.startsWith('/')
      if (isInternal) {
        return <Link href={href!} {...props}>{children}</Link>
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    },
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="not-italic border-l-2 border-outline-variant/50 pl-5 text-on-surface-variant"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: ({ ...props }) => (
      <hr className="border-outline-variant/30 my-16" {...props} />
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-primary" {...props}>
        {children}
      </strong>
    ),

    // ── TABLE COMPONENTS ─────────────────────────────────────────

    table: ({ children, ...props }) => (
      <div className="my-10 not-prose overflow-x-auto">
        <table className="w-full border-collapse text-sm" {...props}>
          {children}
        </table>
      </div>
    ),

    thead: ({ children, ...props }) => (
      <thead {...props}>
        {children}
      </thead>
    ),

    tbody: ({ children, ...props }) => (
      <tbody
        className="divide-y divide-outline-variant/20"
        {...props}
      >
        {children}
      </tbody>
    ),

    tr: ({ children, ...props }) => (
      <tr
        className="transition-colors duration-150 hover:bg-surface-container-low"
        {...props}
      >
        {children}
      </tr>
    ),

    th: ({ children, ...props }) => (
      <th
        className="bg-surface-container text-on-surface-variant text-left px-5 py-2.5 font-label text-[10px] uppercase tracking-[0.15em] font-bold whitespace-nowrap border-b border-outline-variant/40"
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td
        className="px-5 py-3 font-body text-sm text-on-surface leading-relaxed border-b border-outline-variant/20 first:font-medium first:text-on-surface"
        {...props}
      >
        {children}
      </td>
    ),
  }
}
