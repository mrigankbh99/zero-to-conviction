import type { Metadata } from 'next'
import Link from 'next/link'
import ProfileImage from '@/components/profile-image'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Mrigank — ex-founder, researcher, writing on fintech, AI, and healthcare.',
}

export default function AboutPage() {
  return (
    <div className="px-8 max-w-screen-2xl mx-auto py-16">

      {/* Profile */}
      <div className="editorial-grid mb-20 gap-y-10 items-start">
        <div className="col-span-12 md:col-span-3">
          <ProfileImage />
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant font-label">
            Mrigank — Founder &amp; Researcher
          </p>
        </div>

        <div className="col-span-12 md:col-start-5 md:col-span-8">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant block mb-6">
            About
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.95] mb-8">
            Mrigank
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed italic mb-8 max-w-lg">
            Ex-founder. Researcher. Building conviction at the intersection of fintech, AI, and healthcare.
          </p>
          <div className="flex items-center gap-8">
            {[
              { label: 'Twitter', href: 'https://twitter.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest font-bold border-b border-primary pb-1 text-primary hover:text-primary-container transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-outline-variant/30 mb-20" />

      {/* Content */}
      <div className="editorial-grid gap-y-16">
        <div className="col-span-12 md:col-start-4 md:col-span-7 space-y-16">

          <section>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6 tracking-tight">
              Background
            </h2>
            <div className="font-body text-lg text-on-surface-variant leading-relaxed space-y-4">
              <p>
                I co-founded <span className="text-primary font-semibold">Eddy Finance</span>, a
                DeFi product that grew to 1.2 million unique wallets. The experience gave me a
                ground-level education in what it takes to build trust with users putting real
                money into something new.
              </p>
              <p>
                Before that, Apoorv and I built <span className="text-primary font-semibold">Frontpage</span>,
                a student media platform that expanded across nine college campuses. The distribution
                lessons from that still shape how I think about go-to-market.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-headline text-3xl font-bold text-primary mb-8 tracking-tight">
              What I&apos;m thinking about
            </h2>
            <div className="space-y-10">
              {[
                { num: '01', title: 'Stablecoin remittances', tag: 'Thesis', desc: "Specifically the India corridor — $125B/year flowing through extractive rails with a genuinely better alternative now technically possible." },
                { num: '02', title: 'Vertical AI in SMBs', tag: 'Thesis', desc: "AI embedded into specific industry workflows — auto repair, pharmacy, residential services — where incumbents are bad and the wedge is clear." },
                { num: '03', title: 'Medical tourism', tag: 'Research', desc: "The demand side is growing fast. The supply side is fragmented. There's a coordination and trust problem worth solving." },
                { num: '04', title: 'Nursing & healthcare staffing', tag: 'Research', desc: "A structural supply shortage meeting regulatory constraints. The economics are uncomfortable. The opportunity is real." },
              ].map(item => (
                <div key={item.num} className="flex items-baseline gap-8 pb-8 border-b border-outline-variant/30 last:border-0">
                  <span className="font-headline text-3xl italic text-outline-variant/40 flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-headline text-xl font-bold text-on-surface">
                        {item.title}
                      </h3>
                      <Link
                        href={`/writing?tag=${item.tag}`}
                        className="font-label text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {item.tag}
                      </Link>
                    </div>
                    <p className="font-body text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6 tracking-tight">
              Why I write
            </h2>
            <div className="font-body text-lg text-on-surface-variant leading-relaxed space-y-4">
              <p>
                Thinking in public forces precision. When a thesis only lives in my head, I can
                be sloppier about it than I should be. Writing forces me to find the gaps.
              </p>
              <p className="italic">
                There&apos;s no newsletter, no algorithm to please. This is just a place to put
                the work — and to be wrong productively.
              </p>
            </div>
          </section>

          <section className="pt-4 border-t border-outline-variant/30">
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Reach me{' '}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 decoration-1 hover:text-primary-container transition-colors">
                on Twitter
              </a>
              {' '}or by{' '}
              <a href="mailto:mrigank@example.com"
                className="text-primary underline underline-offset-4 decoration-1 hover:text-primary-container transition-colors">
                email
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
