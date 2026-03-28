'use client'

import { useState } from 'react'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <div className="flex-grow text-left">
        <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 font-label text-on-surface-variant">
          Electronic Mail
        </label>
        <input
          type="email"
          placeholder="GETUPDATES@ZEROTOCONVICTION.COM"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
          className="mandate-input"
        />
      </div>
      <div className="flex items-end flex-col gap-2">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 font-label font-bold uppercase tracking-widest text-xs hover:bg-primary-container transition-all duration-300 disabled:opacity-50"
        >
          {status === 'loading' ? 'Saving...' : status === 'success' ? 'Subscribed' : 'Subscribe'}
        </button>
        {status === 'error' && (
          <p className="font-label text-[10px] text-error">Something went wrong. Try again.</p>
        )}
      </div>
    </form>
  )
}
