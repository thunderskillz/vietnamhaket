import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Button } from 'antd'
import Resturants from '../../data/cards'
const { Content } = Layout

const LandingPage = ({ language }) => {
  const restaurants = Resturants.map(restaurant => (
    <Col key={restaurant.title} span={24}>
      <Link to={`/${language}${restaurant.link}`}>
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

export default LandingPage
