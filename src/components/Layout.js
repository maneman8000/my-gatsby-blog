import React from 'react'
import { Link } from 'gatsby'
import { css } from "@emotion/core"
import { rhythm, scale } from '../utils/typography'
// import "@material/textfield/dist/mdc.textfield.css"
import "../styles/global.css"
import Button from "./Button"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <header>
        <div className={"button-container"}>
          <Button className={"cancel"}>
            Cancel
          </Button>
          <Button className={"mdc-button--raised next"}>
            Next
          </Button>
        </div>
        </header>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
