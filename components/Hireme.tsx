import React from 'react'
import { MyIcon } from './Icons'
import Link from 'next/link'
const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-9 md:buttom-auto  md:absolute sm:right-0
    
    
    "
    >
      <div className="w-64 h-auto flex items-center justify-center relative md:w-24 ">
        <MyIcon
          className={`fill-black relative left-1 bottom-1 m-{-10} animate-spin-slow dark:fill-light `}
        />
        <Link
          href="mailto:ammartanweer7370@gmail.com"
          className="flex items-center justify-center
        absolute left-32 bottom-0.5 top-16 -translate-x-1/2 -translate-y-1/2 bg-black text-light 
        shadow-md border border-solid border-black w-20 h-20  rounded-full font-semibold
        hover:bg-light hover:text-black
         dark:bg-light dark:text-black hover:dark:bg-black hover:dark:text-light hover:dark:border-light
         md:w-12 md:h-12 md:text-[10px]
         "
        >
          Hire me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
