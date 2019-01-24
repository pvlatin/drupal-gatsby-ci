import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { MDBContainer } from 'MDBReact'
// import { Router } from '@reach/router'
import Layout from '../components/Layout'
// import { Container } from '../stylejs/Layout'
import Tienda from '../components/Tienda'
import { SectionTitle } from '../stylejs/Typo.js'

const TiendasWrapper = styled.div`
  display: grid;
  padding: 3rem 0 5rem 0;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`


const Tiendas = ({ data }) => (
  <Layout>
    <MDBContainer>
      <SectionTitle style={{ marginTop: '30px' }}>Tiendas</SectionTitle>
      <TiendasWrapper>
        { data.allNodeTiendas.edges.map(({ node }) => <Tienda data={node} /> )}
      </TiendasWrapper>
    </MDBContainer>
  </Layout>
)

export const tiendas = graphql`
  query { 
    allNodeTiendas {
      edges {
        node {
          id
          title
          field_field_location { 
            value
          }
        }
      }
    }
  }
` 

export default Tiendas


