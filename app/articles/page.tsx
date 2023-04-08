'use client'
import React, { useRef } from 'react'
import Layout from '../../components/Layout'
import AnimatedText from '../../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/create modal component in react using react portals.png'
import article4 from '../../public/images/articles/smooth scrolling in reactjs.png'
import article5 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article6 from '../../public/images/articles/What is Redux with easy explanation.png'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '../../components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({
  title,
  img,
  link,
}: {
  title: string
  img: any
  link: string
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const imgRef = useRef<HTMLImageElement>(null)

  function handleMouse(event: any) {
    console.log(imgRef.current!.classList)

    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block'
      x.set(event.pageX)
      y.set(-10)
    }
  }

  function handleMouseLeave(event: any) {
    if (imgRef.current) {
      imgRef.current.style.display = 'none'
      x.set(0)
      y.set(0)
    }
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y, display: 'none' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto  absolute rounded-lg md:!hidden"
      />
    </Link>
  )
}

const Article = ({
  img,
  title,
  date,
  link,
}: {
  img: any
  title: string
  date: string
  link: string
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-black first:mt-0 border border-solid border-black  dark:bg-dark dark:text-light dark:border-light  border-r-4 border-b-4
      sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticles = ({
  img,
  title,
  time,
  summary,
  link,
}: {
  img: any
  title: any
  time: any
  summary: any
  link: any
}) => {
  return (
    <>
      <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border boder-solid border-black dark:border-light   rounded">
        <div className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black dark:bg-light " />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
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
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light xs:text-lg">
          {title}
        </h2>

        <p className="text-sm mb-2 dark:text-light ">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
      </li>
    </>
  )
}

const articles = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words that can change the world"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticles
              img={article1}
              title="Build a custom pagination component In React Js from Scratch"
              time="9 min read "
              summary="Learn how to build a custom pagination component in react from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              link="/"
            />

            <FeaturedArticles
              img={article2}
              title="Build a custom pagination component In React Js from Scratch"
              time="9 min read "
              summary="Learn how to build a custom pagination component in react from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light ">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article4}
            />
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article4}
            />
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Form Validation In ReactJs: Built and Reusable Custom Hook for Inputs And Error Handling"
              date="March, 22, 2023"
              link="/"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
