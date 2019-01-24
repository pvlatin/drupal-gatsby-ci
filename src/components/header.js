import React from 'react'
import { Link } from 'gatsby'
import RRSSMenu from './RRSSMenu'
import styled from 'styled-components'
import { Container } from '../stylejs/Layout'
import Buscar from './Buscar'
import MenuOptions from './MenuOptions'
import MallSelection from './MallSelection'

const MenuHeader = styled.div`
  border-bottom: 1px solid lightgrey;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  background-color: #f3f3f3;
`
const FlexMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0 0.5rem 0;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const MainLogo = styled.div`
  position: relative;
  &:after {
    content: '';
    background: #55565a;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 3rem;
    height: 3.6rem;
    width: 1px;
  }
`

const Header = ({ siteTitle }) => (
  <MenuHeader>
    <Container>
      <FlexMenu>
        <MainLogo>
          <Link to="/">
            <img
              src="https://losdominicos.mallplaza.cl/web/wp-content/themes/mallplaza/images/logo-mallplaza.png"
              alt="Logo Mallplaza"
            />
          </Link>
        </MainLogo>
        <MallSelection />
        <Flex>
          <MenuOptions />
          <Buscar />
          <RRSSMenu />
        </Flex>
      </FlexMenu>
    </Container>
  </MenuHeader>
)

export default Header
