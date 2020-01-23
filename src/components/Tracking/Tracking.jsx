import ReactGA from 'react-ga'

export const gaInitialize = id => {
  ReactGA.initialize(id)
}

export const gaPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export const gaEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  })
}
