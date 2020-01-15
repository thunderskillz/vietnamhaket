import React from 'react'
import { Row, Button } from 'antd'
import { useMediaQuery } from 'react-responsive'
import SiteText from '../../data/SiteText'

const Navigation = ({ language }) => {
  const siteText = SiteText[language]
  const size = useMediaQuery({ maxWidth: 576 }) ? 'small' : 'large'
  return (
    <Row type="flex" justify="center" style={{ padding: '16px 0' }}>
      <Button href="#menu" type="link" size={size}>
        {siteText.menu}
      </Button>
      <Button href="#contactUs" type="link" size={size}>
        {siteText.contactUs}
      </Button>
      <Button href="#openingHours" type="link" size={size}>
        {siteText.openingHours}
      </Button>
    </Row>
  )
}

export default Navigation
