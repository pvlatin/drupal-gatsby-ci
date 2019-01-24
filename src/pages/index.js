
import React from 'react'
import Layout from '../components/Layout'
// import Image from '../components/image'
// import Tiendas from '../components/Tiendas'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import SectionNuestrasTiendas from '../components/SectionNuestrasTiendas'
import SectionQueEstaPasando from '../components/SectionQueEstaPasando'
import SectionActividadesCarousel from '../components/SectionActividadesCarousel'

import '../styles/main.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <Carousel/>
    <Services/>
    <SectionNuestrasTiendas/>
    <SectionQueEstaPasando/>
    <SectionActividadesCarousel/>
  </Layout>
)

export default IndexPage
