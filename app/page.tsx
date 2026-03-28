import Link from 'next/link'
import Image from 'next/image'
import SubscribeForm from '@/components/subscribe-form'

const allDives = [
  {
    num: '01',
    title: 'Stablecoin Remittances & Wealth Management: The India Thesis',
    slug: 'stablecoins-india-remittance',
    desc: "India receives $137 billion in remittances a year, more than Mexico and China combined. About $8.3 billion of that gets eaten in fees. Here's why stablecoins fix this, and what the real play actually is.",
  },
]

export default function Home() {

  return (
    <div className="bg-surface text-on-surface">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-20 md:mb-24">
        <div className="editorial-grid gap-y-12 items-start">

          {/* Photo column */}
          <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
            <div className="aspect-square grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border border-outline-variant/30">
              <Image
                src="/mrigank.jpg"
                alt="Mrigank"
                width={400}
                height={400}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant font-label">
              Mrigank — Founder &amp; Researcher
            </p>
          </div>

          {/* Headline column */}
          <div className="col-span-12 md:col-start-5 md:col-span-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold font-label mb-8 block">
              Zero to Conviction
            </span>

            <h1 className="font-headline font-bold text-4xl md:text-6xl leading-[0.95] tracking-tighter text-primary mb-10">
              Observations,{' '}
              <span className="italic font-normal">Insights,</span>{' '}
              and Everything in Between.
            </h1>

            <p className="font-body text-base md:text-lg leading-relaxed text-on-surface-variant">
              I like building things and learning how things actually work.
              Scaled a DeFi product to over a million wallets. Built smaller AI projects,
              healthcare tools, a cooking agent, things I had hunches about, that got to
              interesting places before the conviction ran out. Now I write about what
              I&apos;m still trying to figure out.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONVICTION DIVIDER ────────────────────────────── */}
      <div className="w-full px-8 max-w-screen-2xl mx-auto mb-20">
        <div className="w-full h-[1px] bg-outline-variant/30 relative">
          <div className="absolute top-0 left-0 h-[2px] bg-primary w-1/3" />
          <div className="absolute -top-3 left-1/3 transform -translate-x-1/2 bg-surface px-4 py-1">
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">
              Research Status: Active Deep Dives
            </span>
          </div>
        </div>
      </div>

      {/* ── DEEP DIVES ────────────────────────────────────── */}
      <section className="px-8 max-w-screen-2xl mx-auto">
        <div className="editorial-grid">

          {/* Left label */}
          <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
            <h2 className="font-headline text-3xl font-bold text-on-surface">
              Current<br />Deep Dives.
            </h2>
            <p className="mt-4 text-on-surface-variant font-body text-sm uppercase tracking-widest leading-loose">
              Personal research<br />into the global<br />monolith.
            </p>
          </div>

          {/* Right: all items */}
          <div className="col-span-12 md:col-start-5 md:col-span-8 space-y-32">
            {allDives.map((item) => (
              <article key={item.num} className="group relative">
                <div className="flex items-baseline gap-8">
                  <span className="font-headline text-4xl italic text-outline-variant/40 flex-shrink-0">
                    {item.num}
                  </span>

                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-on-surface group-hover:text-primary-container transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
                      {item.desc}
                    </p>
                    {item.slug ? (
                      <Link
                        href={`/writing/${item.slug}`}
                        className="research-cta font-label text-xs uppercase tracking-widest font-bold border-b border-primary pb-1"
                      >
                        View Project Research
                        <span className="material-symbols-outlined text-sm" style={{ fontSize: '16px' }}>
                          arrow_forward
                        </span>
                      </Link>
                    ) : (
                      <span className="font-label text-xs uppercase tracking-widest font-bold text-outline pb-1 border-b border-outline/30">
                        Research in Progress
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className="mt-40 bg-surface-container-low py-32 px-8">
        <div className="max-w-screen-2xl mx-auto editorial-grid">
          <div className="col-span-12 md:col-start-4 md:col-span-6 text-center">
            <h2 className="font-headline text-4xl font-bold mb-6 italic text-on-surface">
              The Monthly Mandate.
            </h2>
            <p className="font-body text-on-surface-variant mb-12">
              I share rigorous insights on capital deployment and structural trends,
              delivered with surgical precision. No filler.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>

    </div>
  )
}
