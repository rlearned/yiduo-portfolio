'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    id: 1,
    title: 'Teaching Assistant & Grader',
    company: 'Foster School of Business, UW',
    date: 'Sep 2025 – Dec 2025',
    location: 'Seattle, WA',
    type: 'Academic',
    description: 'Facilitating learning for 30+ diverse students while designing equitable assessment rubrics.',
    highlights: [
      'Facilitated learning for 30+ students across diverse backgrounds',
      'Designed equitable assessment rubrics ensuring fair evaluation',
      'Collaborated on curriculum refinement based on student feedback',
      'Bridged gap between business theory and practical application',
    ],
    skills: ['Teaching', 'Assessment Design', 'Communication', 'Curriculum Development'],
    color: 'coral',
  },
  {
    id: 2,
    title: 'Barista & Service Staff',
    company: 'Starbucks, UW Campus',
    date: 'Mar 2024 – Jun 2025',
    location: 'Seattle, WA',
    type: 'Service',
    description: 'Developed empathy through 60+ daily customer interactions, identifying operational insights.',
    highlights: [
      'Served 60+ customers daily, developing deep empathy for diverse user needs',
      'Observed elderly customer struggling with mobile ordering—sparked interest in accessible design',
      'Identified and communicated operational improvement opportunities to management',
      'Cross-trained in multiple positions, understanding end-to-end service delivery',
    ],
    skills: ['Customer Service', 'Empathy', 'Operations', 'Team Collaboration'],
    color: 'sage',
    story: {
      title: 'The Moment That Changed My Path',
      content: 'One afternoon, an elderly regular approached me, frustrated. She couldn\'t navigate the mobile app to reload her gift card—a task that took younger customers seconds. "I just want my coffee," she said, defeated. In that moment, I saw how design excludes people. This wasn\'t about age—it was about design choices that privileged certain users over others. I started noticing these moments everywhere.',
    },
  },
  {
    id: 3,
    title: 'Product Manager Intern',
    company: 'Hunan Jiaxian Food Technology',
    date: 'Jun 2025 – Aug 2025',
    location: 'Changsha, China',
    type: 'Industry',
    description: 'Led user research and synthesized insights into product recommendations for rural markets.',
    highlights: [
      'Led user research: 30 surveys, 20 in-depth interviews with rural consumers',
      'Synthesized research into actionable product recommendations',
      'Designed packaging iterations based on user feedback',
      'Collaborated with cross-functional teams on product development',
    ],
    skills: ['User Research', 'Product Management', 'Data Synthesis', 'Stakeholder Management'],
    color: 'golden',
    story: {
      title: 'The Ms. Zhang Moment',
      content: 'During a field interview, I met Ms. Zhang, a 58-year-old consumer from rural Hunan. She picked up our yogurt, looked at the nutrition label, and put it back. "I don\'t understand these numbers," she said. "I trust what my neighbors tell me." In that moment, I realized that our "universal" information design excluded millions of people like Ms. Zhang. This became the foundation for my Lens project.',
    },
  },
  {
    id: 4,
    title: 'Business & Operations Intern',
    company: 'Hong Kong Microtecks Technology',
    date: 'Jul 2024 – Aug 2024',
    location: 'Hong Kong',
    type: 'Industry',
    description: 'Redesigned cross-departmental workflows and created performance dashboards for leadership.',
    highlights: [
      'Redesigned cross-departmental workflows reducing handoff friction',
      'Created performance dashboards providing leadership with actionable metrics',
      'Led process improvement proposals that were adopted company-wide',
      'Documented and standardized operational procedures',
    ],
    skills: ['Process Design', 'Data Visualization', 'Systems Thinking', 'Change Management'],
    color: 'navy',
  },
  {
    id: 5,
    title: 'Marketing Intern',
    company: 'Zhuhai Protoga Biotech',
    date: 'Jun 2023 – Aug 2023',
    location: 'Zhuhai, China',
    type: 'Industry',
    description: 'User-centered brand positioning training and designing accessible marketing materials.',
    highlights: [
      'Received training in user-centered brand positioning',
      'Designed marketing materials with accessibility considerations',
      'Conducted competitive analysis informing positioning strategy',
      'Collaborated with design team on visual communications',
    ],
    skills: ['Marketing Strategy', 'Brand Positioning', 'Visual Design', 'Competitive Analysis'],
    color: 'coral',
  },
]

const colorClasses = {
  coral: {
    bg: 'bg-coral-50',
    accent: 'text-coral-500',
    border: 'border-coral-200',
    dot: 'bg-coral-500',
    light: 'bg-coral-100',
  },
  sage: {
    bg: 'bg-sage-50',
    accent: 'text-sage-600',
    border: 'border-sage-200',
    dot: 'bg-sage-500',
    light: 'bg-sage-100',
  },
  golden: {
    bg: 'bg-golden-50',
    accent: 'text-golden-600',
    border: 'border-golden-200',
    dot: 'bg-golden-500',
    light: 'bg-golden-100',
  },
  navy: {
    bg: 'bg-navy-50',
    accent: 'text-navy-600',
    border: 'border-navy-200',
    dot: 'bg-navy-500',
    light: 'bg-navy-100',
  },
}

export default function ExperiencePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

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
              Experience
            </span>
            <h1 className="text-hero font-display mb-6">
              Professional <span className="text-gradient-coral">Journey</span>
            </h1>
            <p className="text-subtitle text-charcoal-600">
              From service roles to product management, each experience has shaped 
              my understanding of how systems serve—or fail—the people who use them.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative */}
        <div className="absolute top-10 right-10 w-64 h-64 blob organic-shape-sage opacity-20" />
        <div className="absolute bottom-20 left-10 w-80 h-80 blob-1 organic-shape-coral opacity-20" />
      </section>

      {/* Timeline Section */}
      <section className="section bg-white relative">
        <div className="container-custom">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-32 bottom-32 w-px bg-cream-300 hidden lg:block" />
          
          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color as keyof typeof colorClasses]
              const isExpanded = expandedId === exp.id
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 lg:mb-16 ${
                    isEven ? 'lg:pr-[52%]' : 'lg:pl-[52%]'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${colors.dot} border-4 border-white shadow-md z-10`} />
                  
                  {/* Card */}
                  <motion.article
                    className={`${colors.bg} border ${colors.border} rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300`}
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    whileHover={{ y: -2, boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs text-charcoal-400 mb-1 block">{exp.date}</span>
                        <h3 className={`text-xl font-display font-semibold ${colors.accent}`}>
                          {exp.title}
                        </h3>
                        <p className="text-charcoal-700 font-medium">{exp.company}</p>
                        <p className="text-sm text-charcoal-500">{exp.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.accent}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-charcoal-600 mb-4">{exp.description}</p>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 text-sm text-charcoal-500">
                      <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-cream-300 mt-4">
                        {/* Story section if exists */}
                        {exp.story && (
                          <div className="mb-6 p-4 bg-white/50 rounded-xl">
                            <h4 className="font-display font-semibold text-charcoal-900 mb-2">
                              {exp.story.title}
                            </h4>
                            <p className="text-charcoal-600 text-sm italic">
                              "{exp.story.content}"
                            </p>
                          </div>
                        )}

                        {/* Highlights */}
                        <h4 className="font-display font-semibold text-charcoal-900 mb-3">
                          Key Contributions
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-charcoal-600 text-sm">
                              <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${colors.dot} mt-2`} />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <h4 className="font-display font-semibold text-charcoal-900 mb-3">
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map(skill => (
                            <span
                              key={skill}
                              className="px-3 py-1 rounded-full bg-white text-charcoal-700 text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.article>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-cream-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 blob organic-shape-golden opacity-15" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-section font-display mb-4">Education</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-sage-100 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-sage-600 mb-1">
                    University of Washington
                  </h3>
                  <p className="text-charcoal-700 font-medium mb-2">
                    B.A. Finance & Marketing (Double Major)
                  </p>
                  <p className="text-charcoal-500 text-sm mb-4">
                    Foster School of Business • Seattle, WA • Expected 2026
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-golden-100 text-golden-700 text-xs font-medium">
                      Dean's List (Every Quarter)
                    </span>
                    <span className="px-3 py-1 rounded-full bg-coral-100 text-coral-700 text-xs font-medium">
                      GPA: 3.82
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-section font-display mb-4">Ready to connect?</h2>
            <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto mb-8">
              I'm currently exploring opportunities in HCI and UX research. 
              Let's discuss how my unique background can contribute to your team.
            </p>
            <a href="/contact">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
