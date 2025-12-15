'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Smooth spring values for mouse movement
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  // Parallax transforms for background elements
  const blob1X = useTransform(smoothMouseX, [-500, 500], [-30, 30])
  const blob1Y = useTransform(smoothMouseY, [-500, 500], [-30, 30])
  const blob2X = useTransform(smoothMouseX, [-500, 500], [20, -20])
  const blob2Y = useTransform(smoothMouseY, [-500, 500], [20, -20])
  const blob3X = useTransform(smoothMouseX, [-500, 500], [-15, 15])
  const blob3Y = useTransform(smoothMouseY, [-500, 500], [15, -15])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Staggered letter animation for name
  const nameLetters = 'Yiduo Wang'.split('')
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-100"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large coral blob - top right */}
        <motion.div
          style={{ x: blob1X, y: blob1Y }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-60"
        >
          <div className="w-full h-full blob bg-gradient-to-br from-coral-200 via-coral-300 to-golden-200 animate-float" />
        </motion.div>
        
        {/* Sage blob - bottom left */}
        <motion.div
          style={{ x: blob2X, y: blob2Y }}
          className="absolute -bottom-32 -left-20 w-[500px] h-[500px] opacity-50"
        >
          <div className="w-full h-full blob-1 bg-gradient-to-br from-sage-200 via-sage-300 to-cream-300 animate-float-delayed" />
        </motion.div>
        
        {/* Golden blob - center right */}
        <motion.div
          style={{ x: blob3X, y: blob3Y }}
          className="absolute top-1/3 right-10 w-[300px] h-[300px] opacity-40"
        >
          <div className="w-full h-full blob-2 bg-gradient-to-br from-golden-200 via-golden-300 to-coral-100 animate-float-slow" />
        </motion.div>

        {/* Additional subtle shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-coral-400/30 animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-sage-400/30 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-golden-400/30 animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Name */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-hero font-display font-bold mb-6 perspective-1000"
          >
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`inline-block ${letter === ' ' ? 'w-4 md:w-8' : ''} ${
                  index < 5 ? 'text-charcoal-900' : 'text-gradient-coral'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-subtitle text-charcoal-600 mb-4 max-w-3xl mx-auto"
          >
            Designing at the intersection of{' '}
            <span className="text-coral-500 font-medium">business strategy</span>{' '}
            and{' '}
            <span className="text-sage-500 font-medium">human experience</span>
          </motion.p>

          {/* Journey Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-cream-300 mb-12"
          >
            <span className="text-sm text-charcoal-600">Finance & Marketing</span>
            <svg className="w-4 h-4 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-sm font-medium text-coral-600">Human-Centered Design</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.a
              href="/work"
              className="btn btn-primary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
            </motion.a>
            <motion.a
              href="/about"
              className="btn btn-outline"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              About Me
            </motion.a>
          </motion.div>

          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-64 h-80 md:w-80 md:h-96"
          >
            <div className="absolute inset-0 blob bg-gradient-to-br from-coral-300 via-golden-200 to-sage-300 opacity-60 animate-morph" />
            <div 
              className="absolute inset-4 blob placeholder-image flex items-center justify-center text-charcoal-500"
              data-label="Portrait Photo"
            >
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cream-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-charcoal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm text-charcoal-400">400 × 500px</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs text-charcoal-500 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-charcoal-300 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-coral-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
