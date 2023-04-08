import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-schema: dark)'
  const [mode, setMode] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userProf = window.localStorage.getItem('theme')

    const handleChange = () => {
      if (userProf) {
        let check = userProf === 'dark' ? 'dark' : 'light'
        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        let check = userProf === 'dark' ? 'dark' : 'light'
        setMode(check)
        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
    handleChange()

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  })

  return [mode, setMode] as const
}

export default useThemeSwitcher
