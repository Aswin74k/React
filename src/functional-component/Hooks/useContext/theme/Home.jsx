import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
    const {darkMode, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1>{darkMode ? 'Darkmode' : 'Lightmode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Home
