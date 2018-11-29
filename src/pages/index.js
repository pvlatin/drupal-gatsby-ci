import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import ListRecetas from '../components/list-recetas'

import '../styles/main.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <ListRecetas data={data}/>
  </Layout>
)

export const query = graphql`
  query IndexRecetas { 
    allNodeRecipe {
      edges {
        node {
          id
          title
          relationships {
            field_image {
              uri {
                url
              }
            }
          }
        }
      }
    }
  }` 
  
  


export default IndexPage
