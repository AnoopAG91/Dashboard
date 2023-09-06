import React from 'react'
import './leftsec.css'
import {AiOutlineLogout} from 'react-icons/ai'

function Leftsec() {
  return (
    <div className='left-sec'>
        <div className='user-sec'>
            <img src={"https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
            <p>User Name</p>
            <span>user@gmail.com</span>
        </div>
        <div className='dashboard-sec'>
        <button type="button" class="btn btn-light">Dashboard</button>
        <button type="button" class="btn btn-light">Perks</button>
        <button type="button" class="btn btn-light">Addons</button>
        <button type="button" class="btn btn-light">FAQ</button>
        <button type="button" class="btn btn-light">Support</button>
        </div>
        <div className='logout-sec'>
        <button type="button" class="btn btn-light">Logout <AiOutlineLogout/></button>
        </div>
    </div>
  )
}

export default Leftsec