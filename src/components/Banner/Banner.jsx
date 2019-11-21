import React from 'react'
import './Banner.css'
import { Carousel } from 'antd'
import Images from '../../data/Images'
const Banner = ({ restaurant }) => {
  const restaurantImages = Images[restaurant]
  const carouselImages = restaurantImages.map((path, index) => (
    <img key={index} src={path} alt="" />
  ))
  return <Carousel autoplay>{carouselImages}</Carousel>
}

export default Banner
