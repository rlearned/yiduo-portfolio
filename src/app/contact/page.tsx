'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-mesh relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-coral-500 font-medium text-sm uppercase tracking-wider mb-4 block">
                Contact
              </span>
              <h1 className="text-hero font-display mb-6">
                Let's <span className="text-gradient-coral">Connect</span>
              </h1>
              <p className="text-subtitle text-charcoal-600 mb-8">
                I'm currently pursuing opportunities in HCI, UX research, and product 
                design. Whether you're a potential collaborator, mentor, or just want 
                to chat about design—I'd love to hear from you.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.a
                  href="mailto:wangyiduo1011@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-cream-300 hover:border-coral-300 hover:bg-white transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center group-hover:bg-coral-200 transition-colors">
                    <svg className="w-5 h-5 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Email</p>
                    <p className="text-charcoal-900 font-medium">wangyiduo1011@gmail.com</p>
                  </div>
                  <svg className="w-5 h-5 text-charcoal-400 ml-auto group-hover:text-coral-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yiduo-wang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-cream-300 hover:border-sage-300 hover:bg-white transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors">
                    <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">LinkedIn</p>
                    <p className="text-charcoal-900 font-medium">linkedin.com/in/yiduo-wang</p>
                  </div>
                  <svg className="w-5 h-5 text-charcoal-400 ml-auto group-hover:text-sage-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-cream-300">
                  <div className="w-12 h-12 rounded-xl bg-golden-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-golden-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Location</p>
                    <p className="text-charcoal-900 font-medium">Seattle, WA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card bg-white p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-charcoal-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-display font-semibold text-charcoal-900 mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all bg-cream-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all bg-cream-50"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all bg-cream-50 resize-none"
                          placeholder="Your message..."
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative */}
        <div className="absolute top-10 right-10 w-64 h-64 blob organic-shape-sage opacity-20" />
        <div className="absolute bottom-20 left-10 w-80 h-80 blob-1 organic-shape-coral opacity-20" />
      </section>

      {/* FAQ Section */}
      <section className="section bg-cream-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 blob organic-shape-golden opacity-15" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-section font-display mb-4">Common Questions</h2>
            <p className="text-charcoal-600">A few things you might want to know</p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                question: 'What kind of opportunities are you looking for?',
                answer: 'I\'m seeking graduate programs in HCI/HCDE where I can develop formal research and design skills. I\'m also open to UX research, product design, or service design roles where I can apply my cross-cultural perspective.',
              },
              {
                question: 'Are you available for freelance work?',
                answer: 'I\'m open to select projects, particularly those focused on accessible design, cross-cultural research, or value-sensitive design. Let\'s chat about your project!',
              },
              {
                question: 'What\'s your preferred way to communicate?',
                answer: 'Email works best for initial contact. For ongoing conversations, I\'m happy to set up video calls or meet in person if you\'re in the Seattle area.',
              },
              {
                question: 'How quickly do you respond?',
                answer: 'I typically respond to messages within 48 hours. If something is time-sensitive, please mention that in your message.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card bg-white"
              >
                <h3 className="font-display font-semibold text-charcoal-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-charcoal-600 text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-coral-500 to-coral-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to create something meaningful?
            </h2>
            <p className="text-coral-100 max-w-xl mx-auto mb-8">
              I believe the best work happens when diverse perspectives come together. 
              Let's explore how we can collaborate.
            </p>
            <motion.a
              href="mailto:wangyiduo1011@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-coral-600 rounded-xl font-semibold hover:bg-cream-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
