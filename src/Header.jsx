import React from 'react'
import 
   {BsFillBellFill, BsFillEnvelopeFill,BsPersonCircle, BsSearch, BsJustify}
   from 'react-icons/bs'


function Header() {
  return (
    <header className='Header'>
        <div className='menu-icon'>
             <BsJustify className='icon'/>
        </div>
        <div className='Header-left'>
            <BsSearch className='icon'/>
        </div>
        <div className='Header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className= 'icon'/>
        </div>

    </header>

  )
}

export default Header
