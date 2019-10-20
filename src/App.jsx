import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from 'antd'
import './App.css'
const { Header, Footer, Content } = Layout

const Context = React.createContext({
  text: ''
})

function App() {
  return (
    <Context.Provider value={{}}>
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
      />{' '}
      <Layout>
        <Header> </Header> <Content> LOL </Content> <Footer> </Footer>{' '}
      </Layout>{' '}
    </Context.Provider>
  )
}

export default App
