import React, { useEffect, useState } from 'react'  
import ReactSwitch from 'react-switch'
import { UseGlobalContext } from './Context'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [hideMenu,setHideMenu] = useState(true)
  let { toggleTheme, theme, checkedIconfile, uncheckedIconfile, logo, profile, colors } = UseGlobalContext()


  const NavbarMenu = hideMenu ? "Hided" : "Showed"


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
        <button className="navbar-profile" onClick={()=>setHideMenu(!hideMenu)}>
          <img src={profile} alt="" />
        </button>
        <div className='profile-menu' id={NavbarMenu} >
            <Link to={'/settings'}>
              Settings
            </Link>
            <button onClick={()=>{
          sessionStorage.removeItem("log")
          location.reload()
          }} className='logoutBtn-navbar'> 
          Log out
        </button>
        </div>
      </div>
      
      {/* Theme switch */}
      <div className='switchBtn'>
      <ReactSwitch 
        onChange={toggleTheme} 
        checked={theme === 'dark'} 
        checkedIcon={checkedIconfile} 
        uncheckedIcon={uncheckedIconfile} 
        onColor={colors.dark.onColor}
        onHandleColor={colors.dark.onHandleColor}
        offColor={colors.light.offColor}
        offHandleColor={colors.light.offHandleColor}
      />

      </div>
    </div>
  )
}

export default Navbar
