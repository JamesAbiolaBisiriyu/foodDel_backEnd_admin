// import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/adds' className="sidebar-option" end>
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
      </div>
      <div className="sidebar-options">
        <NavLink to='/lists' className="sidebar-option" end>
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
      </div>
      <div className="sidebar-options">
        <NavLink to='/orders' className="sidebar-option" end>
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar