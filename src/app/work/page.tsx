'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 'truecost',
    title: 'TrueCost',
    tagline: 'Anti-Dark Pattern Fintech Widget',
    description: 'Value-sensitive design that helps users visualize the real cost of BNPL decisions. Using code to protect user wellbeing rather than exploit it.',
    tags: ['Value Sensitive Design', 'Fintech', 'React', 'JavaScript'],
    featured: true,
    hasVideo: true,
    color: 'coral',
    year: '2024',
  },
  {
    id: 'rurallens',
    title: 'RuralLens',
    tagline: 'Cross-Cultural Trust Translator',
    description: 'Translating complex product information into trust-based visual languages for rural users. Addressing WEIRD bias in information design.',
    tags: ['Information Accessibility', 'Cross-Cultural', 'Python', 'Streamlit'],
    featured: true,
    hasVideo: true,
    color: 'sage',
    year: '2024',
  },
  {
    id: 'sexy-sticks',
    title: 'Sexy Sticks',
    tagline: 'Fast-casual dining reimagined',
    description: 'Award-winning service design for a differentiated restaurant experience. Complete brand identity, service blueprint, and operational flow.',
    tags: ['Service Design', 'Branding', 'Best Pitch Award', 'Operations'],
    featured: false,
    hasVideo: false,
    color: 'golden',
    year: '2024',
  },
  {
    id: 'high-epic',
    title: 'High Epic',
    tagline: 'Ready-to-eat hotpot for Gen Z',
    description: 'Culturally relevant CPG product with sustainability focus. From consumer insights to packaging design to go-to-market strategy.',
    tags: ['CPG Design', 'Sustainability', 'Brand Strategy', 'Packaging'],
    featured: false,
    hasVideo: false,
    color: 'navy',
    year: '2024',
  },
  {
    id: '222',
    title: '222',
    tagline: 'Building bridges to meaningful connection',
    description: 'Community discovery platform with trust-centered UX. Designed to combat social isolation through authentic in-person connections.',
    tags: ['UX Design', 'Social Platform', 'Trust Design', 'Mobile'],
    featured: false,
    hasVideo: false,
    color: 'coral',
    year: '2023',
  },
  {
    id: 'takeabreak',
    title: 'TakeABreak',
    tagline: 'AI-assisted emotional wellness',
    description: 'AI-powered communication and wellness companion for relationships. Trauma-informed design with ethical AI interaction patterns.',
    tags: ['AI/ML', 'Mental Health', 'Ethical Design', 'Mobile'],
    featured: false,
    hasVideo: false,
    color: 'sage',
    year: '2023',
  },
]

const colorClasses = {
  coral: {
    bg: 'bg-coral-50',
    border: 'border-coral-200',
    accent: 'text-coral-500',
    tag: 'bg-coral-100 text-coral-700',
    hover: 'group-hover:bg-coral-100',
  },
  sage: {
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    accent: 'text-sage-600',
    tag: 'bg-sage-100 text-sage-700',
    hover: 'group-hover:bg-sage-100',
  },
  golden: {
    bg: 'bg-golden-50',
    border: 'border-golden-200',
    accent: 'text-golden-600',
    tag: 'bg-golden-100 text-golden-700',
    hover: 'group-hover:bg-golden-100',
  },
  navy: {
    bg: 'bg-navy-50',
    border: 'border-navy-200',
    accent: 'text-navy-600',
    tag: 'bg-navy-100 text-navy-700',
    hover: 'group-hover:bg-navy-100',
  },
}

export default function WorkPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-mesh relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-coral-500 font-medium text-sm uppercase tracking-wider mb-4 block">
              My Work
            </span>
            <h1 className="text-hero font-display mb-6">
              Selected <span className="text-gradient-coral">Projects</span>
            </h1>
            <p className="text-subtitle text-charcoal-600">
              From value-sensitive design to cross-cultural research, each project 
              represents my journey from business analysis to human-centered design.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative */}
        <div className="absolute top-10 right-10 w-64 h-64 blob organic-shape-sage opacity-20" />
        <div className="absolute bottom-20 left-10 w-80 h-80 blob-1 organic-shape-coral opacity-20" />
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-charcoal-900 mb-2">
              Featured Projects
            </h2>
            <p className="text-charcoal-600">
              Code-based projects demonstrating my technical and design thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses]
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/work/${project.id}`}>
                    <article className={`group relative overflow-hidden rounded-3xl ${colors.bg} border ${colors.border} p-8 h-full transition-all duration-300 hover:shadow-soft-lg`}>
                      {/* Featured Badge */}
                      <div className="absolute top-6 right-6 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-coral-500 text-white text-xs font-medium">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Featured
                        </span>
                      </div>

                      {/* Video Placeholder */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal-800 to-charcoal-900">
                          <div className="text-center text-white/70">
                            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <p className="text-sm font-medium">Video Demo</p>
                            <p className="text-xs opacity-60">Click to view project</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-charcoal-400">{project.year}</span>
                        </div>
                        <h3 className={`text-2xl font-display font-semibold mb-2 ${colors.accent} group-hover:underline underline-offset-4`}>
                          {project.title}
                        </h3>
                        <p className="text-lg text-charcoal-700 font-medium mb-3">
                          {project.tagline}
                        </p>
                        <p className="text-charcoal-600 mb-4">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section bg-cream-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 blob organic-shape-golden opacity-15" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-charcoal-900 mb-2">
              Additional Projects
            </h2>
            <p className="text-charcoal-600">
              Design thinking and strategic work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses]
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/work/${project.id}`}>
                    <article className={`group relative overflow-hidden rounded-2xl bg-white border ${colors.border} p-6 h-full transition-all duration-300 hover:shadow-soft-lg ${colors.hover}`}>
                      <div className="flex gap-6">
                        {/* Image Placeholder */}
                        <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden">
                          <div className="placeholder-image w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <svg className="w-6 h-6 mx-auto text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-charcoal-400">{project.year}</span>
                          </div>
                          <h3 className={`text-xl font-display font-semibold mb-1 ${colors.accent} group-hover:underline underline-offset-4`}>
                            {project.title}
                          </h3>
                          <p className="text-sm text-charcoal-700 font-medium mb-2">
                            {project.tagline}
                          </p>
                          <p className="text-charcoal-600 text-sm line-clamp-2 mb-3">
                            {project.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 3).map(tag => (
                              <span 
                                key={tag} 
                                className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.tag}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-charcoal-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-section font-display mb-4">Interested in collaborating?</h2>
            <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
            <Link href="/contact">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
