import { Link } from 'react-router-dom'
import { UseGlobalContext } from '../components/Context'
import { useState } from 'react'
import Card from '../components/Card'

const ChangeItem = () => {

    const {setFood,food,handleEditFood,data} = UseGlobalContext()
    const [type,setType] = useState('foods')
    
    console.log(food);
    
    if (!data) return <div>Yuklanmoqda...</div>;
    const {foods,drinks,sweets} = data.rest_data.data;
    
    

    return (
        <div>
            <h2>
                Menuni o'zgartirish
            </h2>
            <div className='tohome'>
                <Link to={'/'} className='nav-btn' >
                    ◀ Ortga
                </Link>
            </div>
            <div className="change-cont">
                
        <select name="" id="" className="selectType" onChange={(e)=>setType(e.target.value)} >
          <option value="foods">
            Taomlar
          </option>
          <option value="drinks">
            Ichimliklar
          </option>
          <option value="sweets">
            Shirinliklar
          </option>
          
        </select>

        {
      type == 'foods' ? <section className="category-section">
      <h2 className="category-title">Taomlar</h2>
    <div className="card-container">
      {foods.map((item, i) => (
        <div key={i} onClick={()=>setFood(item)}>
        <Card {...item} />
        </div>
      ))}
    </div>
  </section> :
    type == 'drinks' ?
    <section className="category-section">
        <h2 className="category-title">Ichimliklar</h2>
        <div className="card-container">
          {drinks.map((item, i) => (
            <div key={i} onClick={()=>setFood(item)}>
            <Card {...item} />
            </div>
          ))}
        </div>
      </section> :
      type == 'sweets' ? 
      <section className="category-section">
      <h2 className="category-title">Shirinliklar</h2>
      <div className="card-container">
        {sweets.map((item, i) => (
          <div key={i} onClick={()=>setFood(item)}>
          <Card {...item} />
          </div>
        ))}
      </div>
    </section> :
      <div>Yuklanmoqda...</div>
      }

        
            </div>
        </div>
    )
}

export default ChangeItem




// <select name="" id="" onChange={(e)=>setFoodType(e.target.value)}>
//                 <option value="">
//                   Taom turi
//                 </option>
//                 <option value="foods">
//                   Foods
//                 </option>
//                 <option value="drinks">
//                   Drinks
//                 </option>
//                 <option value="sweets">
//                   Sweets
//                 </option>
//               </select>
//               <input type="text" value={food.title} onChange={(e)=>setFoodName(e.target.value)} />
//               <input type="text" value={food.price} onChange={(e)=>setFoodPrice(e.target.value)}/>
//               <button onClick={()=>handleEditFood(food.type,food.title,food.price,food._id)}>
//                   Taomni qo'shish
//               </button>