import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const formVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }
  }
}

const Email = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_ydera2d'
    const templateId = 'template_asz7z3x'
    const publicKey = 'SUyX6-kk-cc28VgoK'

    const templateParams = {
      from_name: name,
      from_email: email,
      message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        console.log('Email sent successfully')
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Email send failed', error)
      })
  }

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-outline-variant/5"
    >
      <h2 className="text-3xl font-extrabold text-primary mb-2">Send a Message</h2>
      <p className="text-on-surface-variant mb-8">
        Share your question and we'll get back to you as quickly as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div whileFocus={{ scale: 1.01 }}>
          <label htmlFor="fullName" className="block text-sm font-bold text-primary mb-2 ml-1">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.01 }}>
          <label htmlFor="emailAddress" className="block text-sm font-bold text-primary mb-2 ml-1">Email Address</label>
          <input
            id="emailAddress"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.01 }}>
          <label htmlFor="message" className="block text-sm font-bold text-primary mb-2 ml-1">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="How can we help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(103, 80, 164, 0.2)' }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-fixed-dim transition-colors"
        >
          <span>Send Message</span>
          <Send className="w-5 h-5" />
        </motion.button>
      </form>
    </motion.div>
  )
}

export default Email
