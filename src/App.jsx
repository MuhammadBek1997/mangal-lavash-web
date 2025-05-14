import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import { UseGlobalContext } from './components/Context';
import Sidebar from './components/Sidebar';
import Clientinfo from './pages/Clientinfo';
import Buy from './pages/Buy';
import ChangeItem from './pages/ChangeItem';
import Additem from './pages/Additem';

function App() {
  
  let {theme , logged} = UseGlobalContext()

  if (logged == false && sessionStorage.getItem("log")) {
    location.reload()
  }
  
  document.getElementById("root").parentElement.setAttribute("id",theme)
  

  

  return (
    <div className='App'>
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
        <Route path='/change' element={<ChangeItem/>} />
        <Route path='/add' element={<Additem/>} />
      </Routes>
      </div>
     
    </div>
  )
}

export default App
