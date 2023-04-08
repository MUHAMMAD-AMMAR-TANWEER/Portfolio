'use client'
import React, { useRef, useEffect } from 'react'
import Layout from '../../components/Layout'
import AnimatedText from '../../components/AnimatedText'
import Image from 'next/image'
import ProfileImage from '../../public/images/profile/sirAdil.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'
import Education from '../../components/Education'
import TransitionEffect from '../../components/TransitionEffect'

const AnimatedNumbers = ({ value }: any) => {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="m-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                With a passion for cutting-edge technologies, I have been on a
                journey of continuous learning and exploration in the field of
                Artificial Intelligence, Blockchain, and Web3 projects. My
                journey began in 2018 when I delved into the world of AI,
                building a strong foundation in machine learning algorithms and
                deep learning frameworks.In 2019, I ventured into the world of
                freelancing, working on various AI projects for clients
                worldwide. I gained hands-on experience in developing
                intelligent solutions for real-world challenges, leveraging my
                skills in natural language processing, computer vision, and
                predictive modeling.
              </p>
              <p className="font-medium my-4">
                In 2021, I immersed myself in the exciting world of blockchain
                and web3 projects. I honed my skills in writing smart contracts,
                building decentralized applications (dApps), and exploring the
                possibilities of decentralized finance (DeFi) and non-fungible
                tokens (NFTs). I am proud to have worked on projects using
                platforms such as Ethereum, Solidity, and other blockchain
                technologies, and have gained a deep understanding of the
                potential of blockchain technology in disrupting industries and
                driving innovation.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-light p-8 dark:bg-black dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-light " />
              <Image
                src={ProfileImage}
                alt="Profile Image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capital text-black/75 dark:text-light/75 
                  xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capital text-black/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capital text-black/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Total Reviews
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
