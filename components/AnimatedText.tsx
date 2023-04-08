'use client'
import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const AnimatedText = ({
  text,
  className,
}: {
  text: string
  className: string
}) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light sm:py-0">
      <motion.h1
        className={`inline-block w-full text-black font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
