
import React from 'react'
import '../styles/navbar.css'
import { BiAdjust } from "react-icons/bi";

const Navbar = () => {
  const body = document.body

  const handleClick = function(){
    const bodyDark = body.classList.toggle('dark')
    localStorage.setItem('dark', bodyDark)
  }

  if(localStorage.getItem('dark') == 'true'){
    body.classList.add('dark')
  }else{
    body.classList.remove('dark')
  }

  return (
    <header className='contenedorNavbar shadow'>
      <div className='cabezera'>
        <h2 className='tituloCabezera'>Where in the world?</h2>
        <div className='textoCabezera'>
          <i type='button' onClick={handleClick}>
            <BiAdjust />
          </i>
          <p className='textDark'>Dark model</p>
        </div>
      </div>
    </header>
  )
}

export default Navbar
