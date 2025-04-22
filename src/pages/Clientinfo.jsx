import React from 'react'
import { UseGlobalContext } from '../components/Context'
import ClientCard from '../components/ClientCard'

const Clientinfo = () => {

  const { data, handleAddClient, handleDeleteClient,handleEditClient,handleCatchClient, userBonus, userName, userNumber, setUserAddress, setUserBonus, setUserName, setUserNumber } = UseGlobalContext()

  if(!data) return (<div>Yuklanmoqda...</div>) 

  const {clients} = data.rest_data
  console.log(clients);


  return (
    <div className='client-info'>
      
      <button onClick={() => handleAddClient("Ism", 15000, "+998990972472")}>
        Add
      </button>
      <button onClick={() => handleDeleteClient()}>
        Delete
      </button>

      
      <div className='client-info-cont'> 
        {clients.map((item)=>{
          return(
            <div key={item._id} onClick={()=>handleCatchClient(item)}   data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <ClientCard {...item} />
            </div>
          )
        })}
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
              <input type="text" value={userNumber}  onChange={(e)=>setUserNumber(e.target.value)}/>
              <input type="text" value={userBonus} onChange={(e)=>setUserBonus(e.target.value)}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={()=>handleEditClient(userName,userBonus,userNumber)} >Understood</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Clientinfo