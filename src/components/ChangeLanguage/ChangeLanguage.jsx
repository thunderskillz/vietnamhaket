import React from 'react'
import ChangeLanguageButton from './ChangeLanguageButton'
import Languages from '../../data/Languages'

const ChangeLanguage = props => {
  const changeLanguageButtons = Languages.map(language => (
    <ChangeLanguageButton
      key={language}
      history={props.history}
      selectedLanguage={props.selectedLanguage}
      language={language}
    />
  ))
  return <div>{changeLanguageButtons}</div>
}

export default ChangeLanguage
