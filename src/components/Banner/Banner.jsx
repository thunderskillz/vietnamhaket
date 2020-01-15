import React from 'react'
import './Banner.css'
import { Carousel } from 'antd'
import Images from '../../data/Images'
import { Sm, Md, Lg, Xl } from '../MediaQuery/MediaQuery'

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
