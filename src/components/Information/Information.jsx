import React from 'react'
import SiteText from '../../data/SiteText'
import RestaurantInformation from '../../data/RestaurantInformation'
import './Information.css'
import { Icon, Row, Col } from 'antd'

const Information = ({ language, restaurant }) => {
  const siteText = SiteText[language]
  const restaurantInformation = RestaurantInformation[language][restaurant]
  let currentDay = (new Date().getDay() - 1) % 7
  currentDay = currentDay === -1 ? 6 : currentDay
  const openingHours = restaurantInformation.openingHours.days.map(
    ({ day, hours }, index) => (
      <li
        key={day}
        style={currentDay === index ? { fontWeight: 'bold' } : {}}
      >{`${day}: ${hours}`}</li>
    )
  )
  return (
    <div className="information">
      <h1 className="about">{restaurantInformation.aboutUs.description}</h1>
      <Row type="flex" justify="center" gutter={[0, 48]}>
        <Col xs={24} md={12}>
          <div
            id="contactUs"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <ul style={{ padding: '0', margin: '0', listStyle: 'none' }}>
              <li>
                <h1 style={{ textAlign: 'center' }}>{siteText.contactUs}</h1>
              </li>
              <li>
                <Icon type="compass" style={{ marginRight: '6px' }} />
                <a
                  href={`https://www.google.se/maps?q=${restaurantInformation.contactUs.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {restaurantInformation.contactUs.address}
                </a>
              </li>
              <li>
                <Icon type="phone" style={{ marginRight: '6px' }} />
                <a href={`tel:${restaurantInformation.contactUs.phone}`}>
                  {restaurantInformation.contactUs.phone}
                </a>
              </li>
              <li>
                <Icon type="mail" style={{ marginRight: '6px' }} />
                <a href={`mailto:${restaurantInformation.contactUs.mail}`}>
                  {restaurantInformation.contactUs.mail}
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div
            id="openingHours"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <ul style={{ padding: '0', margin: '0', listStyle: 'none' }}>
              <li>
                <h1 style={{ textAlign: 'center' }}>{siteText.openingHours}</h1>
              </li>
              {openingHours}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Information
