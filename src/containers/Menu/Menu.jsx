import React from 'react'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExtraInformation } from '../../data/ExtraInformation'
import { Card, Col, Row } from 'antd'
import Menus from '../../data/Menus'
import Meta from 'antd/lib/card/Meta'

class Menu extends React.Component {
  render() {
    const menu = Menus[this.props.language][this.props.restaurant]
    const extraInformation = ExtraInformation[this.props.language]
    const menuItems = menu.map(item => {
      const icons = Object.keys(extraInformation)
        .filter(key => item.extra[key])
        .map(key => (
          <li style={{ marginRight: '6px' }}>
            <FontAwesomeIcon icon={extraInformation[key].icon} />
          </li>
        ))
      return (
        <Col key={item.title} xs={24} sm={12} md={8} xl={6} xxl={4}>
          <Card
            key={item.title}
            style={{ height: '100%' }}
            bordered={false}
            cover={<img alt={item.title} src={item.image} />}
          >
            <Meta
              title={`${item.title}${
                item.shortDescription.length > 0
                  ? ` - ${item.shortDescription}`
                  : ''
              }`}
              description={item.longDescription}
              style={{ height: '100%' }}
            />
            <ul
              style={{
                display: 'flex',
                padding: '12px 0',
                margin: '0',
                listStyle: 'none'
              }}
            >
              {icons}
            </ul>
            <div
              style={{
                textAlign: 'right',
                fontWeight: 'bold'
              }}
            >
              {item.price}
            </div>
          </Card>
        </Col>
      )
    })
    const extraInformationDescription = Object.keys(extraInformation).map(
      key => {
        const extra = extraInformation[key]
        return (
          <div className="description">
            <FontAwesomeIcon icon={extra.icon} />
            <span>{extra.description}</span>
          </div>
        )
      }
    )
    return (
      <div>
        <div className="extra-information">{extraInformationDescription}</div>
        <Row type="flex" gutter={[16, 16]}>
          {menuItems}
        </Row>
      </div>
    )
  }
}

export default Menu
