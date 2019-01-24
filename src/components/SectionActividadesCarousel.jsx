import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../stylejs/Layout'
import { SectionTitle } from '../stylejs/Typo'
import Slider from 'react-slick'
import { 
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact'

const SectionAtividades = styled.div`
  padding-bottom: 5rem;
`

const ActividadDate = styled.div`
  padding: 1.6rem 1rem;
  height: 7rem;
  background-color: #fcd723;
  span {
    display: block;
    color: white;
    font-size: 1.6rem;
    text-align: center;
  }
  .monthClass {
    font-weight: 600;
  }
`

const Relative = styled.div`
  position: relative;
  img {
  }
  .imgdBg {
    img {
      width: 100%; 
      height: 250px;
    }
    &:after {
        background-color: rgba(0,0,0,.4);
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
  }
  div {
    span {
      text-align: center;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.8rem;
      font-weight: 700; 
      margin: 0;
      width: 95%;
    }
  }
`

const ActividadMore = styled.div`
  img {
    width: 100%;
  }
  box-shadow: 0px 0px 8px 1px rgba(0,0,0,.2);
`

const ActividadSingle = styled.div`
  box-shadow: 0px 0px 8px 1px rgba(0,0,0,.2);
  width: 95% !important;
  &:not(:last-child) {
  }
  margin-bottom: 3rem;
`

export default class SectionActividadesCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 4,
    }
    return (
      <SectionAtividades>
        <MDBContainer>
          <SectionTitle>Actividades</SectionTitle>
          <MDBRow>
            <MDBCol size="12"> 
              <Slider {...settings} className="flexGroup">
                <ActividadSingle>
                  <ActividadDate> 
                    <span>
                      SÁBADO 19
                    </span>
                    <span className="monthClass">
                      ENERO
                    </span> 
                  </ActividadDate>
                  <Relative>
                    <div className="imgdBg">
                      <img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_centroif-1.png" alt=""/>
                    </div>
                    <div>
                      <span>¡Centro de innovación IF te sorprende con entrenidos talleres este mes!</span>
                    </div>
                  </Relative>
                </ActividadSingle>
                <ActividadSingle>
                  <ActividadDate> 
                    <span>
                      SÁBADO 19
                    </span>
                    <span className="monthClass">
                      ENERO
                    </span> 
                  </ActividadDate>
                  <Relative>
                    <div className="imgdBg">
                      <img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_centroif-1.png" alt=""/>
                    </div>
                    <div>
                      <span>¡Centro de innovación IF te sorprende con entrenidos talleres este mes!</span>
                    </div>
                  </Relative>
                </ActividadSingle>
                <ActividadSingle>
                  <ActividadDate> 
                    <span>
                      SÁBADO 19
                    </span>
                    <span className="monthClass">
                      ENERO
                    </span> 
                  </ActividadDate>
                  <Relative>
                    <div className="imgdBg">
                      <img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_centroif-1.png" alt=""/>
                    </div>
                    <div>
                      <span>¡Centro de innovación IF te sorprende con entrenidos talleres este mes!</span>
                    </div>
                  </Relative>
                </ActividadSingle>
                <ActividadSingle>
                  <ActividadDate> 
                    <span>
                      SÁBADO 19
                    </span>
                    <span className="monthClass">
                      ENERO
                    </span> 
                  </ActividadDate>
                  <Relative>
                    <div className="imgdBg">
                      <img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_centroif-1.png" alt=""/>
                    </div>
                    <div>
                      <span>¡Centro de innovación IF te sorprende con entrenidos talleres este mes!</span>
                    </div>
                  </Relative>
                </ActividadSingle>
                <ActividadSingle>
                  <ActividadDate> 
                    <span>
                      SÁBADO 19
                    </span>
                    <span className="monthClass">
                      ENERO
                    </span> 
                  </ActividadDate>
                  <Relative>
                    <div className="imgdBg">
                      <img src="https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Caluga_Home_centroif-1.png" alt=""/>
                    </div>
                    <div>
                      <span>¡Centro de innovación IF te sorprende con entrenidos talleres este mes!</span>
                    </div>
                  </Relative>
                </ActividadSingle>
              </Slider>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="4">
              <ActividadMore>
                <img src="https://losdominicos.mallplaza.cl/web/wp-content/themes/mallplaza/images/caluga-horario.jpg" alt=""/>
              </ActividadMore>
            </MDBCol>
            <MDBCol size="4">
              <ActividadMore>
                <img src="https://losdominicos.mallplaza.cl/web/wp-content/themes/mallplaza/images/caluga-horario.jpg" alt=""/>
              </ActividadMore>
            </MDBCol>
            <MDBCol size="4">
              <ActividadMore>
                <img src="https://losdominicos.mallplaza.cl/web/wp-content/themes/mallplaza/images/caluga-horario.jpg" alt=""/>
              </ActividadMore>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </SectionAtividades>
    )
  }
}