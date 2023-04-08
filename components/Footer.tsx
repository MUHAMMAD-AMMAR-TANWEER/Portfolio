'use client'
import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-black font-medium text-lg dark:text-light dark:border-light 
    sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build{' '}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark ">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/muhammad-ammar-tanweer-4092a8186/"
            className="underline underline-offset-2"
            target={'_blank'}
          >
            Muhammad Ammar Tanweer
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/muhammad-ammar-tanweer-4092a8186/"
          target={'_blank'}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
