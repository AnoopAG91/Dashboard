import React from 'react'
import './main.css'
import Leftsec from './Left-sec/leftsec'
import Rightsec from './Right-sec/rightsec'

function Main() {
  return (
    <div className='main'>
        <div className='left'>
            <Leftsec/>
        </div>
        <div className='right'>
           <Rightsec/>
        </div>
    </div>
  )
}

export default Main