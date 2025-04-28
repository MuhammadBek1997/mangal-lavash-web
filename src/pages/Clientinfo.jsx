import React, { useState } from 'react'
import { UseGlobalContext } from '../components/Context'
import ClientCard from '../components/ClientCard'

const Clientinfo = () => {
  const [hideAdd, setHideAdd] = useState(true)
  let hidden = hideAdd ? "hide" : "show"

  const { data, handleAddClient, handleEditClient, handleCatchClient, userBonus, userName, userNumber,gender, setUserAddress, setUserBonus, setUserName, setUserNumber,setGender } = UseGlobalContext()

  if (!data) return (<div><img className='loading-img' src="/loading.gif" alt="" /></div>)

  const { clients } = data.rest_data;

  const showAdding = ()=>{
    setHideAdd(!hideAdd)
    setUserName("")
    setUserNumber("")
  }


  return (
    <div className='client-info'>
      <button className={hideAdd ? 'btn btn-info' : 'btn btn-danger'} onClick={() =>showAdding()} style={{ width: '180px'}}>
        <p className='add-plus'>
          {hideAdd ? "Qo'shish menusi": "x"}
        </p>
      </button>
      <div className="client-add-box" id={hidden}>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  required />
            <input type="text" value={userNumber}  onChange={(e)=>setUserNumber(e.target.value)}  required />
            <select onChange={(e)=>setGender(e.target.value)} required>
              <option value="male">
                Jinsni tanlang
              </option>
              <option value='male'>
                Erkak
              </option>
              <option value='female'>
                Ayol
              </option>
            </select>
            <button className="btn btn-success" onClick={() => handleAddClient(userName,"0",userNumber,gender)}>
              Qo'shish
            </button>
      </div>

      <div className='client-info-cont'>
        {clients.map((item) => {
          return (
            <div key={item._id} onClick={() => handleCatchClient(item)}>
              <ClientCard {...item} />
            </div>
          )
        })}
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Mijoz ma'lumotlari</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
              <input type="text" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
              <input type="text" value={userBonus} onChange={(e) => setUserBonus(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yopish</button>
              <button type="button" className="btn btn-success" onClick={() => handleEditClient(userName, userBonus, userNumber)} >O'zgartirish</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Clientinfo