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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        {
          image:
            'https://scontent-arn2-1.cdninstagram.com/vp/c6d79b20f4a4a9a7a97b21cf3e3f3764/5E2EF00B/t51.2885-15/sh0.08/e35/s750x750/66038562_149004959497474_630047670185324958_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110',
          title: 'Pho',
          description:
            'Rykande het nudelsoppa med böngroddar, tunt skivad lök, vårlök, färsk koriander, chili och lime.',
          protein: ['Biff', 'Kyckling', 'Tofu'],
          price: '110 kr'
        },
        {
          image:
            'https://scontent-arn2-1.cdninstagram.com/vp/3e0f2e536427f6bbb55ec33e8a9d2199/5E60A67B/t51.2885-15/e35/s1080x1080/66648321_1172102333242382_7184225035297344662_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102',
          title: 'Cha Nem',
          description:
            'Hemmagjorda friterade vårrullar med fläskkarré, färsk koriander och mynta på en bädd av nudelsallad och fisksås.',
          protein: [],
          price: '110 kr'
        },
        {
          image:
            'https://scontent-arn2-1.cdninstagram.com/vp/c2c64dfe2f5459fff2ed83599499c692/5E474F66/t51.2885-15/sh0.08/e35/s750x750/66659124_350569382554928_3350378203193400033_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=108',
          title: 'Bun Bo Xao',
          description:
            'Vietnamesisk nudelsallad med rostad lök, krossadejordnötter, färsk koriander, mynta och fisksås.',
          protein: ['Biff', 'Kyckling', 'Tofu'],
          price: '110 kr'
        },
        {
          image:
            'https://scontent-arn2-1.cdninstagram.com/vp/545d4b4dbea0d2c24922f966bd82ae3a/5E5AB0E7/t51.2885-15/sh0.08/e35/s750x750/67700286_654938664988858_7538704245811219262_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110',
          title: 'Banh Xep',
          description:
            'Hemmagjorda vietnamesiska degknyten. Serveras med sallad, soja och sweet chilisås. 8 st.',
          protein: ['Fläsk & Kyckling', 'Kyckling', 'Räkor', 'Tofu'],
          price: '110 kr'
        }
      ]
    }
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <HeaderContent />
          </Header>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/(1|2)" component={Restaurant} />
          <Route
            exact
            path="/menu"
            render={() => <Menu menu={this.state.menu} />}
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
