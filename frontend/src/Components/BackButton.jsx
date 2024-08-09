import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


const BackButton = () => {
  return (
    <>
      <div className="flex">
        <NavLink to="/" className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit">
            <BsArrowLeft className='text-2xl'/>
        </NavLink>
      </div>
    </>
  )
}

export default BackButton
