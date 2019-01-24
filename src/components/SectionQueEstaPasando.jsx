import React, { Component } from 'react'
import styled from 'styled-components'
import { MDBContainer } from 'mdbreact'
import { SectionTitle } from '../stylejs/Typo'

const MainWrapper = styled.div`
  margin-bottom: 3rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Box = styled.div`
  z-index: 10;
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  border: 1px solid white;
  &::after {
    display: block;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%);
    z-index: 50;
    height: 15rem;
    width: 100%;
    content: '';
    bottom: 0;
  }
  .image-bg {
    z-index: 100;
    height: 100%;
    width: 100%;
    transition: 0.3s all;
    overflow: hidden;
    &:hover {
      transform: scale(1.03);
    }
  }
  .image-cat {
    position: absolute;
    top: 0;
    left: 0;
    width: none;
  }
`

export default class SectionQueEstaPasando extends Component {
  render() {
    return (
      <MDBContainer>
        <MainWrapper>
          <SectionTitle>¿Qué está pasando?</SectionTitle>
          <Wrapper>
            <Box>
              <img
                className="image-bg"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_bbvv.png"
                alt=""
              />
              <img
                className="image-cat"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2017/08/huila_workshop.png"
                alt=""
              />
            </Box>
            <Box>
              <img
                className="image-bg"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_bbvv.png"
                alt=""
              />
              <img
                className="image-cat"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2017/08/huila_workshop.png"
                alt=""
              />
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <img
                className="image-bg"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_bbvv.png"
                alt=""
              />
              <img
                className="image-cat"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2017/08/huila_workshop.png"
                alt=""
              />
            </Box>
            <Box>
              <img
                className="image-bg"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_bbvv.png"
                alt=""
              />{' '}
              <img
                className="image-cat"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2017/08/huila_workshop.png"
                alt=""
              />
            </Box>
            <Box>
              <img
                className="image-bg"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_bbvv.png"
                alt=""
              />{' '}
              <img
                className="image-cat"
                src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2017/08/huila_workshop.png"
                alt=""
              />
            </Box>
          </Wrapper>
        </MainWrapper>
      </MDBContainer>
    )
  }
}
