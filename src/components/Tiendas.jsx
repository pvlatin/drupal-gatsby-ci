import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container } from '../stylejs/Layout'
import styled from 'styled-components'
import Tienda from './Tienda'
import Carousel from './Carousel'
import { SectionTitle } from '../stylejs/Typo'

const TiendaWrapper = styled.div`
  display: grid;
  padding: 3rem 0;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

const Tiendas = ({ data }) => (
  <React.Fragment>
    <SectionTitle>Tiendas s</SectionTitle>
    <TiendaWrapper>
      {data.allNodeTiendas.edges.map(({ node }) => (
        <Tienda key={node.id} data={node}/>
      ))}
    </TiendaWrapper>
  </React.Fragment>
)

export default Tiendas

