import { Link } from "react-router-dom"
import { UseGlobalContext } from "../components/Context"
import { useState } from "react"


const Additem = () => {
  const [foodName,setFoodName] = useState('')
  const [foodPrice,setFoodPrice] = useState('')
  const [foodType,setFoodType] = useState('')

  const {handleAddFood,food,setFood} = UseGlobalContext()


  console.log(foodType,foodPrice,foodName);
  
  return (
    <div>
        <h2>
            Menuga qo'shish
        </h2>
        <div className='tohome'>
                <Link to={'/'} className='nav-btn' >
                    ◀ Ortga
                </Link>
            </div>
            <div className="add-cont">
              <select name="" id="" onChange={(e)=>setFoodType(e.target.value)}>
                <option value="">
                  Taom turi
                </option>
                <option value="foods">
                  Foods
                </option>
                <option value="drinks">
                  Drinks
                </option>
                <option value="sweets">
                  Sweets
                </option>
              </select>
              <input type="text" value={foodName} onChange={(e)=>setFoodName(e.target.value)} />
              <input type="text" value={foodPrice} onChange={(e)=>setFoodPrice(e.target.value)}/>
              <button onClick={()=>handleAddFood(foodType,foodName,foodPrice)}>
                  Taomni qo'shish
              </button>
            </div>

    </div>
  )
}

export default Additem