import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import HeaderContent from './components/HeaderContent/HeaderContent'
import FooterContent from './components/FooterContent/FooterContent'
import LandingPage from './containers/LandingPage/LandingPage'
import Restaurant from './containers/Restaurant/Restaurant'
import Menu from './containers/Menu/Menu'
const { Header, Footer } = Layout

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/(1|2)" component={Restaurant} />
        <Route exact path="/menu" component={Menu} />
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent />
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
