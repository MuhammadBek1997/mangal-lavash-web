import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { UseGlobalContext } from './Context'

const Navbar = () => {

  let {toggleTheme,theme,checkedIconfile,uncheckedIconfile,logged} = UseGlobalContext()



  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])

  return (
    <div className='navbar'>
      
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} checkedIcon={checkedIconfile} uncheckedIcon={uncheckedIconfile} onColor='#14021b' onHandleColor='#14021b' offColor='#FFF' offHandleColor='#fadada' />
    </div>
  )
}

export default Navbar