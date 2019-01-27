import React from 'react';
import Drawer from './Drawer'
import { css } from "@emotion/core"
import "../styles/global.scss"
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <Drawer location={location} />
        {children}
        <footer css={css`
          width: 100%;
          max-width: 960px;
          margin: 16px auto;
        `}>
          © {new Date().getFullYear()} akihiro.nishiya@gmail.com
        </footer>
      </div>
    )
  }
}

export default Layout
