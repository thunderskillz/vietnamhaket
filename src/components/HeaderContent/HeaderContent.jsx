import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const HeaderContent = ({language, restaurant, changeLanguage}) => {
  let menuMenuItem
  if (restaurant.length > 0) {
    menuMenuItem = (
      <Menu.Item>
        <Link to={`/${language}/${restaurant}/meny`} >Meny</Link>
      </Menu.Item>
    )
  }
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
      {menuMenuItem}
      <Menu.Item>Kontakt</Menu.Item>
      <Menu.Item>Instagram</Menu.Item>
      <Menu.Item>Om oss</Menu.Item>
      <Menu.Item>Språk</Menu.Item>
    </Menu>
  )
}

export default HeaderContent
