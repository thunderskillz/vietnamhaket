import React from 'react'
import logo from '../../logo.png'
import './LandingPage.css'
import { Row, Col, Button, Layout, Icon } from 'antd'
import SiteText from '../../data/SiteText'
import Restaurants from '../../data/Restaurants'
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage'
import FooterContent from '../../components/FooterContent/FooterContent'
const { Content, Footer } = Layout

const LandingPage = ({ language, setLanguage, setRestaurant }) => {
  const siteText = SiteText[language]
  const restaurants = Restaurants.map(restaurant => {
    const handleSetRestaurant = () => {
      setRestaurant(restaurant)
    }
    const name = siteText[restaurant]
    return (
      <Col key={name} xs={24} md={12} lg={8} xl={6}>
        <Button
          type="primary"
          size="large"
          block
          ghost
          onClick={handleSetRestaurant}
        >
          {name}
          <Icon type="arrow-right" />
        </Button>
      </Col>
    )
  })
  return (
    <Layout className="landing-page">
      <Content style={{ padding: 16 }}>
        <ChangeLanguage selectedLanguage={language} setLanguage={setLanguage} />
        <Row type="flex" justify="center">
          <Col>
            <img className="landing-page-logo" src={logo} alt="Vietnamhaket" />
          </Col>
        </Row>
        <h1 style={{ textAlign: 'center' }}>{siteText.chooseRestaurant}</h1>
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
