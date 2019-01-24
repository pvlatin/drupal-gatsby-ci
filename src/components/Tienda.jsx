import React, { Component } from 'react'
import styled from 'styled-components'

const TiendaStyles = styled.div`
  background-image: url('https://www.mallplaza.cl/templates/plaza_home_central/images/malls/mall_antofagasta.jpg');
  background-repeat: no-repeat;
  background-position: cover;
  background-size: contain;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 100%;
  box-shadow: 0 6px 15px 2px rgba(51, 51, 51, 0.1);
  transition: 0.2s;
  &:hover {
    box-shadow: 0 6px 20px 5px rgba(51, 51, 51, 0.15);
  }
`

const TiendaOptions = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    li {
      font-size: 15px;
      font-weight: 500;
    }
  }
`

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 100px;
  font-weight: 400;
  font-size: 40px;
`

const Tienda = ({ data }) => {
  return (
    <TiendaStyles>
      <Title>{data.title}</Title>
      <TiendaOptions>
        <ul>
          <li>{data.field_field_location.value}</li>
          <li>Horarios</li>
        </ul>
      </TiendaOptions>
    </TiendaStyles>
  )
}

export default Tienda
