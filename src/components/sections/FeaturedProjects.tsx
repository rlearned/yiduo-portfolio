'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 'truecost',
    title: 'TrueCost',
    tagline: 'Anti-Dark Pattern Fintech Widget',
    description: 'Value-sensitive design that helps users visualize the real cost of BNPL decisions',
    tags: ['Value Sensitive Design', 'Fintech', 'React'],
    featured: true,
    hasVideo: true,
    color: 'coral',
  },
  {
    id: 'lens',
    title: 'Lens',
    tagline: 'Cross-Cultural Trust Translator',
    description: 'Translating complex product information into trust-based visual languages for rural users',
    tags: ['Information Accessibility', 'Cross-Cultural', 'Python'],
    featured: true,
    hasVideo: true,
    color: 'sage',
  },
  {
    id: 'sexy-sticks',
    title: 'Sexy Sticks',
    tagline: 'Fast-casual dining reimagined',
    description: 'Award-winning service design for a differentiated restaurant experience',
    tags: ['Service Design', 'Branding', 'Best Pitch Award'],
    featured: false,
    hasVideo: false,
    color: 'golden',
  },
  {
    id: 'high-epic',
    title: 'High Epic',
    tagline: 'Ready-to-eat hotpot for Gen Z',
    description: 'Culturally relevant CPG product with sustainability focus',
    tags: ['CPG Design', 'Sustainability', 'Brand Strategy'],
    featured: false,
    hasVideo: false,
    color: 'navy',
  },
  {
    id: '222',
    title: '222',
    tagline: 'Building bridges to meaningful connection',
    description: 'Community discovery platform with trust-centered UX',
    tags: ['UX Design', 'Social Platform', 'Trust Design'],
    featured: false,
    hasVideo: false,
    color: 'coral',
  },
  {
    id: 'takeabreak',
    title: 'TakeABreak',
    tagline: 'AI-assisted emotional wellness',
    description: 'AI-powered communication and wellness companion for relationships',
    tags: ['AI/ML', 'Mental Health', 'Ethical Design'],
    featured: false,
    hasVideo: false,
    color: 'sage',
  },
]

const colorClasses = {
  coral: {
    bg: 'bg-coral-50',
    border: 'border-coral-200',
    accent: 'text-coral-500',
    tag: 'bg-coral-100 text-coral-700',
  },
  sage: {
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    accent: 'text-sage-600',
    tag: 'bg-sage-100 text-sage-700',
  },
  golden: {
    bg: 'bg-golden-50',
    border: 'border-golden-200',
    accent: 'text-golden-600',
    tag: 'bg-golden-100 text-golden-700',
  },
  navy: {
    bg: 'bg-navy-50',
    border: 'border-navy-200',
    accent: 'text-navy-600',
    tag: 'bg-navy-100 text-navy-700',
  },
}

export function FeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="section bg-cream-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 blob organic-shape-coral opacity-20" />
      <div className="absolute bottom-40 right-0 w-80 h-80 blob-1 organic-shape-sage opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider mb-4 block">
            Selected Work
          </span>
          <h2 className="text-section font-display mb-4">
            Featured Projects
          </h2>
          <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto">
            Showcasing my journey from business analysis to human-centered design 
            through research, strategy, and hands-on building.
          </p>
        </motion.div>

        {/* Featured Projects - Large Bento Cards with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects - Smaller Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/work">
            <motion.button
              className="btn btn-outline group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
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
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const colors = colorClasses[project.color as keyof typeof colorClasses]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/work/${project.id}`}>
        <motion.article
          className={`group relative overflow-hidden rounded-3xl ${colors.bg} border ${colors.border} p-6 md:p-8 h-full hover-lift cursor-pointer`}
          whileHover={{ y: -4 }}
        >
          {/* Featured Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-coral-500 text-white text-xs font-medium">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Featured
            </span>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
            <div className="placeholder-video absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal-800 to-charcoal-900">
              <div className="text-center text-white/70">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium">Video Demo</p>
                <p className="text-xs opacity-60">Click to view project</p>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium text-sm">View Case Study →</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className={`text-2xl font-display font-semibold mb-2 ${colors.accent}`}>
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
        </motion.article>
      </Link>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const colors = colorClasses[project.color as keyof typeof colorClasses]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/work/${project.id}`}>
        <motion.article
          className={`group relative overflow-hidden rounded-2xl ${colors.bg} border ${colors.border} p-5 h-full hover-lift cursor-pointer`}
          whileHover={{ y: -4 }}
        >
          {/* Image Placeholder */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <div className="placeholder-image absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-cream-300 flex items-center justify-center">
                  <svg className="w-5 h-5 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs text-charcoal-400">Project Image</p>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-charcoal-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium text-sm">View Project →</span>
            </div>
          </div>

          {/* Content */}
          <h3 className={`text-lg font-display font-semibold mb-1 ${colors.accent}`}>
            {project.title}
          </h3>
          <p className="text-sm text-charcoal-600 mb-3">
            {project.tagline}
          </p>
          
          {/* Tags - Limited */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map(tag => (
              <span 
                key={tag} 
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      </Link>
    </motion.div>
  )
}
