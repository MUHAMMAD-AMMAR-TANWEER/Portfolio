'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './logo'
import { useRouter, usePathname } from 'next/navigation'
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
const CustomMobileLink = ({
  href,
  title,
  className,
  toggle,
}: {
  href: any
  title: string
  className: string
  toggle: any
}) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname == href ? 'w-full' : 'w-0'
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string
  title: string
  className: string
}) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname == href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 font-semibold" />

          <CustomLink
            href="/about"
            title="About"
            className="mx-4 font-semibold"
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4 font-semibold"
          />
          <CustomLink
            href="/articles"
            title="Articles"
            className="mx-4 font-semibold"
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon className="" />
          </motion.a>
          <motion.a
            href="/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon className="" />
          </motion.a>
          <motion.a
            href="/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <GithubIcon className="" />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-black text-light' : 'bg-light text-black'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-black'} />
            ) : (
              <MoonIcon className={'fill-black'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=" font-semibold"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/about"
              title="About"
              className="font-semibold"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=" font-semibold"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=" font-semibold"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="/"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon className="" />
            </motion.a>
            <motion.a
              href="/"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon className="" />
            </motion.a>
            <motion.a
              href="/"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <GithubIcon className="bg-light rounded-full dark:bg-dark" />
            </motion.a>
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-black text-light' : 'bg-light text-black'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-black'} />
              ) : (
                <MoonIcon className={'fill-black'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
