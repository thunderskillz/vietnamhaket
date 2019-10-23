import React from 'react'
import img1 from '../../IMG_1390.jpg'
import img2 from '../../IMG_1444.jpg'
import { Layout, Carousel } from 'antd'
import RestaurantInformation from '../../data/RestaurantInformation'
const { Content } = Layout

class Restaurant extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.routeProps !== this.props.routeProps) {
      this.props.update(this.props.routeProps)
    }
  }
  componentDidMount() {
    this.props.update(this.props.routeProps)
  }
  render() {
    const restaurantInformation =
      RestaurantInformation[this.props.language][this.props.restaurant]
    let contactInformation, instagram, aboutUs
    if (restaurantInformation) {
      contactInformation = restaurantInformation.contactUs
      instagram = restaurantInformation.instagram
      aboutUs = restaurantInformation.aboutUs
    }
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
        <section id="contactUs">{contactInformation}</section>
        <hr />
        <section id="instagram">{instagram}</section>
        <hr />
        <section id="aboutUs">{aboutUs}</section>
      </Content>
    )
  }
}

export default Restaurant
