import { useMediaQuery } from 'react-responsive'

export const Sm = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 })
  return isMobile ? children : null
}
export const Md = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 577, maxWidth: 768 })
  return isNotMobile ? children : null
}
export const Lg = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 992 })
  return isTablet ? children : null
}
export const Xl = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 993 })
  return isDesktop ? children : null
}
