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
      <section>
        <Carousel>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </Carousel>
      </section>
      <hr />
      <section>
        Kontaktinformation
      </section>
      <hr />
      <section>
        Instagram
      </section>
      <hr />
      <section>
        Om oss
      </section>
    </Content>
  )
}

export default Restaurant
