import React from 'react'
import { Row, Col, Icon, Divider } from 'antd'

const FooterContent = () => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col>
          <a href="https://www.instagram.com/vietnamhaket/">
            <Icon type="instagram" style={{ fontSize: '24px' }} />
          </a>
          <Divider
            type="vertical"
            style={{
              background: '#890000',
              top: '-0.33em',
              height: '1.35em'
            }}
          />
          <a href="https://www.facebook.com/vietnamhaket/">
            <Icon type="facebook" style={{ fontSize: '24px' }} />
          </a>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col>
          <span style={{ color: '#890000' }}>Vietnamhaket ©2019</span>
        </Col>
      </Row>
    </div>
  )
}

export default FooterContent
