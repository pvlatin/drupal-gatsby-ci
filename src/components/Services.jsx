import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../stylejs/Layout'

const NavStyles = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
`
const SvgStyles = styled.img`
    height: 5rem;
`

const IconWrapper = styled.div`
    padding: 8rem 0 2rem;    
    `

const TitleStyles = styled.h3`
    color: #55565a;
    margin-top: 1rem;
    margin-bottom: 3.5rem;
    font-size: 1.5rem;
    text-align: center;
`

export default class Services extends Component {
  render() {
    return (
      <Container>
        <IconWrapper>
          <NavStyles>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_tiendas.svg" alt=""/>
              <TitleStyles>TIENDAS</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_descuentos.svg" alt=""/>
              <TitleStyles>DESCUENTOS</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_cine.svg" alt=""/>
              <TitleStyles>CINE</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_eventos.svg" alt=""/>
              <TitleStyles>EVENTOS</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_workshop.svg" alt=""/>
              <TitleStyles>WORKSHOP</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_gastronomia.svg" alt=""/>
              <TitleStyles>GASTRONOMÍA</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/icon_turistas.svg" alt=""/>
              <TitleStyles>TURISTAS</TitleStyles>
            </li>
            <li style={{ textAlign: 'center' }}>
              <SvgStyles src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/10/icono-mapa.svg" alt=""/>
              <TitleStyles>MAPA MALL</TitleStyles>
            </li>
          </NavStyles>
        </IconWrapper>
      </Container>
    )
  }
}
