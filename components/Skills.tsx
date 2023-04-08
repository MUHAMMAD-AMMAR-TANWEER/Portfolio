import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }: { name: string; x: any; y: any }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-light  shadow-black cursor-pointer  dark:bg-light dark:text-dark
      py-3 px-6 absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-black text-light p-8 shadow-black dark:bg-light dark:text-dark  cursor-pointer
          lg:p-6 md:p-4 xs:text-xs xs:p-2
          "
          whileHover={{ scale: 1.05 }}
        >
          Web3
        </motion.div>
        <Skill name="AI" x="-20vw" y="2vw" />
        <Skill name="Meta" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="20vw" y="6vw" />
        <Skill name="API" x="0vw" y="12vw" />
        <Skill name="Server" x="-20vw" y="-15vw" />
        <Skill name="React" x="15vw" y="-12vw" />
        <Skill name="CV" x="32vw" y="-5vw" />
        <Skill name="AWS" x="0vw" y="-20vw" />
        <Skill name="ETH" x="-25vw" y="18vw" />
        <Skill name="NEXT" x="18vw" y="18vw" />
      </div>
    </div>
  )
}

export default Skills
