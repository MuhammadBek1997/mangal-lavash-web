import { useEffect } from 'react'
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
import Settings from './components/Settings';

function App() {
  let { theme, logged, colors } = UseGlobalContext()

  useEffect(() => {
    if (logged === false && sessionStorage.getItem("log")) {
      location.reload()
    }

    // Set body background and text color dynamically
    document.body.style.background = colors[theme].background
    document.body.style.color = colors[theme].text

    // Set theme id for parent (if needed for CSS)
    document.getElementById("root").parentElement.setAttribute("id", theme)
  }, [theme, logged, colors])

  return (
    <div className='App'>
      <Navbar />
      <div className='bodyBox' style={{
        paddingLeft: logged ? '22%' : '0px'
      }}>
        {logged ? <Sidebar /> : null}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/client' element={<Clientinfo />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/change' element={<ChangeItem />} />
          <Route path='/add' element={<Additem />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
