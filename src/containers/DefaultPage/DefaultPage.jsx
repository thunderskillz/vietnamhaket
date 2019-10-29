import React from 'react'
import logo from '../../logo.png'
import './DefaultPage.css'
import { Layout, Row, Col } from 'antd'
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage'
import FooterContent from '../../components/FooterContent/FooterContent'
import RestaurantInformation from '../../data/RestaurantInformation'
import Menu from '../Menu/Menu'
const { Content, Footer } = Layout

const DefaultPage = ({ language, setLanguage, restaurant }) => {
  const restaurantInformation = RestaurantInformation[language][restaurant]
  return (
    <Layout>
      <Content style={{ padding: '16px' }}>
        <Row type="flex" justify="end" gutter={[16, 16]}>
          <Col>
            <ChangeLanguage
              selectedLanguage={language}
              setLanguage={setLanguage}
            />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <img className="default-page-logo" src={logo} alt="logo" />
          </Col>
        </Row>
        <Row>
          <Menu language={language} restaurant={restaurant} />
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <FooterContent />
      </Footer>
    </Layout>
  )
}

export default DefaultPage
