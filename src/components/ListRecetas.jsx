import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

// class ListRecetas extends Component {
//     state = { 
//       recetas: []
//     }
    
//     async componentDidMount() {
//       const API = {
//         recetas: 'http://35.232.96.233/drupal/recetas'
//       }

//       try {
//         const res = await fetch(API.recetas)
//         const recetas = await res.json()
//         this.setState({
//           recetas
//         })
//         console.log(this.state.recetas)
//         // const recetaTitle = this.state.recetas.map(r => r.title)
//         // console.log(recetaTitle)
//       } catch (e) {
//         console.log(e)
//       }
//     }

//     render() { 
//       let i = 0
//       return (
//         <React.Fragment>
//           <h1>hi</h1>
//           <ul className="c-recetas">
//             {this.state.recetas.map(r =><li className="c-recetas__listed-items" key={i++}>{r.title[0].value}</li>)} 
//           </ul>
//         </React.Fragment>
//       )
//     }
// }


const ListRecetas = ({ data }) => (
  <div>
    <div>
      <h1>Recipes</h1>  
      <ul>
        {/* {data.allNodeRecipe.edges.map(({ node }) => ( */}
        <li>
          {/* <Link to="#">{node.title}</Link> */}
        </li>
      </ul>
    </div>
  </div>
)

 
export default ListRecetas


export const query = graphql`
    query { 
      allNodeRecipe { 
            edges { 
                node  { 
                    id
                    title
                } 
            } 
        } 
    } `   