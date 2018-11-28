import React, { Component } from 'react'
import Img from 'gatsby-image'

const BASE_IMG_URL = 'http://35.202.126.177/drupal/sites/default/files/'

const url_path = 'mediterranean-quiche-umami.jpg'

const Receta = ({ node }) => {
  return (
    <div>
      <div className="c-display-receta">
        <h4> {node.title} </h4>
        <h3>receta</h3>
        <img className="h-width-100" src={BASE_IMG_URL.concat(url_path)} alt="Recipe"/>
      </div>
    </div> 
  )
}
 
export default Receta

