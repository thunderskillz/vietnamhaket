import React from 'react'
import { List } from 'antd'

const Menu = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={[
        { title: 'Title', description: 'Description', content: '', href: '#' }
      ]}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  )
}

export default Menu
