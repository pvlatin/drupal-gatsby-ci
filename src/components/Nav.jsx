import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../stylejs/Layout'
import { Link } from 'gatsby'

const NavWrapper = styled.div`
  background: #454545;
  box-shadow: 0 10px 50px 1px rgba(0, 0, 0, 0.35);
  position: relative;
  z-index: 100;
`

const NavStyles = styled.ul`
  list-style-type: none;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: start;
  li {
    color: white;
    padding: 15px 38px;
    font-size: 1.7rem;
    position: relative;
    &::after {
      transition: 0.2s all;
      content: '';
      background-color: #e5114d;
      width: 0;
      border-radius: 2px;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:hover::after {
      width: 12rem;
    }
  }
`

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <Container>
          <NavStyles>
            <li>
              <Link style={{ color: 'white' }} to="/tiendas">
                TIENDAS
              </Link>
            </li>
            <li>ACTIVIDADES</li>
            <li>CINE</li>
            <li>DESCUENTOS</li>
            <li>SERVICIO AL CLIENTE</li>
            <li>NOTICIAS</li>
          </NavStyles>
        </Container>
      </NavWrapper>
    )
  }
}
