import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import HeaderContent from './components/HeaderContent/HeaderContent'
import FooterContent from './components/FooterContent/FooterContent'
import LandingPage from './containers/LandingPage/LandingPage'
import Restaurant from './containers/Restaurant/Restaurant'
import Menu from './containers/Menu/Menu'
import ChangeLanguage from './components/ChangeLanguage/ChangeLanguage'
import Languages from './data/Languages'
import Restaurants from './data/Restaurants'
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
    if (
      typeof languageMatch !== 'undefined' &&
      this.state.language !== languageMatch
    ) {
      this.changeLanguage(languageMatch)
    }
    const restaurantMatch = routeProps.match.params[1]
    if (
      typeof restaurantMatch !== 'undefined' &&
      this.state.restaurant !== restaurantMatch
    ) {
      this.changeRestaurant(restaurantMatch)
    }
  }
  render() {
    const languagesURLPath = `(${Languages.join('|')})`
    const restaurantsURLPath = `(${Restaurants.join('|')})`
    const LandingPageContainer = props => (
      <Layout>
        <ChangeLanguage
          history={props.history}
          selectedLanguage={this.state.language}
        />
        <LandingPage
          update={this.setupState}
          routeProps={props}
          language={this.state.language}
        />
      </Layout>
    )

    const DefaultContainer = props => (
      <Layout>
        <ChangeLanguage
          history={props.history}
          selectedLanguage={this.state.language}
        />
        <Header>
          <HeaderContent
            language={this.state.language}
            restaurant={this.state.restaurant}
          />
        </Header>
        <Route
          exact
          path={`/${languagesURLPath}/${restaurantsURLPath}`}
          render={routeProps => {
            return (
              <Restaurant
                update={this.setupState}
                routeProps={routeProps}
                language={this.state.language}
                restaurant={this.state.restaurant}
              />
            )
          }}
        />
        <Route
          exact
          path={`/${languagesURLPath}/${restaurantsURLPath}/meny`}
          render={routeProps => {
            return (
              <Menu
                update={this.setupState}
                routeProps={routeProps}
                language={this.state.language}
                restaurant={this.state.restaurant}
              />
            )
          }}
        />
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent />
        </Footer>
      </Layout>
    )
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={`/${this.state.language}`} />
          </Route>
          <Route
            exact
            path={`/${languagesURLPath}`}
            component={LandingPageContainer}
          />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    )
  }
}

export default App
