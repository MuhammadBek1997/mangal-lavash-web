import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import { UseGlobalContext } from './components/Context';
import Sidebar from './components/Sidebar';
import Clientinfo from './pages/Clientinfo';
import Buy from './pages/Buy';

function App() {
  
  let {theme , logged} = UseGlobalContext()

  if (logged == false && sessionStorage.getItem("log")) {
    location.reload()
  }

  

  return (
    <div className='App' id={theme}>
      <Navbar/>
      <div className='bodyBox' style={{
        paddingLeft: logged ? '22%': '0px'
      }}>
        {logged ? <Sidebar/> : null}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/buy' element={<Buy/>} />
        <Route path='/client' element={<Clientinfo/>} />
      </Routes>
      </div>
     
    </div>
  )
}

export default App
