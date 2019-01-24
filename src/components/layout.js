import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Nav from './Nav'
import './layout.css'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            {
              name: 'google-site-verification',
              content: 'LyEi0LkqxR-CiriiJaPFCDJdCq_BV7Vc_Kow-dxoec0',
            },
          ]}
        />
        <Header className="no-padding" siteTitle={data.site.siteMetadata.title} />
        <Nav/>
        <div>
          {children}
        </div>
        <Footer/>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
