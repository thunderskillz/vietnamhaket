import React from 'react'
import backgroundImage from '../../landing-page-background.jpg'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { Link } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
const { Content } = Layout

const LandingPage = props => {
  return (
    <Content
      style={{
        backgroundImage: `url(${backgroundImage})`,
        padding: '50px 0'
      }}
    >
      <Row type="flex" justify="center">
        <Col>
          <Link to="/1">
            <RestaurantCard />
          </Link>
        </Col>
        <Col>
          <Link to="/2">
            <RestaurantCard />
          </Link>
        </Col>
      </Row>
    </Content>
  )
}

export default LandingPage
