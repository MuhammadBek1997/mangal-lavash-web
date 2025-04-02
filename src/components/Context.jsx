import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../data/data";
import { useNavigate } from "react-router-dom";



export const AppContext = createContext();



export const AppProvider = ({children}) => {

    const [data,setData] = useState(fetchData)
    const [login,setLogin] = useState(sessionStorage.getItem("log"))
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    let navigate = useNavigate()
     
    let logged

    data.restaurants.map(item=>{
        if(item.id == login){
            logged = true
        }else{
            logged = false
        }
    })
    
    const handleCatchLogin = ()=>{
        
        if(logged){
            navigate('/')
        }else{
            navigate('/login')
        }

    }

    const handleLogin = () =>{
        // let newUser = {
        //     name:username,
        //     password:password
        // }

        

        data.restaurants[0].rest_data.users.map((item)=>{
            if(username == item.name && password == item.password){
                sessionStorage.setItem("log",data.restaurants[0].id)
                navigate('/')
            }
        })

    }

    


    const isSystemDark = window.matchMedia("(prefers-color-scheme: light)").matches

    let [dark, setDark] = useState(isSystemDark)
    let [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : dark)

    let logo = theme == 'dark' ? '/logo-dark.png' : '/logo_light.png' ;


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
        handleCatchLogin()
    },[data,login])



    return(
        <AppContext.Provider value={{
            toggleTheme,checkedIconfile,
            uncheckedIconfile,logo,data,login,setLogin,theme,
            logged, handleLogin,username,setUsername,
            password,setPassword
        }}>
            {children}
        </AppContext.Provider>
    )

}



export const UseGlobalContext = () =>{
    return useContext(AppContext)
}