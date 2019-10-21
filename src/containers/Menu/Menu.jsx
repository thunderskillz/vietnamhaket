import React from 'react'
import { List } from 'antd'

const Menu = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={props.menu}
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
