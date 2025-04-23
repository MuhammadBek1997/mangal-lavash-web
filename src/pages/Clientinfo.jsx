import React, { useState } from 'react'
import { UseGlobalContext } from '../components/Context'

const Clientinfo = () => {
const {editName,editSurname,editNumber,editGender,setEditName,setEditSurname,setEditNumber,setEditGender} = UseGlobalContext()





  return (

    <div className='Clientinfo'>

<div>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" placeholder='Ism' value={editName} onChange={(e)=>setEditName(e.target.value)} />
        <br />
        <br />
        <input type="text" placeholder='Familiya' value={editSurname} onChange={(e)=>setEditSurname(e.target.value)} />
        <br />
        <br />
        <input type="text" placeholder='Telefon raqam' value={editNumber} onChange={(e)=>setEditNumber(e.target.value)} />
        <select name="" id="">
          <option value="">
            Erkak
          </option>
          <option value="">
            Ayol
          </option>
        </select>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Yopish</button>
        <button type="button" className="btn btn-primary">Kritish</button>
      </div>
    </div>
  </div>
</div>

</div>
      

    <button  type="button" className="clientbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <img src="/add.png" alt="" />
    </button>
    </div>

    
  )
//   <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//   <img src="/customer.webp" alt="" />
// </button>









  
}



export default Clientinfo