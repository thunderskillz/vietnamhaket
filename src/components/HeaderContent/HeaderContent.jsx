import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Menu } from 'antd'
import HeaderLinks from '../../data/HeaderLinks'

const HeaderContent = ({ language, restaurant }) => {
  const headerLinksText = HeaderLinks[language]
  let menuMenuItem
  if (restaurant.length > 0) {
    menuMenuItem = (
      <Menu.Item>
        <Link to={`/${language}/${restaurant}/meny`}>
          {headerLinksText.menu}
        </Link>
      </Menu.Item>
    )
  }
  return (
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
      {menuMenuItem}
      <Menu.Item>
        <HashLink to="#contactUs">{headerLinksText.contactUs}</HashLink>
      </Menu.Item>
      <Menu.Item>
        <HashLink to="#instagram">{headerLinksText.instagram}</HashLink>
      </Menu.Item>
      <Menu.Item>
        <HashLink to="#aboutUs">{headerLinksText.aboutUs}</HashLink>
      </Menu.Item>
    </Menu>
  )
}

export default HeaderContent
