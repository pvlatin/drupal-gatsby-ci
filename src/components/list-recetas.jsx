import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Receta from './receta'


const ListRecetas = ({ data }) => (
  <div>
    <h1>Recipes</h1>
    <div className="g-recetas">
      {data.allNodeRecipe.edges.map(({ node }) => <Receta key={node.id} node={node}/>)}  
    </div>
  </div>
) 


export default ListRecetas
