import React from 'react'

const Layout = ({
  children,
  className,
}: {
  children: any
  className: string
}) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-black p-32
      xl:p-24 lg:p-16 md:p-12 sm:p-8 
      
      ${className} `}
    >
      {children}
    </div>
  )
}

export default Layout
