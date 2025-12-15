'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Project data
const projectsData: Record<string, {
  title: string
  tagline: string
  description: string
  tags: string[]
  color: string
  year: string
  hasVideo: boolean
  overview: {
    challenge: string
    outcome: string
    role: string
  }
  sections: Array<{
    title: string
    content: string
    type?: 'text' | 'image' | 'video'
  }>
  reflection: string
  learnings: string[]
}> = {
  truecost: {
    title: 'TrueCost',
    tagline: 'Anti-Dark Pattern Fintech Widget',
    description: 'A browser extension/web-based checkout simulation that intervenes during "impulse buy" moments, visualizing the real cost of BNPL decisions in terms of long-term financial goals.',
    tags: ['Value Sensitive Design', 'Fintech', 'React', 'JavaScript', 'Ethical Design'],
    color: 'coral',
    year: '2024',
    hasVideo: true,
    overview: {
      challenge: 'Design a value-sensitive intervention that helps young adults visualize the real cost of Buy Now, Pay Later decisions without being paternalistic.',
      outcome: 'A working prototype demonstrating "reformed marketer" thinking—using code to protect user wellbeing rather than exploit it.',
      role: 'End-to-end design & development: Research, UI/UX, Frontend coding',
    },
    sections: [
      {
        title: 'The Problem Space',
        content: 'BNPL services like Klarna and Afterpay have exploded among Gen Z users. While marketed as "interest-free," these services obscure risk and exploit impulse buying psychology. Standard "Buy in 4" buttons use dark patterns—reducing friction to increase conversion at the cost of user financial wellbeing. In Marketing, I learned these techniques. Now I wanted to design against them.',
      },
      {
        title: 'Design Approach',
        content: 'Value Sensitive Design (VSD) guided this project. Rather than removing choice, I focused on "informed consent"—helping users understand implications before deciding. The key insight: people don\'t need to be told "no," they need to see consequences visualized in personally meaningful terms.',
      },
      {
        title: 'The Intervention',
        content: 'When users click "Pay in 4," a modal appears showing a data visualization: "If you invest this $200 instead, here is its value in 5 years." Users can also opt for a "Cool Down" timer—a gentle nudge introducing healthy friction.',
      },
      {
        title: 'Technical Implementation',
        content: 'Built with React for the checkout simulation, Chart.js for investment growth visualization, and vanilla JavaScript for the compound interest calculator. Designed for potential expansion as a browser extension.',
      },
    ],
    reflection: '"In Marketing, I learned how to reduce friction to increase sales. For this project, I used my coding skills to reintroduce friction to increase user wellbeing. I moved from maximizing ROI to maximizing user agency."',
    learnings: [
      'Value Sensitive Design offers a framework for ethical intervention',
      'Dark patterns work because they\'re invisible—making consequences visible changes behavior',
      'Technical skills amplify design impact when used intentionally',
    ],
  },
  rurallens: {
    title: 'RuralLens',
    tagline: 'Cross-Cultural Trust Translator',
    description: 'A mobile-first web tool that translates complex "Urban/Scientific" product information into "Rural/Trust-based" visual languages, directly addressing the accessibility gaps I observed during my Jiaxian internship.',
    tags: ['Information Accessibility', 'Cross-Cultural Design', 'Python', 'Streamlit', 'WEIRD Bias'],
    color: 'sage',
    year: '2024',
    hasVideo: true,
    overview: {
      challenge: 'Design for "Non-WEIRD" (Western, Educated, Industrialized, Rich, Democratic) populations—translating technical information into culturally appropriate visual formats.',
      outcome: 'A working prototype that maps scientific nutrition data to locally meaningful visual representations, addressing the trust deficit in standard labeling.',
      role: 'Research, Design, Python Development',
    },
    sections: [
      {
        title: 'Origin: The Ms. Zhang Moment',
        content: 'During my internship at Jiaxian Food Technology, I met Ms. Zhang—a 58-year-old rural consumer who distrusted our yogurt\'s nutrition label. "The numbers mean nothing to me," she said. "I trust what my neighbors tell me." This moment revealed that standard information design excludes entire populations.',
      },
      {
        title: 'Research Foundation',
        content: 'I conducted 30 surveys and 20 interviews with rural Chinese consumers. Key findings: numbers alone don\'t convey meaning; trust comes from relatable sources; visual comparison (not absolute values) drives understanding.',
      },
      {
        title: 'The Translation Algorithm',
        content: 'Users select a product category and input standard data (e.g., "Sugar: 12g"). The algorithm maps these to local mental models—instead of showing "12g Sugar," the screen displays 3 Sugar Cubes or a color-coded Health Scale. A "Neighbor Verified" badge addresses the trust deficit.',
      },
      {
        title: 'Technical Implementation',
        content: 'Built with Streamlit (Python) for rapid UI prototyping. The core is a JSON mapping structure translating "Scientific Terms" to "Rural Dialect/Icons." This architecture allows for cultural customization.',
      },
    ],
    reflection: '"My internship taught me that standard information design excludes rural populations. I didn\'t want to just write a report about it; I wanted to build a solution. I coded RuralLens to prove that accessibility is a code problem, not just a design problem."',
    learnings: [
      'Universal design often reflects WEIRD assumptions',
      'Trust is a design element that must be intentionally built',
      'Local mental models are more powerful than "objective" data',
    ],
  },
  'sexy-sticks': {
    title: 'Sexy Sticks',
    tagline: 'Fast-casual dining reimagined',
    description: 'Award-winning service design for a differentiated restaurant experience, including complete brand identity, service blueprint, and operational flow.',
    tags: ['Service Design', 'Branding', 'Best Pitch Award', 'Operations'],
    color: 'golden',
    year: '2024',
    hasVideo: false,
    overview: {
      challenge: 'Design a differentiated fast-casual restaurant experience that stands out in a crowded market while maintaining operational efficiency.',
      outcome: 'Best Pitch Award for complete service concept including brand system, service blueprint, and customer journey.',
      role: 'Service Design Lead, Brand Strategy',
    },
    sections: [
      {
        title: 'Research & Discovery',
        content: 'Conducted competitive analysis of the fast-casual space, identifying gaps in the market for experiential dining that maintains speed. User interviews revealed desire for "Instagram-worthy" experiences without the wait times of full-service restaurants.',
      },
      {
        title: 'Brand Identity',
        content: 'Developed a provocative brand name that creates instant memorability. The visual identity balances playfulness with quality—bold typography, warm color palette, and distinctive packaging design.',
      },
      {
        title: 'Service Blueprint',
        content: 'Mapped every touchpoint from discovery to post-visit, identifying moments of delight and potential friction. Designed operational flows that maintain 10-minute service while creating memorable interactions.',
      },
      {
        title: 'Customer Journey',
        content: 'Created detailed journey maps for different user personas. Built in "surprise and delight" moments at key touchpoints—customized packaging, photo opportunities, and loyalty program integration.',
      },
    ],
    reflection: 'This project taught me that service design is systems thinking applied to experiences. Every operational decision affects customer perception, and every brand element must work harder than it appears.',
    learnings: [
      'Service design connects brand promise to operational reality',
      'Memorability comes from intentional friction, not just efficiency',
      'Cross-functional collaboration is essential for implementation',
    ],
  },
  'high-epic': {
    title: 'High Epic',
    tagline: 'Ready-to-eat hotpot for Gen Z',
    description: 'Culturally relevant CPG product design with sustainability focus. From consumer insights to packaging design to go-to-market strategy.',
    tags: ['CPG Design', 'Sustainability', 'Brand Strategy', 'Packaging'],
    color: 'navy',
    year: '2024',
    hasVideo: false,
    overview: {
      challenge: 'Create a culturally authentic ready-to-eat hotpot product that appeals to Gen Z values while maintaining sustainability commitments.',
      outcome: 'Complete product concept with sustainability-focused packaging and go-to-market strategy.',
      role: 'Consumer Research, Brand Strategy, Packaging Direction',
    },
    sections: [
      {
        title: 'Consumer Insights',
        content: 'Gen Z consumers seek authenticity in cultural products while expecting environmental responsibility. Research revealed tension between convenience and sustainability—they want both, without compromise.',
      },
      {
        title: 'Product Development',
        content: 'Collaborated on formulation that balances authentic flavor profiles with ready-to-eat convenience. Key innovation: modular packaging that allows customization of spice levels and ingredient combinations.',
      },
      {
        title: 'Sustainable Packaging',
        content: 'Designed packaging system that minimizes plastic while maintaining product integrity. Recyclable trays, compostable sachets, and clear disposal instructions address Gen Z environmental concerns.',
      },
      {
        title: 'Brand Positioning',
        content: 'Positioned as "cultural comfort food meets modern values." Marketing strategy emphasizes authenticity, sustainability, and social sharing—key Gen Z purchase drivers.',
      },
    ],
    reflection: 'Balancing cultural authenticity with innovation requires deep understanding of what makes a tradition meaningful versus merely familiar. Sustainability can\'t be an afterthought—it must be designed into the product from the start.',
    learnings: [
      'Cultural products require balancing tradition with evolution',
      'Gen Z sees sustainability as baseline, not differentiator',
      'Packaging is a primary communication channel for CPG',
    ],
  },
  '222': {
    title: '222',
    tagline: 'Building bridges to meaningful connection',
    description: 'Community discovery platform with trust-centered UX, designed to combat social isolation through authentic in-person connections.',
    tags: ['UX Design', 'Social Platform', 'Trust Design', 'Mobile'],
    color: 'coral',
    year: '2023',
    hasVideo: false,
    overview: {
      challenge: 'Combat social isolation by facilitating authentic community connections in a landscape where digital platforms often increase loneliness.',
      outcome: 'Platform concept with trust-centered onboarding and gradual disclosure mechanisms.',
      role: 'UX Research, Interaction Design, Journey Mapping',
    },
    sections: [
      {
        title: 'Problem Research',
        content: 'Studied the loneliness epidemic and why existing social platforms fail at genuine connection. Key insight: platforms optimize for engagement, not relationship quality. Trust is systematically undermined by viral design patterns.',
      },
      {
        title: 'Trust Architecture',
        content: 'Designed onboarding that builds trust gradually—users disclose interests before identity, see community values before members, and earn connection privileges through participation quality.',
      },
      {
        title: 'Matching & Discovery',
        content: 'Created matching algorithm UX that prioritizes compatibility over engagement. Users see "why" they match, not just "who"—making the algorithm transparent and trustworthy.',
      },
      {
        title: 'In-Person Transition',
        content: 'Designed features that facilitate movement from digital to physical—meetup suggestions based on shared interests, safety features for first meetings, and post-event reflection prompts.',
      },
    ],
    reflection: 'Designing for vulnerability requires extreme intentionality. Every interaction either builds or erodes trust. The ethics of social algorithm design became central to this project.',
    learnings: [
      'Trust is built through transparency, not just privacy',
      'Social platforms must design for connection quality, not quantity',
      'Facilitating vulnerability requires safety-first design',
    ],
  },
  takeabreak: {
    title: 'TakeABreak',
    tagline: 'AI-assisted emotional wellness',
    description: 'AI-powered communication and wellness companion for relationships, featuring trauma-informed design with ethical AI interaction patterns.',
    tags: ['AI/ML', 'Mental Health', 'Ethical Design', 'Mobile'],
    color: 'sage',
    year: '2023',
    hasVideo: false,
    overview: {
      challenge: 'Support relationship health and individual mental wellness through AI, while navigating the ethical implications of technology in intimate emotional spaces.',
      outcome: 'Design concept featuring trauma-informed interaction patterns and ethical AI communication frameworks.',
      role: 'UX Design, Ethical AI Research, Prototyping',
    },
    sections: [
      {
        title: 'Research on Mental Health Tech',
        content: 'Studied barriers to mental health support: stigma, cost, accessibility. Also researched harms of existing apps—gamification of wellbeing, data exploitation, inappropriate AI responses to crisis.',
      },
      {
        title: 'Trauma-Informed Design',
        content: 'Built design principles from trauma-informed care: safety first, trustworthiness through transparency, choice and control, collaboration, and cultural sensitivity. Every interaction evaluated against these principles.',
      },
      {
        title: 'AI Interaction Ethics',
        content: 'Designed guardrails for AI communication: clear disclosure of AI nature, handoff protocols for crisis, non-judgmental language frameworks, and explicit limitations. AI as tool, not replacement.',
      },
      {
        title: 'Dual-Mode Design',
        content: 'Created separate experiences for individual wellness and couple communication—recognizing that relationship dynamics require different design patterns than individual reflection.',
      },
    ],
    reflection: 'The responsibility of mental health technology became deeply personal through this project. AI can\'t replace human connection, but thoughtfully designed tools can lower barriers to seeking support.',
    learnings: [
      'Mental health tech requires clinical collaboration',
      'AI disclosure must be prominent and repeated',
      'Ethical implications must be centered, not considered later',
    ],
  },
}

const colorClasses = {
  coral: {
    bg: 'bg-coral-50',
    accent: 'text-coral-500',
    tag: 'bg-coral-100 text-coral-700',
    border: 'border-coral-200',
  },
  sage: {
    bg: 'bg-sage-50',
    accent: 'text-sage-600',
    tag: 'bg-sage-100 text-sage-700',
    border: 'border-sage-200',
  },
  golden: {
    bg: 'bg-golden-50',
    accent: 'text-golden-600',
    tag: 'bg-golden-100 text-golden-700',
    border: 'border-golden-200',
  },
  navy: {
    bg: 'bg-navy-50',
    accent: 'text-navy-600',
    tag: 'bg-navy-100 text-navy-700',
    border: 'border-navy-200',
  },
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Link href="/work" className="btn btn-primary">
            Back to Work
          </Link>
        </div>
      </div>
    )
  }

  const colors = colorClasses[project.color as keyof typeof colorClasses]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className={`section ${colors.bg} relative overflow-hidden`}>
        <div className="container-custom relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Work
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-charcoal-400">{project.year}</span>
                {project.hasVideo && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-coral-500 text-white text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h1 className={`text-hero font-display mb-4 ${colors.accent}`}>
                {project.title}
              </h1>
              <p className="text-subtitle text-charcoal-700 font-medium mb-4">
                {project.tagline}
              </p>
              <p className="text-body text-charcoal-600 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.hasVideo ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal-800 to-charcoal-900">
                    <div className="text-center text-white/70">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Video Demo</p>
                      <p className="text-sm opacity-60">Coming soon</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="placeholder-image aspect-video rounded-2xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cream-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-charcoal-400">Project Hero Image</p>
                    <p className="text-xs text-charcoal-400">1200 × 600px</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute top-20 left-0 w-64 h-64 blob organic-shape-coral opacity-15" />
        <div className="absolute bottom-10 right-0 w-80 h-80 blob-1 organic-shape-sage opacity-15" />
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="card bg-cream-50">
                <h3 className="font-display font-semibold text-coral-500 mb-2">Challenge</h3>
                <p className="text-charcoal-600 text-sm">{project.overview.challenge}</p>
              </div>
              <div className="card bg-cream-50">
                <h3 className="font-display font-semibold text-sage-600 mb-2">Outcome</h3>
                <p className="text-charcoal-600 text-sm">{project.overview.outcome}</p>
              </div>
              <div className="card bg-cream-50">
                <h3 className="font-display font-semibold text-navy-600 mb-2">My Role</h3>
                <p className="text-charcoal-600 text-sm">{project.overview.role}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="section bg-cream-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {project.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-16 last:mb-0"
              >
                <h2 className="text-2xl font-display font-semibold text-charcoal-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-body text-charcoal-600 mb-6">
                  {section.content}
                </p>
                <div className="placeholder-image aspect-video rounded-xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg className="w-10 h-10 mx-auto text-charcoal-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-charcoal-400">Section Image</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-section font-display mb-8 text-center">Reflection</h2>
              <blockquote className={`text-xl text-charcoal-700 italic text-center mb-12 p-8 ${colors.bg} rounded-2xl border-l-4 ${colors.border}`}>
                {project.reflection}
              </blockquote>

              <h3 className="text-xl font-display font-semibold text-charcoal-900 mb-6">
                Key Learnings
              </h3>
              <ul className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${colors.tag} flex items-center justify-center text-sm font-medium`}>
                      {index + 1}
                    </span>
                    <span className="text-charcoal-600">{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-cream-100 border-t border-cream-300">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link href="/work" className="btn btn-outline">
              ← All Projects
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
