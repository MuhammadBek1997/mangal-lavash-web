import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    
    let navigate = useNavigate();

    const { data, loading, error } = useFetch('https://mangal-backend-production.up.railway.app/api/restaurant/123');
    const isSystemDark = window.matchMedia("(prefers-color-scheme: light)").matches;
    const [login, setLogin] = useState(sessionStorage.getItem("log"));
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [food,setFood] = useState({});
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState('')
    const [ID,setID] = useState('')
    const [order,setOrder] = useState({});
    const [userName,setUserName] = useState('');
    const [userBonus,setUserBonus] = useState('');
    const [userNumber,setUserNumber] = useState('');
    const [userAddress,setUserAddress] = useState('')
        
    let [dark, setDark] = useState(isSystemDark);
    let [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : dark);
    let logo = theme == 'dark' ? '/logo-dark.png' : '/logo_light.png' ;
    let profile = theme == 'dark' ? '/profilelight.png' : '/profiledark.png' ;

    
    
    // Login holatini aniqlash
    let logged = sessionStorage.getItem("log") ? sessionStorage.getItem("log") : false;
    

    const handleCatchLogin = () => {
        if (!login) {
            navigate('/login');
        }
    };

    const handleLogin = (uname,pass) => {
        
        const superAdminData = data.rest_data.superAdmin

        const accessAdmin = true ? uname==superAdminData.login && pass==superAdminData.password : false

        if (accessAdmin) {
            sessionStorage.setItem("log", data.id);
            navigate('/');
        }
    };


    const toggleTheme = () => {
        setTheme(curr => curr === 'light' ? 'dark' : 'light');
    };

    const checkedIconfile = (
        <img src="moon.png" alt="" style={{ width: '30px' }} />
    );
    const uncheckedIconfile = (
        <img src="sun.png" alt="" style={{ width: '30px' }} />
    );


    const handleAddFood = async (type,title,price) =>{
        try {
            const response = await fetch('https://mangal-backend-production.up.railway.app/api/restaurant/123/add-food',{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:title,
                    price:price,
                    type:type
                })
            })
            const data = await response.json();
            console.log('Natija:', data);
        } catch (err) {
            console.error('Xatolik:', error);
        }

        location.reload()
    }

    const handleEditFood = async (type,title,price,ID) =>{
        try {
            const response = await fetch(`https://mangal-backend-production.up.railway.app/api/restaurant/123/update-food/${ID}`,{
                method: 'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:title,
                    price:price,
                    type:type
                })
            })
            const data = await response.json();
            console.log('Natija:', data);
        } catch (err) {
            console.error('Xatolik:', error);
        }

        location.reload()
    }

    const handleDeleteFood = async (ID,type)=>{
        try {
            const response = await fetch(`https://mangal-backend-production.up.railway.app/api/restaurant/123/delete-food/${ID}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ type }) // type ni yuborish shart
            });
    
            const data = await response.json();
            console.log('O‘chirildi:', data);
        } catch (error) {
            console.error('O‘chirishda xatolik:', error);
        }
    
        location.reload()
    }


    
    const handleCatchFood = (element)=>{
        setFood(element)
        setEditName(element.title)
        setEditPrice(element.price)
        setID(element._id)
    }


    const handleAddClient = async (name,bonus,number,address) =>{

        address = {
            lat:40.26718,
            long:68.80860
        }

        try {
            const response = await fetch('https://mangal-backend-production.up.railway.app/api/restaurant/123/add-client',{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    number:number,
                    bonus:bonus,
                    address:address
                })
            })
            const data = await response.json();
            console.log('Natija:', data);
        } catch (err) {
            console.error('Xatolik:', error);
        }

    }


    const handleDeleteClient = async () =>{
        try {
            const response = await fetch(`https://mangal-backend-production.up.railway.app/api/restaurant/123/delete-client/${ID}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                } // type ni yuborish shart
            });
    
            const data = await response.json();
            console.log('O‘chirildi:', data);
        } catch (error) {
            console.error('O‘chirishda xatolik:', error);
        }
    }


    const handleEditClient = async (name,bonus,number,address)=>{

        address = {
            lat:40.26718,
            long:68.80860
        }

        try {
            const response = await fetch(`https://mangal-backend-production.up.railway.app/api/restaurant/123/update-client/${ID}`,{
                method: 'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    bonus:bonus,
                    number:number,
                    address:address
                })
            })
            const data = await response.json();
            console.log('Natija:', data);
        } catch (err) {
            console.error('Xatolik:', error);
        }
    }

    const handleCatchClient = (element) =>{
        setID(element?._id)
        setUserBonus(element?.bonus)
        setUserName(element?.name)
        setUserNumber(element?.number)
    }

    // Theme o'zgarishini yangilash
    useEffect(() => {
        handleCatchLogin();
    }, [data,login]);

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark' : '';
      }, [theme]);
      

    return (
        <AppContext.Provider value={{
            toggleTheme, checkedIconfile,
            uncheckedIconfile, logo,profile, data, login, setLogin, theme,
            logged, handleLogin, username, setUsername,
            password, setPassword,handleAddFood,handleDeleteFood,
            handleEditFood,food,setFood,setEditName,setEditPrice,editName,
            editPrice,handleCatchFood,ID,handleAddClient,handleDeleteClient,
            handleEditClient,userAddress,userBonus,userName,userNumber,
            setUserAddress,setUserBonus,setUserName,setUserNumber,handleCatchClient
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const UseGlobalContext = () => {
    return useContext(AppContext);
};
