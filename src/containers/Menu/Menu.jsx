import React from 'react'
import { List } from 'antd'
import Menus from '../../data/menus'

const Menu = ({restaurant}) => {
  const menu = Menus[restaurant]
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
