import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

const ListRecetas = ({ data }) => (
  <div>
    <div>
      <h1>Recipes</h1>  
      <ul>
        {data.allNodeRecipe.edges.map(({ node }) => <li key={node.id}> {node.title} </li>)}
      </ul>
    </div>
  </div>
) 


export default ListRecetas
