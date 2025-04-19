import React from 'react'
import { UseGlobalContext } from '../components/Context'

const Clientinfo = () => {

  const {data,handleAddClient,handleDeleteClient} = UseGlobalContext()


  console.log(data);
  

  return (
    <div>
      <button onClick={()=>handleAddClient("Ism",15000,"+998990972472")}>
        Add
      </button>
      <button onClick={()=>handleDeleteClient()}>
        Delete
      </button>
    </div>
  )
}

export default Clientinfo