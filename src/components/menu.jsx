import React, { Component } from 'react'

const menuItems = [
  {
    name: 'Inicio',
    id: 1
  },
  {
    name: 'Recetas',
    id: 2
  },
  {
    name: 'Deliver',
    id: 3
  },
  {
    name: 'Contacto',
    id: 4
  },
]

const Menu = () => {
  return ( 
    <ul>
      {menuItems.map( menu => <li key={menu.id}>{menu.name}</li>)}
    </ul>
  )
}
 
export default Menu