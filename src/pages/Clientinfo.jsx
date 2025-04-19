import React from 'react'
import { UseGlobalContext } from '../components/Context'

const Clientinfo = () => {

  const { data, handleAddClient, handleDeleteClient,handleEditClient,handleCatchClient, userBonus, userName, userNumber, setUserAddress, setUserBonus, setUserName, setUserNumber } = UseGlobalContext()


  console.log(data);


  return (
    <div>


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


      <button onClick={() => handleAddClient("Ism", 15000, "+998990972472")}>
        Add
      </button>
      <button onClick={() => handleDeleteClient()}>
        Delete
      </button>
      <button onClick={()=>handleCatchClient(data.rest_data.clients[0])}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Edit
      </button>
    </div>
  )
}

export default Clientinfo