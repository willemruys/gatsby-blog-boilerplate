import React from "react"
import { Heading } from "rebass"
import { Hero, ScrollDownIndicator } from "react-landing-page"
import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core"
import { theme } from "../../layout"

export interface HeaderProps {
  backGroundImage: string
  color: string
}

const HideOnScroll = props => {
  const { children, window } = props

  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = () => {
  return (
    <HideOnScroll>
      <AppBar style={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography variant="h5">MyBlog</Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
