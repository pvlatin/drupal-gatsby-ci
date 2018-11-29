import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Receta from './receta'



class ListRecetas extends Component {
  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <div className="g-recetas">
          {console.log(this.props.data.allNodeRecipe.edges, 'data props')}
          {this.props.data.allNodeRecipe.edges.map( ({ node }) => <Receta key={node.id} node={node}/>)}  
        </div>
      </div>
    ) 
  }
}



export default ListRecetas
