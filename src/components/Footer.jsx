import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <NavLink className={'foot'} to={'about'}>About</NavLink>
        <NavLink className={'foot'} to={'contact'}>Contact</NavLink>
    </div>
  )
}

export default Footer