import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const defaultColors = {
    dark: {
      onColor: '#14021b',
      onHandleColor: '#14021b',
      background: '#1a1a1a',
      text: '#f0f0f0'
    },
    light: {
      offColor: '#ffffff',
      offHandleColor: '#fadada',
      background: '#ffffff',
      text: '#000000'
    }
}
  


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
    const [userAddress,setUserAddress] = useState('');
    const [gender,setGender] = useState('')
    
    
    let [dark, setDark] = useState(isSystemDark);
    let [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : dark);
    let logo = theme == 'dark' ? '/logo-dark.png' : '/logo_light.png' ;
    let profile = theme == 'dark' ? '/profilelight.png' : '/profiledark.png' ;
    const [colors, setColors] = useState(() => {
        const saved = localStorage.getItem("colors")
        return saved ? JSON.parse(saved) : defaultColors
    })
    const [newColors, setNewColors] = useState(colors)    
    
      const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
      }
      
    // Login holatini aniqlash
    let logged = sessionStorage.getItem("log") ? sessionStorage.getItem("log") : false;
    

    const handleCatchLogin = () => {
        if (!login) {
            navigate('/login');
        }
    };

    const handleLogin = (uname, pass) => {
        if (!data || !data.rest_data || !data.rest_data.superAdmin) {
            alert("Iltimos, tizim yuklanishini kuting...");
            return;
        }
    
        const superAdminData = data.rest_data.superAdmin;
        const accessAdmin = uname === superAdminData.login && pass === superAdminData.password;
    
        if (accessAdmin) {
            sessionStorage.setItem("log", data.id);
            navigate('/');
        } else {
            alert("Login yoki parol noto‘g‘ri.");
        }
    };
    

    const checkedIconfile = (
        <img src="moon.png" alt="" style={{ width: '30px' }} />
    );
    const uncheckedIconfile = (
        <img src="sun.png" alt="" style={{ width: '30px' }} />
    );

    const maleIcon = (
        <img src="/male.png" alt="" style={{ width: '150px' }} />
    );
    const femaleIcon = (
        <img src="/female.png" alt="" style={{ width: '150px' }} />
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


    const handleAddClient = async (name,bonus,number,gender) =>{

        let address = {
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
                    gender:gender,
                    address:address
                })
            })
            const data = await response.json();
            console.log('Natija:', data);
        } catch (err) {
            console.error('Xatolik:', error);
        }
        location.reload()
    }


    const handleDeleteClient = async (ID) =>{
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
        location.reload()
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

        location.reload()
    }

    const handleCatchClient = (element) =>{
        setID(element?._id)
        setUserBonus(element?.bonus)
        setUserName(element?.name)
        setUserNumber(element?.number)
        setGender(element?.gender)
    }

    // Theme o'zgarishini yangilash
    useEffect(() => {
        handleCatchLogin();
    }, [data,login]);

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark' : '';
        localStorage.setItem("theme", theme)
        localStorage.setItem("colors", JSON.stringify(colors))
      }, [theme,colors]);
      

    return (
        <AppContext.Provider value={{
            toggleTheme, checkedIconfile,
            uncheckedIconfile, logo,profile, data,loading, login, setLogin, theme,
            logged, handleLogin, username, setUsername,
            password, setPassword,handleAddFood,handleDeleteFood,
            handleEditFood,food,setFood,setEditName,setEditPrice,editName,
            editPrice,handleCatchFood,ID,handleAddClient,handleDeleteClient,
            handleEditClient,userAddress,userBonus,userName,userNumber,
            setUserAddress,setUserBonus,setUserName,setUserNumber,handleCatchClient,
            maleIcon,femaleIcon,gender,setGender,colors,setColors,newColors, setNewColors
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const UseGlobalContext = () => {
    return useContext(AppContext);
};
