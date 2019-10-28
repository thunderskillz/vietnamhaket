import React from 'react'
import ChangeLanguageButton from './ChangeLanguageButton'
import Languages from '../../data/Languages'
import ButtonGroup from 'antd/lib/button/button-group'

const ChangeLanguage = ({ selectedLanguage, setLanguage }) => {
  const changeLanguageButtons = Languages.map(language => (
    <ChangeLanguageButton
      key={language}
      selectedLanguage={selectedLanguage}
      language={language}
      setLanguage={setLanguage}
    />
  ))
  return <ButtonGroup>{changeLanguageButtons}</ButtonGroup>
}

export default ChangeLanguage
