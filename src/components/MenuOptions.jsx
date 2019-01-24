import React from 'react'
import styled from 'styled-components'
import { UL } from '../stylejs/Utils'

const List = styled(UL)`
  position: relative;
  margin: .5rem .35rem 0 0;
  li {
    i {
      color: #e5114d;
      margin-left: .5rem;
    }
    padding: 0 1.5rem;
    &:not(:last-child) {
      &:after {
        content: "";
        position: absolute;
        top: 2px;
        width: 1px;
        height: 10px;
        margin-left: 1.5rem;
        background: #55565a;
      }
    }
  }
`

const MenuOptions = () => {
  return ( 
    <div>
      <List>
        <li>CÓMO LLEGAR<i class="fas fa-map-marker-alt"></i></li>
        <li>SUSCRÍBETE<i class="fas fa-envelope"></i></li>
        <li>HORARIOS<i class="far fa-clock"></i></li>
      </List>
    </div>
  )
}
 
export default MenuOptions

