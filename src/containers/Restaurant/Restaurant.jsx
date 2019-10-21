import React from 'react'
import img1 from '../../IMG_1390.jpg'
import img2 from '../../IMG_1444.jpg'
import { Layout, Carousel } from 'antd'
const { Content } = Layout

const Restaurant = props => {
  return (
    <Content
      style={{
        backgroundColor: '#ffffff'
      }}
    >
      <Carousel>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </Carousel>
    </Content>
  )
}

export default Restaurant
