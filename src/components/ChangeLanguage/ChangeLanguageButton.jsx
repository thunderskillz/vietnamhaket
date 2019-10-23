import React from 'react'
import { Button } from 'antd'
import Languages from '../../data/Languages'

class ChangeLanguageButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if (this.props.selectedLanguage === this.props.language) {
      this.setState({
        selected: true
      })
    }
  }
  componentDidUpdate(prevProps) {
    console.log('TEST')
    if (prevProps.selectedLanguage !== this.props.selectedLanguage) {
      if (
        !this.state.selected &&
        this.props.selectedLanguage === this.props.language
      ) {
        this.setState({
          selected: true
        })
      }
      if (
        this.state.selected &&
        this.props.selectedLanguage !== this.props.language
      ) {
        this.setState({
          selected: false
        })
      }
    }
  }
  handleClick() {
    const languagesRegex = new RegExp(`/(${Languages.join('|')})`)
    this.props.history.push(
      `/${window.location.pathname.replace(
        languagesRegex,
        this.props.language
      )}`
    )
  }
  render() {
    return (
      <Button onClick={this.handleClick}>{`${
        this.state.selected ? 'Selected: ' : ''
      }${this.props.language}`}</Button>
    )
  }
}

export default ChangeLanguageButton
