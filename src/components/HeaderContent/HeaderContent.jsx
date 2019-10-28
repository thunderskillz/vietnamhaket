import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Menu, Row, Col } from 'antd'
import HeaderLinks from '../../data/HeaderLinks'

const HeaderContent = ({ language, restaurant }) => {
  const baseURL = `/${language}/${restaurant}`
  const headerLinksText = HeaderLinks[language]
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <HashLink to={`${baseURL}#menu`}>{headerLinksText.menu}</HashLink>
      </Col>
      <Col span={12}>
        <HashLink to={`${baseURL}#contactUs`}>
          {headerLinksText.contactUs}
        </HashLink>
      </Col>
      <Col span={12}>
        <HashLink to={`${baseURL}#aboutUs`}>{headerLinksText.aboutUs}</HashLink>
      </Col>
    </Row>
  )
}

export default HeaderContent
