'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 blob organic-shape-coral opacity-30 animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 blob-1 organic-shape-sage opacity-30 animate-float-delayed" />
      <div className="absolute top-1/2 left-10 w-48 h-48 blob-2 organic-shape-golden opacity-20 animate-float-slow" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[150px] md:text-[200px] font-display font-bold leading-none text-gradient-coral"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            404
          </motion.h1>
          
          {/* Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-display font-semibold text-charcoal-900 mb-4"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-charcoal-600 text-lg mb-8 max-w-md mx-auto"
          >
            Looks like you've wandered off the path. Let's get you back to exploring my work.
          </motion.p>
          
          {/* Navigation options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Go Home
              </motion.button>
            </Link>
            <Link href="/work">
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Fun easter egg hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-charcoal-400 text-sm mt-16"
          >
            While you're here... did you know I notice the details others miss? 
            <br />Even 404 pages deserve thoughtful design. 🌟
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
