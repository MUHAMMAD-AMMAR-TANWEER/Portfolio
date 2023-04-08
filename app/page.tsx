'use client'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from './page.module.css'
import Layout from '../components/Layout'
import profilePic from '../public/images/profile/developer-pic-1.png'
import AnimatedText from '../components/AnimatedText'
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })
import Link from 'next/link'
import { LinkArrow } from '../components/Icons'
import HireMe from '../components/Hireme'
import BlubImage from '../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '../components/TransitionEffect'
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-black w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="DevImage"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="A Story of My AI and Blockchain Experience"
                className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-small sm:text-xs">
                Welcome to my portfolio website! I&aposm a skilled AI and
                blockchain developer with a passion for solving complex problems
                and driving innovation. With years of experience in developing
                cutting-edge algorithms and systems, I have a proven track
                record of delivering results for my clients. From building
                predictive models to designing scalable blockchain networks, I
                have the expertise and technical know-how to take your business
                to the next level. So whether you&aposre looking for a talented
                developer to join your team or a consultant to help drive your
                business forward, I&aposm here to help. Let&aposs connect and
                see how we can work together!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Myresume.pdf"
                  target={'_blank'}
                  className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg
                 text-lg font-semibold hover:bg-light  hover:text-black border-2 border-solid border-transparent hover:border-black
                 dark:bg-light dark:text-black hover:dark:bg-black hover:dark:text-light hover:dark:border-light
                 md:p-2 md:px-4 md:text-base
                 "
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:ammartanweer7370@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-black underline dark:text-light
                md:text-base
                "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={BlubImage} alt="Blub Image" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
