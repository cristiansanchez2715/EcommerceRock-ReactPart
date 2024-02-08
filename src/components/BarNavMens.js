import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

function BarNavMens() {

    const[dataMen, setDataMen] = useState()

  return (
    <nav className='container-barnav-items'>
        <NavLink className='barnav-items'  to="/Accesories">Accesories </NavLink >
        <NavLink className='barnav-items' to='/Shoes'>Shoes</NavLink>
        <NavLink className='barnav-items' to='/TShirts'>TShirts</NavLink>
        <NavLink className='barnav-items' to='/Pants'>Pants</NavLink>
        <NavLink className='barnav-items' to='/ThinksOfMusic'>Objects</NavLink>
    </nav>
  )
}

export default BarNavMens