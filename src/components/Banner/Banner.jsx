import React from 'react'
import './Banner.css'
import { Carousel } from 'antd'
import Images from '../../data/Images'
import { useMediaQuery } from 'react-responsive'

const Sm = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 })
  return isMobile ? children : null
}
const Md = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 577, maxWidth: 768 })
  return isNotMobile ? children : null
}
const Lg = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 992 })
  return isTablet ? children : null
}
const Xl = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 993 })
  return isDesktop ? children : null
}

const Banner = ({ restaurant }) => {
  const restaurantImages = Images[restaurant]
  const carouselImages = restaurantImages.map((path, index) => (
    <React.Fragment key={index}>
      <Sm>
        <img src={`/images/sm/${path}`} alt="" />
      </Sm>
      <Md>
        <img src={`/images/md/${path}`} alt="" />
      </Md>
      <Lg>
        <img src={`/images/lg/${path}`} alt="" />
      </Lg>
      <Xl>
        <img src={`/images/xl/${path}`} alt="" />
      </Xl>
    </React.Fragment>
  ))
  return <Carousel autoplay>{carouselImages}</Carousel>
}

export default Banner
