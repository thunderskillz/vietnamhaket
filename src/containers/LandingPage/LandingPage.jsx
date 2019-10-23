import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Button } from 'antd'
import Restaurants from '../../data/cards'
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
    const restaurants = Restaurants.map(restaurant => (
      <Col key={restaurant.title} span={24}>
        <Link to={`/${this.props.language}${restaurant.link}`}>
          <Button type="primary" size="large" block>
            {restaurant.title}
          </Button>
        </Link>
      </Col>
    ))
    return (
      <Content>
        <Row type="flex" justify="center">
          <Col>
            <div>
              <img src={logo} alt="logo" />
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          {restaurants}
        </Row>
      </Content>
    )
  }
}

export default LandingPage
