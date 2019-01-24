import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    padding: 0 0 2rem 0;
    position: relative;
    background: #e31350;
`

const FooterNav = styled.ul`
    padding: 10px 0;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: center;    
    list-style: none;
    background-color: #ca003c;
    li {
        color: white;
        text-align: center;
        font-size: 1.8rem;
        font-weight: 500;
        &:not(:last-child) {
            margin-right: 3rem;
        }
        &:not(:first-child) {
            margin-left: 3rem;
        }
        /* &:not(:last-child)::after {
            content: "";
            margin-right: 40px;
            padding-right: 4px;
            background: white;
        } */
    }
    span {
        border-radius: 2px;
        width: 2px;
        height: 13px;
        margin: auto 0;
        background: white;  
    }
`

const FooterBody = styled.div`
    background: #e31350;
    bottom: 0;
    width: 100%;
    text-align: center;
    div {
        ul {
            margin-top: 2.5rem;
            li {
                color: white;
                font-size: 2rem;
                font-weight: 600;
                i {
                    margin-right: 8px;
                }
            }
        }
    }
`

const FlexList = styled.ul`
    display:flex;
    list-style-type: none;
    justify-content: center;
    li {
        height: 3.8rem;
        width: 3.8rem;
        background-color: white;
        border-radius: 50%;
        position: relative;
        &:not(:last-child) {
            margin-right: 7px;
        }
        i {
            color: #e31350;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2.2rem;
            font-weight: 500;
        }
    }
`

const Footer = () => {
  return ( 
    <FooterWrapper>
      <FooterNav>
        <li>mallplaza.com</li><span></span>    
        <li>información financiera</li><span></span> 
        <li>código de integridad</li><span></span> 
        <li>linio.cl</li><span></span> 
        <li>bases legales</li>
      </FooterNav>
      <FooterBody>
        <div>
          <FlexList>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-youtube"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-linkedin-in"></i>
            </li>
          </FlexList> 
          <ul>
            <li className="no-padding margin-bottom-sm"><i class="far fa-clock"></i>10:00 a 21:30hrs</li>
            <li className="margin-bottom-sm"><i class="fas fa-map-marker-alt"></i>Padre Hurtado Sur 875</li>
            <li className="margin-bottom-sm"><i class="fas fa-bus"></i>¿Cómo llegar?</li>
            <li className="margin-bottom-sm"><i class="fas fa-phone"></i>600 585 7000</li>
            <li className="margin-bottom-sm"><i class="fas fa-envelope"></i>Escríbenos</li>
          </ul>
        </div>
      </FooterBody>
    </FooterWrapper>
  )
}
 
export default Footer
