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
    <>
      <Sm>
        <img key={index} src={`/images/sm/${path}`} alt="" />
      </Sm>
      <Md>
        <img key={index} src={`/images/md/${path}`} alt="" />
      </Md>
      <Lg>
        <img key={index} src={`/images/lg/${path}`} alt="" />
      </Lg>
      <Xl>
        <img key={index} src={`/images/xl/${path}`} alt="" />
      </Xl>
    </>
  ))
  return <Carousel autoplay>{carouselImages}</Carousel>
}

export default Banner
