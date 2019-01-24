import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    position: relative;
    i {
        position: absolute;
        top: 46%;
        right: 10%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.4rem;
    }
`

const StyledInput = styled.input`
    margin-right: 2rem;
    border: none;
    background-color: #e5114d;
    color: #fff;
    width: 224px;
    height: 25px;
    border-radius: 15px;
    font-size: 12px;
    padding: 2px 15px 0;
    text-transform: uppercase;
    ::placeholder {
        color: white;
    }
`

const Buscar = () => {
  return ( 
    <Form action="" method="GET">
      <StyledInput type="search" name="" id="" placeholder="Buscar"/>
      <i class="fa fa-search"></i>
    </Form>
  )
}
 
export default Buscar