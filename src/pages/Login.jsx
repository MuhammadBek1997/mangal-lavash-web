import React from 'react'
import { UseGlobalContext } from '../components/Context'

const Login = () => {

    let {username,setUsername,logo,password,setPassword , handleLogin,loading} = UseGlobalContext()

    
    if(loading) return <div><img className='loading-img' src="/loading.gif" alt="" /></div>

  return (
      <div className='login'>
        <p className='sign' align='center'>
            <img src={logo} alt="" style={{
                width:'120px'
            }}/>
        </p>
        <div className='form1'>
            <input className='username' type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" className='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={()=>handleLogin(username,password)} className='submit' align='center'>
                Kirish
            </button>
            
        </div>
    </div>
  )
}

export default Login