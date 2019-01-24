import React, { Component } from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 3rem;
    span {
        color: red;
        font-size: 1.5rem;
        font-weight: 500;
    }
    p {
        margin-top: .5rem;
        text-transform: uppercase;
    }
`

const MallSelection = () => {
  return ( 
    <Flex>
      <span>LOS DOMINICOS</span>
      <p>selecciona tu mallplaza</p>
    </Flex>
  )
}
 
export default MallSelection