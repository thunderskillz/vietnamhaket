import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const HeaderContent = () => {
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
      <Menu.Item>
        <Link to="/menu">Meny</Link>
      </Menu.Item>
      <Menu.Item>Kontakt</Menu.Item>
      <Menu.Item>Instagram</Menu.Item>
      <Menu.Item>Om oss</Menu.Item>
      <Menu.Item>Språk</Menu.Item>
    </Menu>
  )
}

export default HeaderContent
