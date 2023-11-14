import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
     from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id="Sidebar">
        <div className = 'Sidebar-title'>
            <div className='Sidebar-brand'>
                  <BsCart3 className='icon_header'/> SHOP
            </div>
            <span className='icon close-icon'>X</span>
        </div>
        <ul className='Sidebar-list'>
            <li className='Sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
                </li>
                <li className='Sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
                </li>
                <li className='Sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X2GapFill className='icon'/> Categories
                </a>
                </li>
                <li className='Sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
                </li>
                <li className='Sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Inventory
                </a>
                </li>
                <li className='Sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Reports
                </a>
                </li>
                <li className='Sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
                </li>
                 </ul>
    </aside>
    
  )
}

export default Sidebar
