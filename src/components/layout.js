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
import Footer from "./Organisms/Footer/Footer"

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#eeeeee",
      dark: "#bcbcbc",
      contrastText: "#000000",
    },
    secondary: {
      light: "#63a4ff",
      main: "#1976d2",
      dark: "#004ba0",
      contrastText: "#ffffff",
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
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
