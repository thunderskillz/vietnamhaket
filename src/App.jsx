import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import HeaderContent from './components/HeaderContent/HeaderContent'
import FooterContent from './components/FooterContent/FooterContent'
import LandingPage from './containers/LandingPage/LandingPage'
import Restaurant from './containers/Restaurant/Restaurant'
import Menu from './containers/Menu/Menu'
const { Header, Footer } = Layout

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'sv',
      restaurant: ''
    }
    this.changeLanguage = this.changeLanguage.bind(this)
    this.changeRestaurant = this.changeRestaurant.bind(this)
    this.setupState = this.setupState.bind(this)
  }
  changeLanguage(language) {
    this.setState({
      language: language
    })
  }
  changeRestaurant(restaurant) {
    this.setState({
      restaurant: restaurant
    })
  }
  setupState(routeProps) {
    const languageMatch = routeProps.match.params[0]
    if(typeof languageMatch !== 'undefined' && this.state.language !== languageMatch) {
      this.changeLanguage(languageMatch)
    }
    const resturantMatch = routeProps.match.params[1]
    if(typeof resturantMatch !== 'undefined' && this.state.restaurant !== resturantMatch) {
      this.changeRestaurant(resturantMatch)
    }
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <HeaderContent language={this.state.language} restaurant={this.state.restaurant} changeLanguage={this.changeLanguage} />
          </Header>
          <Route exact path="/">
            <Redirect to={`/${this.state.language}`} />
          </Route>
          <Route exact path="/(sv|en)" render={routeProps => {
            this.setupState(routeProps)
            return <LandingPage language={this.state.language} />
          }} />
            
          <Route exact path="/(sv|en)/(briggen|barnhusgatan)" render={routeProps => {
            this.setupState(routeProps)
            return <Restaurant restaurant={this.state.restaurant} />
          }} />
          <Route
            exact
            path="/(sv|en)/(briggen|barnhusgatan)/meny"
            component={Menu}
          />
          <Footer style={{ textAlign: 'center' }}>
            <FooterContent />
          </Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
