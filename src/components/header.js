import React from 'react'
import { Link } from 'gatsby'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Menu/>
    </div>
  </div>
)

export default Header
