import React from 'react'
import { gaInitialize, gaPageView } from './components/Tracking/Tracking'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import history from './history'
import './App.css'
import LandingPage from './containers/LandingPage/LandingPage'
import Languages from './data/Languages'
import Restaurants from './data/Restaurants'
import DefaultPage from './containers/DefaultPage/DefaultPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    const pathParameters = window.location.pathname.split('/')
    const language = pathParameters[1].length === 0 ? 'sv' : pathParameters[1]
    this.state = {
      language: language,
      restaurant: pathParameters[2]
    }
    this.setLanguage = this.setLanguage.bind(this)
    this.setRestaurant = this.setRestaurant.bind(this)
  }
  componentDidMount() {
    gaInitialize('UA-153764980-1')
    gaPageView()
  }
  setLanguage(language) {
    const languagesRegex = new RegExp(`/(${Languages.join('|')})`)
    history.push(
      `/${window.location.pathname.replace(languagesRegex, language)}`
    )
    this.setState({
      language: language
    })
  }
  setRestaurant(restaurant) {
    history.push(`/${this.state.language}/${restaurant}`)
    this.setState({
      restaurant: restaurant
    })
  }
  render() {
    const languagesURLPath = `(${Languages.join('|')})`
    const restaurantsURLPath = `(${Restaurants.join('|')})`
    return (
      <Router history={history}>
        <Helmet htmlAttributes={{ lang: this.state.language }} />
        <Switch>
          <Route exact path="/">
            <Redirect to={`/${this.state.language}`} />
          </Route>
          <Route
            exact
            path={`/${languagesURLPath}`}
            render={() => (
              <LandingPage
                language={this.state.language}
                setLanguage={this.setLanguage}
                setRestaurant={this.setRestaurant}
              />
            )}
          />
          <Route
            path={`/${languagesURLPath}/${restaurantsURLPath}`}
            render={() => (
              <DefaultPage
                language={this.state.language}
                setLanguage={this.setLanguage}
                restaurant={this.state.restaurant}
                setRestaurant={this.setRestaurant}
              />
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
