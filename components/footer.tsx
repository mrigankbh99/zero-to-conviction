import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface-container-low mt-20 p-12 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-8 max-w-screen-2xl mx-auto gap-8">

        {/* Left */}
        <div className="space-y-4">
          <div className="font-headline text-xl font-bold text-primary">
            Zero to Conviction
          </div>
          <p className="font-label text-xs uppercase tracking-widest text-primary/50">
            © {new Date().getFullYear()} Zero to Conviction. Intellectual Monolith.
          </p>
        </div>

        {/* Right: columns */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Channels
            </span>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'Substack', href: 'https://substack.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest text-primary/50 hover:text-primary underline decoration-1 underline-offset-4 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Access
            </span>
            {[
              { label: 'RSS', href: '/rss.xml' },
              { label: 'Contact', href: '/about' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-label text-xs uppercase tracking-widest text-primary/50 hover:text-primary underline decoration-1 underline-offset-4 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
