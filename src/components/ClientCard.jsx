import React, { useState } from 'react'
import { UseGlobalContext } from './Context'

const ClientCard = ({name,number,bonus,gender,_id}) => {

    const {maleIcon,femaleIcon,handleDeleteClient,ID} = UseGlobalContext()
    const [hideBtn,setHideBtn] = useState(false)
    const clientIcon = gender == "male" ? maleIcon : femaleIcon

  return (
    <div className='client-card' onClick={()=>setHideBtn(!hideBtn)}>
        
        <div id={hideBtn ? 'showBtns' : 'hideBtns'}>
            {clientIcon}
            <h2>
                {name}
            </h2>
            <h3>
                {number}
            </h3>
            <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                O'zgartirish
            </button>
            <button className='btn btn-danger' onClick={()=>handleDeleteClient(_id)}>
                O'chirish
            </button>

        </div>
        <div className='bonus-box'>
            <h4>
                {bonus}
            </h4>
        </div>
        
    </div>
  )
}

export default ClientCard