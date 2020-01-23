import React from 'react'
import { gaEvent } from '../Tracking/Tracking'
import { Row, Button } from 'antd'
import { useMediaQuery } from 'react-responsive'
import SiteText from '../../data/SiteText'

const Navigation = ({ language }) => {
  const siteText = SiteText[language]
  const size = useMediaQuery({ maxWidth: 576 }) ? 'small' : 'large'
  return (
    <Row type="flex" justify="center" style={{ padding: '16px 0' }}>
      <Button
        href="#menu"
        type="link"
        size={size}
        onClick={() => gaEvent('Restaurant page', 'Navigation', 'Menu')}
      >
        {siteText.menu}
      </Button>
      <Button
        href="#contactUs"
        type="link"
        size={size}
        onClick={() => gaEvent('Restaurant page', 'Navigation', 'Contact Us')}
      >
        {siteText.contactUs}
      </Button>
      <Button
        href="#openingHours"
        type="link"
        size={size}
        onClick={() =>
          gaEvent('Restaurant page', 'Navigation', 'Opening Hours')
        }
      >
        {siteText.openingHours}
      </Button>
    </Row>
  )
}

export default Navigation
