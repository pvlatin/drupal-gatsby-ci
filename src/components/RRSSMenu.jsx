import React, { Component } from 'react'
import styled from 'styled-components'

const RRSSItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`
const Items = styled.li`
  &:not(:last-child) {
    margin-right: .8rem;
  }
`

const RRSS = [
  {
    name: 'facebook',
    tag: 'facebook-f',
    id: 1
  },
  {
    name: 'twitter',
    tag: 'twitter',
    id: 2
  },
  {
    name: 'youtube',
    tag: 'youtube',
    id: 3
  },
  {
    name: 'instagram',
    tag: 'instagram',
    id: 4
  },
  {
    name: 'linkedin',
    tag: 'linkedin',
    id: 5
  },
]

const RRSSMenu = () => {
  return (
    <RRSSItems>
      {RRSS.map( menu => <Items className="rrss-box" key={menu.id}><i className={`fab fa-${menu.tag}`}></i></Items>)}
    </RRSSItems>
  )
}
 
export default RRSSMenu