'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function AboutPreview() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-2 organic-shape-sage opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 blob organic-shape-golden opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-coral-500 font-medium text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-section font-display mb-6">
              Hello, I'm <span className="text-gradient-coral">Yiduo</span>
            </h2>
            <div className="space-y-4 text-body text-charcoal-600 mb-8">
              <p>
                I'm a cross-cultural designer and strategist navigating the space between 
                business analysis and human-centered design. Born in Changsha, China, 
                I've journeyed through continents—from China to Oregon to Seattle—learning 
                to see the world through multiple lenses.
              </p>
              <p>
                Currently pursuing my studies at the Foster School of Business at UW Seattle, 
                I'm preparing to pivot into Human-Computer Interaction. Why? Because I keep 
                noticing the moments where products fail people—and I want to fix them.
              </p>
            </div>

            {/* Key traits */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Cross-Cultural', 'Systems Thinker', 'Empathetic', 'Detail-Oriented'].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="px-4 py-2 rounded-full bg-cream-200 text-charcoal-700 text-sm font-medium"
                >
                  {trait}
                </motion.span>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                className="btn btn-outline group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Me
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main photo placeholder */}
              <div className="col-span-2">
                <div 
                  className="placeholder-image aspect-[4/3] flex items-center justify-center"
                  data-label=""
                >
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-cream-300 flex items-center justify-center">
                      <svg className="w-6 h-6 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-charcoal-400">Casual Photo</p>
                    <p className="text-xs text-charcoal-400">350 × 450px</p>
                  </div>
                </div>
              </div>
              
              {/* Small location photos */}
              <div 
                className="placeholder-image aspect-square flex items-center justify-center"
                data-label=""
              >
                <div className="text-center p-2">
                  <p className="text-xs text-charcoal-400">Changsha</p>
                </div>
              </div>
              <div 
                className="placeholder-image aspect-square flex items-center justify-center"
                data-label=""
              >
                <div className="text-center p-2">
                  <p className="text-xs text-charcoal-400">Seattle</p>
                </div>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-coral-200 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Journey Timeline Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 items-center">
            {[
              { year: 'Born', place: 'Changsha, China', icon: '🏠' },
              { year: 'Growth', place: 'Boarding School', icon: '📚' },
              { year: 'Transition', place: 'Oregon, USA', icon: '✈️' },
              { year: 'Present', place: 'Seattle, UW', icon: '🎓' },
              { year: 'Future', place: 'HCI/HCDE', icon: '🚀' },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mb-2 group-hover:bg-coral-100 transition-colors">
                  <span className="text-xl">{milestone.icon}</span>
                </div>
                <span className="text-xs text-coral-500 font-medium uppercase tracking-wide">
                  {milestone.year}
                </span>
                <span className="text-sm text-charcoal-600">{milestone.place}</span>
                
                {/* Connector line */}
                {index < 4 && (
                  <div className="hidden md:block absolute left-full top-1/2 w-8 lg:w-12 h-px bg-cream-300" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
