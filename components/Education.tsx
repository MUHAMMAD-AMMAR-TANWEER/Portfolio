import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({
  type,
  time,
  place,
  info,
}: {
  type: string
  place: string
  info: string
  time: string
}) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="m-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      />
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-light/75  xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-light origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
          <Details
            type="Bachelors In Electrical Engineering"
            time="2018-2022"
            place=" NED University Karachi"
            info="Done with electrical engineering with specialization in power generation and power distribution beside it completed some AI courses to move towards AI"
          />

          <Details
            type="Intermediate"
            time="2016-2018"
            place="Adamjee Govt Science College"
            info="Studied Pre-Engineering in High School with Maths as an optional subject to select engineering"
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
