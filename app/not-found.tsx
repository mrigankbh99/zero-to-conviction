import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-6xl font-display font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link 
        href="/" 
        className="inline-block px-6 py-3 bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity"
      >
        Return home
      </Link>
    </div>
  )
}
