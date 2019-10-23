import React from 'react'
import { List } from 'antd'
import Menus from '../../data/Menus'

class Menu extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.routeProps !== this.props.routeProps) {
      this.props.update(this.props.routeProps)
    }
  }
  componentDidMount() {
    this.props.update(this.props.routeProps)
  }
  render() {
    const menu = Menus[this.props.language][this.props.restaurant]
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={menu}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={272} alt={item.title} src={item.image} />}
          >
            <List.Item.Meta
              title={`${item.title}${
                item.shortDescription.length > 0
                  ? ` - ${item.shortDescription}`
                  : ''
              }`}
              description={item.longDescription}
            />
          </List.Item>
        )}
      />
    )
  }
}

export default Menu
