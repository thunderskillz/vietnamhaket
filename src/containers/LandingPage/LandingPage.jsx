import React from 'react'
import logo from '../../logo.png'
import './LandingPage.css'
import { Row, Col, Button, Layout, Icon } from 'antd'
import LandingPageInformation from '../../data/LandingPageInformation'
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage'
import FooterContent from '../../components/FooterContent/FooterContent'
const { Content, Footer } = Layout

const LandingPage = ({ language, setLanguage, setRestaurant }) => {
  const restaurants = LandingPageInformation[language].restaurants.map(
    restaurant => {
      const handleSetRestaurant = () => {
        setRestaurant(restaurant.key)
      }
      return (
        <Col key={restaurant.title} xs={24} md={12} lg={8} xl={6}>
          <Button
            type="primary"
            size="large"
            block
            ghost
            onClick={handleSetRestaurant}
          >
            {restaurant.title}
            <Icon type="arrow-right" />
          </Button>
        </Col>
      )
    }
  )
  return (
    <Layout className="landing-page">
      <Content style={{ padding: 16 }}>
        <ChangeLanguage selectedLanguage={language} setLanguage={setLanguage} />
        <Row type="flex" justify="center">
          <Col>
            <img className="landing-page-logo" src={logo} alt="logo" />
          </Col>
        </Row>
        <h1 style={{ textAlign: 'center' }}>Välj restaurang</h1>
        <Row type="flex" justify="center" gutter={[16, 16]}>
          {restaurants}
        </Row>
      </Content>
      <Footer>
        <FooterContent />
      </Footer>
    </Layout>
  )
}

export default LandingPage
