import React from 'react'
import { gaEvent } from '../../components/Tracking/Tracking'
import { Row, Col, Icon, Divider } from 'antd'

const FooterContent = () => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col>
          <a
            href="https://www.instagram.com/vietnamhaket/"
            onClick={() => gaEvent('All', 'Social', 'Instagram')}
          >
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
          <a
            href="https://www.facebook.com/vietnamhaket/"
            onClick={() => gaEvent('All', 'Social', 'Facebook')}
          >
            <Icon type="facebook" style={{ fontSize: '24px' }} />
          </a>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col>
          <span>Vietnamhaket ©{new Date().getFullYear()}</span>
        </Col>
      </Row>
    </div>
  )
}

export default FooterContent
