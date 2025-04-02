import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import ReactSwitch from 'react-switch'



function App() {

  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isDark,setIsDark] = useState(isSystemDark)

  const [theme,setTheme] = useState(localStorage.getItem("themeColor")?localStorage.getItem("themeColor"):isDark)



  const toggleTheme = ()=>{
    
    setTheme((curr)=>curr === 'light' ? 'dark':'light')
  }


  const checkedIconfile = (
    <img src="moon.png" alt="" style={{
      width:'30px'
    }} />
  )
  const uncheckedIconfile = (
    <img src="sun.png" alt="" style={{
      width:'30px'
    }} />
  )


  useEffect(()=>{
    localStorage.setItem("themeColor",theme)
  })


  return (
    
    <div className='App' id={theme}>
      <Login/>
      <div className='switchBtn'>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} checkedIcon={checkedIconfile} uncheckedIcon={uncheckedIconfile} onColor='#30036b' onHandleColor='#30036b' offColor='#FFFFFF' offHandleColor='#FFFFFF' />
      </div>
    </div>
  )
}

export default App
