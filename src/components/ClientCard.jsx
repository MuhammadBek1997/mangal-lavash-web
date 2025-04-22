import React from 'react'

const ClientCard = ({name,number,bonus}) => {
  return (
    <div className='client-card'>
        <div>
            <h2>
                {name}
            </h2>
            <h3>
                {number}
            </h3>
        </div>
        <h2>
            {bonus}
        </h2>

    </div>
  )
}

export default ClientCard