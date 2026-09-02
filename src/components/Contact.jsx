import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Gagal mengirim')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-4 mb-6">Contact Me</h2>
          <p className="text-muted max-w-md mb-6">
            Open to internship opportunities, project collaborations, or discussions about machine learning and web development.
          </p>
          <div className="flex gap-4 mt-4">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.url} className="text-sm font-medium text-muted hover:text-navy-light">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-muted block mb-1">Name</label>
            <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 focus:outline-none focus:border-navy-light" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-muted block mb-1">Email</label>
            <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 focus:outline-none focus:border-navy-light" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-muted block mb-1">Message</label>
            <textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-line bg-surface px-4 py-3 focus:outline-none focus:border-navy-light" />
          </div>
          <button type="submit" disabled={status === 'sending'}
            className="px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors disabled:opacity-50">
            {status === 'sending' ? 'Mengirim...' : 'Send a message'}
          </button>
          {status === 'success' && <p className="text-sm text-green-400">Message Sent. Thank You!</p>}
          {status === 'error' && <p className="text-sm text-red-400">Failed to send, try again okay.</p>}
        </form>
      </div>
    </section>
  )
}