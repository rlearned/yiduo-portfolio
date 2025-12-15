'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yiduo-wang',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:wangyiduo1011@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-charcoal-900 text-cream-100 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral-500/50 to-transparent" />
      
      {/* Organic shape */}
      <div className="absolute -top-32 -right-32 w-64 h-64 blob-1 bg-gradient-to-br from-coral-500/10 to-sage-500/10 blur-3xl" />
      
      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <motion.span
                className="font-display text-3xl font-bold"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Yiduo<span className="text-coral-400">.</span>
              </motion.span>
            </Link>
            <p className="mt-4 text-cream-300/80 max-w-sm leading-relaxed">
              Designing at the intersection of business strategy and human experience. 
              Currently seeking opportunities in HCI and UX research.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-cream-100/5 text-cream-300 hover:bg-coral-500 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-cream-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 hover:text-coral-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-cream-400 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-cream-300">
              <li>
                <a 
                  href="mailto:wangyiduo1011@gmail.com" 
                  className="hover:text-coral-400 transition-colors duration-300"
                >
                  wangyiduo1011@gmail.com
                </a>
              </li>
              <li>Seattle, WA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream-100/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-400 text-sm">
            © {currentYear} Yiduo Wang. All rights reserved.
          </p>
          <p className="text-cream-500 text-sm">
            Designed & built with intention
          </p>
        </div>
      </div>
    </footer>
  )
}
