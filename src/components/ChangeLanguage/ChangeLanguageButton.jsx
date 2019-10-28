import React from 'react'
import { Button } from 'antd'
import Flags from '../../data/Flags'

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
    this.props.setLanguage(this.props.language)
  }
  render() {
    return (
      <Button type="link" onClick={this.handleClick}>
        {Flags[this.props.language]}
      </Button>
    )
  }
}

export default ChangeLanguageButton
