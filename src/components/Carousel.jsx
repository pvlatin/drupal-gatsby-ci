import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    }
    return (
      <Slider {...settings}>
        <div>
          <img src='https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Banner_1600x519_GOJUMP-MPLD-2.png' alt="kitten" />
        </div>
        <div>
          <img src='https://losdominicos.mallplaza.cl/web/wp-content/uploads/2019/01/Banner_MPLD_1600x519_FirmaAutografo_MPLD.png' alt="kitten" />
        </div>
        <div>
          <img src='https://losdominicos.mallplaza.cl/web/wp-content/uploads/2019/01/Banner_MPLD_1600x519_17.00hrs.png' alt="kitten" />
        </div>
        <div>
          <img src='https://losdominicos.mallplaza.cl/web/wp-content/uploads/2019/01/2019-01-04-1.png' alt="kitten" />
        </div>
        <div>
          <img src='https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/12/Banner_MPLD_1600x519_CENTROiF-2-1.png' alt="kitten" />
        </div>
        <div>
          <img src='https://losdominicos.mallplaza.cl/web/wp-content/uploads/2018/02/BigBanner3_Turistas_1600x519.jpg' alt="kitten" />
        </div>
      </Slider>
    )
  }
}