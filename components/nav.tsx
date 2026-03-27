'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Writing' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f8]/80 backdrop-blur-xl">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-2xl font-black text-primary"
        >
          Zero to Conviction
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center space-x-12">
          {links.map(({ href, label }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={`font-body transition-colors duration-200 ${
                  active
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-primary/60 font-medium hover:text-primary'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Connect */}
        <a
          href="https://wa.me/919818394095"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-end group"
        >
          <span className="bg-primary text-on-primary px-6 py-2.5 font-body font-semibold text-sm uppercase tracking-wider group-hover:bg-primary-container transition-all duration-300 block">
            Connect
          </span>
          <span className="font-label text-[10px] text-on-surface-variant tracking-widest mt-1">
            +91 98183 94095
          </span>
        </a>
      </nav>
    </header>
  )
}
