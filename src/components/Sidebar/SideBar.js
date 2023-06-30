import React from 'react'
import "./SideBar.css"
import category from "../../img/Category.png"
import game from "../../img/Game.png"
import Ticket from "../../img/TicketStar.png"
import Location from "../../img/Location.png"

const SideBar = () => {
  return (
    <aside className='sideBar desktop'>
      <div className='logo'>
        <img src="../assests/img/Logo.png" alt="" />
      </div>

      <div className='dashBoardTextDiv'>
        <div className='dashBoardText'>
          <img src={category} className='icon' alt="" />
          <p >DashBoard</p>
        </div>
      </div>

      <div className='otherOption'>
        <ul>
          <li>
            <img src={game} className='icon' alt="" />
            <p>trainings</p>
          </li>
          <li>
            <img src={Ticket} className='icon' alt="" />
            <p>users</p>
          </li>
          <li>
            <img src={Location} className='iconLocation' alt="" />
            <p>analytics</p>
          </li>
          <li>
            <img src={Location} className='iconLocation' alt="" />
            <p>my account</p>
          </li>
          <li>
            <img src={Location} className='iconLocation' alt="" />
            <p>support</p>
          </li>

        </ul>
      </div>
    </aside>
  )
}

export default SideBar
