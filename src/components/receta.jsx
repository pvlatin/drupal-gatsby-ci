import React, { Component } from 'react'
import Img from 'gatsby-image'

const BASE_IMG_URL = 'http://35.202.126.177'

class Receta extends Component {
  state = { }
  render() {
    const { url } = this.props.node.relationships.field_image.uri
    return (
      <div>
        <div className="c-display-receta">
          <h4> { this.props.node.title } </h4>
          <img className="h-width-100" src={BASE_IMG_URL.concat(url)} alt="Recipe"/>
        </div>
      </div> 
    )
  }
}
 
export default Receta

