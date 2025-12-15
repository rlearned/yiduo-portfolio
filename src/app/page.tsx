'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { AboutPreview } from '@/components/sections/AboutPreview'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef}>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      
      {/* CTA Section */}
      <section className="section bg-mesh relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-section font-display mb-6">
              Let's Create Together
            </h2>
            <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto mb-10">
              I'm excited to bring my unique perspective to HCI research and design. 
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="/work">
                <motion.button
                  className="btn btn-outline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 blob organic-shape-coral opacity-30" />
        <div className="absolute bottom-10 right-20 w-96 h-96 blob-1 organic-shape-sage opacity-30" />
      </section>
    </div>
  )
}
