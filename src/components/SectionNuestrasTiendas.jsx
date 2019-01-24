import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../stylejs/Layout'
import { SectionTitle } from '../stylejs/Typo'
import { MDBContainer } from 'mdbreact'

const TiendasWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`
const ImgWrapper = styled.div`
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    box-shadow: 0px 3px 10px 3px rgba(0,0,0,.3);
    text-align: center;
    position: relative;
    h3 {
        color: white;
        font-size: 3rem;
        position: absolute;
        font-weight: 500;
        width: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`
const Img = styled.img`
    width: 270px;
    height: 100%;
`

export default class SectionNuestrasTiendas extends Component {
  render() {
    return (
      <MDBContainer>
        <SectionTitle>Conoce nuestras tiendas</SectionTitle>
        <TiendasWrapper>
          <ImgWrapper>
            <Img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/mujer.jpg" alt=""/>
            <h3>
            Mujer
            </h3>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/hombre.jpg" alt=""/>
            <h3>
            Hombre
            </h3>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/ninos_y_juguetes.jpg" alt=""/>
            <h3>
            Niños y juguetes
            </h3>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/08/servicios.jpg" alt=""/>
            <h3>
            Servicios
            </h3>
          </ImgWrapper>
        </TiendasWrapper>
      </MDBContainer>
    )
  }
}
