import { Link } from 'react-router-dom'
import { UseGlobalContext } from '../components/Context'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

const ChangeItem = () => {
    const {handleEditFood,handleCatchFood,data,setEditName,setEditPrice,editName,editPrice,ID} = UseGlobalContext()
    const [type,setType] = useState('foods')
    

    
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

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" value={editName} onChange={(e)=>setEditName(e.target.value)} />
        <input type="text" value={editPrice} onChange={(e)=>setEditPrice(e.target.value)} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Bekor qilish</button>
        <button type="button" className="btn btn-primary" onClick={()=>handleEditFood(type,editName,editPrice,ID)}>Saqlash</button>
      </div>
    </div>
  </div>
</div>
        {
      type == 'foods' ? <section className="category-section">
      <h2 className="category-title">Taomlar</h2>
    <div className="card-container">
      {foods.map((item, i) => (
        <div key={i} onClick={()=>handleCatchFood(item)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
            <div key={i} onClick={()=>handleCatchFood(item)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
          <div key={i} onClick={()=>handleCatchFood(item)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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