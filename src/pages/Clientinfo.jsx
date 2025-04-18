import React, { useState } from 'react'
import { fetchData } from '../data/data'
import { UseGlobalContext } from '../components/Context'

const Clientinfo = () => {
const {editName,editSurname,editNumber,editGender,setEditName,setEditSurname,setEditNumber,setEditGender} = UseGlobalContext()
// const {data} = UseGlobalContext()





  return (

    <div className='Clientinfo'>

<div>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

</div>


    <button className='clientinfo-btn' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <img src="/customer.webp" alt="" />
    </button>
    </div>

    
  )










  
}



export default Clientinfo