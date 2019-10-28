import React from 'react'
import { Card, Col, Row } from 'antd'
import Menus from '../../data/Menus'
import Meta from 'antd/lib/card/Meta'

class Menu extends React.Component {
  render() {
    const menu = Menus[this.props.language][this.props.restaurant]
    const menuItems = menu.map(item => (
      <Col xs={24} sm={12} md={8} xl={6} xxl={4}>
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
          />
        </Card>
      </Col>
    ))
    return (
      <Row type="flex" gutter={[16, 16]}>
        {menuItems}
      </Row>
    )
  }
}

export default Menu
