import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './DefaultPage.css'
import { Layout, Row, Col, BackTop } from 'antd'
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage'
import FooterContent from '../../components/FooterContent/FooterContent'
import Menu from '../Menu/Menu'
import Banner from '../../components/Banner/Banner'
import Information from '../../components/Information/Information'
import Navigation from '../../components/Navigation/Navigation'
const { Content, Footer } = Layout

const DefaultPage = ({ language, setLanguage, restaurant }) => {
  return (
    <Layout>
      <Content style={{ padding: '16px' }}>
        <ChangeLanguage selectedLanguage={language} setLanguage={setLanguage} />
        <Row type="flex" justify="center">
          <Col>
            <Link to={`/${language}`}>
              <img
                className="default-page-logo"
                src={logo}
                alt="Vietnamhaket"
              />
            </Link>
          </Col>
        </Row>
        <Navigation language={language} />
        <Row>
          <Banner restaurant={restaurant} />
        </Row>
        <Row>
          <Information language={language} restaurant={restaurant} />
        </Row>
        <Row>
          <Menu language={language} restaurant={restaurant} />
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <FooterContent />
      </Footer>
      <BackTop />
    </Layout>
  )
}

export default DefaultPage
