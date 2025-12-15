'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-mesh relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-coral-500 font-medium text-sm uppercase tracking-wider mb-4 block">
                About Me
              </span>
              <h1 className="text-hero font-display mb-6">
                Hello, I'm <span className="text-gradient-coral">Yiduo</span>
              </h1>
              <p className="text-subtitle text-charcoal-600 mb-8">
                A cross-cultural designer and strategist navigating the space 
                between business analysis and human-centered design.
              </p>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto">
                <div className="absolute inset-0 blob bg-gradient-to-br from-coral-300 via-golden-200 to-sage-300 opacity-60 animate-morph" />
                <div 
                  className="absolute inset-4 blob placeholder-image flex items-center justify-center"
                  data-label=""
                >
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cream-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-charcoal-400">Portrait Photo</p>
                    <p className="text-xs text-charcoal-400">400 × 500px</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative */}
        <div className="absolute top-20 left-0 w-72 h-72 blob organic-shape-coral opacity-20" />
        <div className="absolute bottom-10 right-0 w-96 h-96 blob-1 organic-shape-sage opacity-20" />
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Origin */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <h2 className="text-section font-display mb-6">My Story</h2>
              <div className="space-y-6 text-body text-charcoal-600">
                <p>
                  Born in Changsha, China, I learned early what it means to navigate 
                  unfamiliar territory. At a young age, I attended boarding school 
                  alone—an experience that taught me independence and the value of 
                  building connections across difference.
                </p>
                <p>
                  My journey took me across continents, from China to Oregon, and 
                  eventually to Seattle. Each transition required adapting not just 
                  to new places, but to entirely new ways of seeing and communicating. 
                  This cross-cultural fluency became my superpower.
                </p>
              </div>
            </motion.div>

            {/* Current State */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <h3 className="text-2xl font-display font-semibold mb-4 text-coral-500">
                Where I Am Now
              </h3>
              <div className="space-y-4 text-body text-charcoal-600">
                <p>
                  I'm currently an undergraduate at the University of Washington Seattle, 
                  double-majoring in Finance & Marketing at the Foster School of Business. 
                  Dean's List every quarter. GPA: 3.82.
                </p>
                <div className="flex flex-wrap gap-3 my-6">
                  <span className="px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium">
                    Finance
                  </span>
                  <span className="px-4 py-2 rounded-full bg-coral-100 text-coral-700 text-sm font-medium">
                    Marketing
                  </span>
                  <span className="px-4 py-2 rounded-full bg-golden-100 text-golden-700 text-sm font-medium">
                    Dean's List
                  </span>
                  <span className="px-4 py-2 rounded-full bg-navy-100 text-navy-700 text-sm font-medium">
                    3.82 GPA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* The Pivot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-coral-400 to-sage-400 rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-display font-semibold mb-4 text-coral-500">
                  The Pivot
                </h3>
                <blockquote className="text-xl text-charcoal-700 italic mb-6 font-light">
                  "Business taught me to analyze markets. But I kept noticing something 
                  else—the moments where products failed people. The nutrition label a 
                  mother couldn't read. The app an elderly customer couldn't navigate. 
                  I realized I wanted to stop measuring problems and start designing solutions."
                </blockquote>
                <p className="text-body text-charcoal-600">
                  These observations—from my internship at Jiaxian Food Technology, 
                  from countless customer interactions at Starbucks—revealed a pattern: 
                  systems often fail the people who need them most. And I wanted to 
                  learn how to fix that.
                </p>
              </div>
            </motion.div>

            {/* What I Bring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <h3 className="text-2xl font-display font-semibold mb-6 text-sage-600">
                What I Bring to Design
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Cross-Cultural Fluency',
                    description: 'Native Mandarin, fluent English, conversational Spanish. I see design through multiple cultural lenses.',
                    icon: '🌏',
                  },
                  {
                    title: 'Business Acumen',
                    description: 'I understand viability, stakeholder needs, and how to communicate value—skills that make designs implementable.',
                    icon: '📊',
                  },
                  {
                    title: 'Empathetic Observation',
                    description: 'I notice the elderly customer struggling with an app, the mother confused by a label. These details drive my work.',
                    icon: '👁️',
                  },
                  {
                    title: 'Systems Thinking',
                    description: 'I see how parts connect—how service design affects operations, how UI choices impact trust.',
                    icon: '🔗',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="card"
                  >
                    <span className="text-3xl mb-3 block">{item.icon}</span>
                    <h4 className="font-display font-semibold text-charcoal-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-charcoal-600 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What I Seek */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-2xl font-display font-semibold mb-4 text-navy-600">
                What I Seek
              </h3>
              <p className="text-body text-charcoal-600 mb-6">
                The formal training to transform observation into creation. The research 
                methods to listen better. The design skills to build what I imagine. 
                I'm pursuing graduate studies in Human-Computer Interaction to bridge 
                the gap between what I notice and what I can create.
              </p>
              <div className="flex flex-wrap gap-3">
                {['UX Research', 'Interaction Design', 'Service Design', 'Accessible Design'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cream-200 text-charcoal-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-cream-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 blob organic-shape-golden opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-section font-display mb-4">Skills & Tools</h2>
            <p className="text-body text-charcoal-600 max-w-2xl mx-auto">
              Bridging research, strategy, and design with technical proficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Research Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">Research Methods</h3>
              <ul className="space-y-2 text-charcoal-600 text-sm">
                <li>• User interviews & surveys</li>
                <li>• Qualitative analysis</li>
                <li>• Quantitative analysis (Python, R, STATA)</li>
                <li>• Journey mapping</li>
                <li>• Persona development</li>
              </ul>
            </motion.div>

            {/* Design & Prototyping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">Design & Prototyping</h3>
              <ul className="space-y-2 text-charcoal-600 text-sm">
                <li>• Figma</li>
                <li>• Information architecture</li>
                <li>• Service design</li>
                <li>• Visual communication</li>
                <li>• Iterative design processes</li>
              </ul>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-golden-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-golden-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">Strategy</h3>
              <ul className="space-y-2 text-charcoal-600 text-sm">
                <li>• Problem framing</li>
                <li>• Feature prioritization</li>
                <li>• Value proposition design</li>
                <li>• Stakeholder communication</li>
                <li>• A/B testing frameworks</li>
              </ul>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <h3 className="font-display font-semibold text-lg mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 rounded-full bg-white shadow-soft text-charcoal-700 font-medium">
                🇨🇳 Mandarin (Native)
              </span>
              <span className="px-6 py-3 rounded-full bg-white shadow-soft text-charcoal-700 font-medium">
                🇺🇸 English (Fluent)
              </span>
              <span className="px-6 py-3 rounded-full bg-white shadow-soft text-charcoal-700 font-medium">
                🇪🇸 Spanish (Conversational)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Traits */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-section font-display mb-12">A Few More Things</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { trait: 'ISFP internally', description: 'Sensitive & reflective' },
                { trait: 'ESTJ externally', description: 'Organized & decisive' },
                { trait: 'Detail spotter', description: 'Sees what others miss' },
                { trait: 'Bridge builder', description: 'Connects across cultures' },
              ].map((item, index) => (
                <motion.div
                  key={item.trait}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-4"
                >
                  <p className="font-display font-semibold text-charcoal-900 mb-1">{item.trait}</p>
                  <p className="text-sm text-charcoal-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
