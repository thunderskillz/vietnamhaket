import React from 'react'
import { List } from 'antd'
import Menus from '../../data/menus'

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
    const menu = Menus[this.props.restaurant]
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
              title={item.title}
              description={item.description[this.props.language]}
            />
          </List.Item>
        )}
      />
    )
  }
}

export default Menu
