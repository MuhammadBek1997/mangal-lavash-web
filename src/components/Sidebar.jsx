import React from 'react'
import { UseGlobalContext } from './Context'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  let {logo} = UseGlobalContext()

  return (
    <div className='sidebar'>
        <img src={logo} alt="" style={{
          width:'120px'
        }} />

        <div className="sidebar-list">
          <Link to={'/'} className='sidebar-list-item'>
            Asosiy
          </Link>
          <Link to={'/buy'} className='sidebar-list-item'>
            Savdo
          </Link>
          <Link to={'/client'} className='sidebar-list-item'>
            Mijozlar
          </Link>
          <Link to={'/settings'} className='sidebar-list-item'>
            Sozlamalar
          </Link>
        </div>

        <button onClick={()=>{
          sessionStorage.removeItem("log")
          location.reload()
          }} className='logoutBtn'> 
          Log out
        </button>
    </div>
  )
}

export default Sidebar