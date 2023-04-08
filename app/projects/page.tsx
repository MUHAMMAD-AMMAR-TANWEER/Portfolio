'use client'
import AnimatedText from '../../components/AnimatedText'
import Layout from '../../components/Layout'
import React from 'react'
import Link from 'next/link'
import next from 'next/types'
import Image from 'next/image'
import { GithubIcon } from '../../components/Icons'
import FeatureProjectOneImage from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Project1 from '../../public/images/projects/devdreaming.jpg'

import { motion } from 'framer-motion'
import TransitionEffect from '../../components/TransitionEffect'

const FramerImage = motion(Image)
const Project = ({
  type,
  title,
  img,
  link,
  github,
}: {
  type: any
  title: any
  img: any
  link: any
  github: any
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
      <div
        className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black dark:bg-light 
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark  font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light md:text-base "
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className=" rounded-full dark:bg-light" />
          </Link>
        </div>
      </div>
    </article>
  )
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: any
  title: any
  summary: any
  img: any
  link: any
  github: any
}) => {
  return (
    <article
      className="w-full rounded-br-2xl flex items-center justify-between rounded-3xl border border-solid border-black bg-light shadow-2xl dark:border-light dark:bg-dark  p-12 relative
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-[100%] xs-rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary  dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="rounded-full dark:bg-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded bg-black text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Redux. It shows details regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={FeatureProjectOneImage}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Dev Dream"
                link="/"
                github="/"
                type="Normal Project"
                img={FeatureProjectOneImage}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              {' '}
              <Project
                title="Dev Dream"
                link="/"
                github="/"
                type="Normal Project"
                img={FeatureProjectOneImage}
              />
            </div>
            <div className="col-span-12">
              {' '}
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Redux. It shows details regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={FeatureProjectOneImage}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              {' '}
              <Project
                title="Dev Dream"
                link="/"
                github="/"
                type="Normal Project"
                img={FeatureProjectOneImage}
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              {' '}
              <Project
                title="Dev Dream"
                link="/"
                github="/"
                type="Normal Project"
                img={FeatureProjectOneImage}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
