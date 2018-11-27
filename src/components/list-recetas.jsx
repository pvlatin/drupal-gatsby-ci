import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

const BASE_IMG_URL = 'http://35.202.126.177/drupal/sites/default/files/'

const API = {
  getRecetas: {
    url_path : [
      'mediterranean-quiche-umami.jpg', 
      'mediterranean-quiche-umami.jpg', 
      'mediterranean-quiche-umami.jpg',
      'mediterranean-quiche-umami.jpg',
      'mediterranean-quiche-umami.jpg',
    ]
  }
}

const url_path = [
  'mediterranean-quiche-umami.jpg', 
  'mediterranean-quiche-umami.jpg', 
  'mediterranean-quiche-umami.jpg',
  'mediterranean-quiche-umami.jpg',
  'mediterranean-quiche-umami.jpg',
]

// console.log(API.getRecetas.url_path)

let imgId = 0

const ListRecetas = ({ data }) => (
  <div>
    <div>
      <h1>Recipes</h1>  
      {data.allNodeRecipe.edges.map(({ node }) => (
        <div>
          <li key={node.id}> {node.title} </li>
          <img key={imgId++} src={BASE_IMG_URL.concat(url_path[0])} alt="Recipe"/>
        </div>
      ))
      }  
      {
        url_path.map( url => {
          <p>hola</p>
        })
      }
    </div>
  </div>
) 


export default ListRecetas
