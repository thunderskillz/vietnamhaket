import React from 'react'
import { List } from 'antd'
import Menus from '../../data/menus'

const Menu = props => {
  const menu = Menus[props.match.params[0]]
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
          <List.Item.Meta title={item.title} description={item.description} />
          {item.content}
        </List.Item>
      )}
    />
  )
}

export default Menu
