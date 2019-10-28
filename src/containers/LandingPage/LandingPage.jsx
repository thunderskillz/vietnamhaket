import React from 'react'
import logo from '../../logo.png'
import './LandingPage.css'
import { Row, Col, Button, Layout } from 'antd'
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
          </Button>
        </Col>
      )
    }
  )
  return (
    <Layout className="landing-page">
      <div className="page-content">
        <Content>
          <Row type="flex" justify="end" gutter={[16, 16]}>
            <Col>
              <ChangeLanguage
                selectedLanguage={language}
                setLanguage={setLanguage}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" gutter={[16, 16]}>
            <Col>
              <img className="landing-page-logo" src={logo} alt="logo" />
            </Col>
          </Row>
          <Row type="flex" justify="center" gutter={[16, 16]}>
            {restaurants}
          </Row>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </div>
    </Layout>
  )
}

export default LandingPage
