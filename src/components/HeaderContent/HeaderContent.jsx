import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
        <Menu.Item>
          <HashLink to="#contactUs">
            Kontakt
          </HashLink>
        </Menu.Item>
        <Menu.Item>
          <HashLink to="#instagram">
            Instagram
          </HashLink>
        </Menu.Item>
        <Menu.Item>
          <HashLink to="#aboutUs">
            Om oss
          </HashLink>
        </Menu.Item>
        <Menu.Item>Språk</Menu.Item>
    </Menu>
  )
}

export default HeaderContent
