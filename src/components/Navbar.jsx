import React, { useEffect } from 'react'  
import ReactSwitch from 'react-switch'
import { UseGlobalContext } from './Context'
import { Link } from 'react-router-dom'

const Navbar = () => {

  let {toggleTheme, theme, checkedIconfile, uncheckedIconfile, logo,profile} = UseGlobalContext()

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className='navbar'>
      {/* Navbarda logo va profil button faqat mobil versiyada ko'rinadi */}
      <div className="navbar-mobile">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-profile">
          <img src={profile} alt="" />
        </button>
      </div>
      
      {/* Theme switch */}
      <div className='switchBtn'>
      <ReactSwitch 
        onChange={toggleTheme} 
        checked={theme === 'dark'} 
        checkedIcon={checkedIconfile} 
        uncheckedIcon={uncheckedIconfile} 
        onColor='#14021b' 
        onHandleColor='#14021b' 
        offColor='#FFF' 
        offHandleColor='#fadada' 
      />
      </div>
    </div>
  )
}

export default Navbar
