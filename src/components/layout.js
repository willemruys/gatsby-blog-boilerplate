/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Organisms/Header/Header"
import "./layout.css"

import { ThemeProvider } from "@material-ui/styles"
import { useTheme } from "../hooks/Theme/useTheme"
import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#cfcfcf",
      main: "#9e9e9e",
      dark: "#707070",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffd95b",
      main: "#ffa726",
      dark: "#c77800",
      contrastText: "#000000",
    },
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <div style={{ backgroundColor: theme.palette.primary.light }}>
        {children}
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
