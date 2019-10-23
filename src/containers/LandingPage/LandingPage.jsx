import React from 'react'
import backgroundImage from '../../landing-page-background.jpg'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Link } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import Resturants from '../../data/cards'
const { Content } = Layout

class LandingPage extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.routeProps !== this.props.routeProps) {
      this.props.update(this.props.routeProps)
    }
  }
  componentDidMount() {
    this.props.update(this.props.routeProps)
  }
  render() {
    const cards = Resturants.map(restaurant => (
      <Col key={restaurant.title}>
        <Link to={`/${this.props.language}${restaurant.link}`}>
          <RestaurantCard restaurant={restaurant} />
        </Link>
      </Col>
    ))
    return (
      <Content
        style={{
          backgroundImage: `url(${backgroundImage})`,
          padding: '50px 0'
        }}
      >
        <Row type="flex" justify="center">
          {cards}
        </Row>
      </Content>
    )
  }
}

export default LandingPage
