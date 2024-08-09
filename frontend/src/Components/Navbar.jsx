import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <ul>
       <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/about"><li>About</li></NavLink>
       <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>
    </>
  )
}

export default Navbar
