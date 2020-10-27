import React, { FunctionComponent, ReactElement, useState } from "react"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import {
  AppBar,
  fade,
  IconButton,
  Input,
  InputBase,
  Menu,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
} from "@material-ui/core"
import { theme } from "../../layout"
import { makeStyles, TextField } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "gatsby"

export interface HeaderProps {
  backGroundImage: string
  color: string
}

const useStyle = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.light,
  },
  buttonContainer: {
    margin: 3,
    float: "right",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButtonContainer: {
    margin: 3,
    float: "left",
  },
}))

export interface HideOnScrollProps {
  children: FunctionComponent
  window: any
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
  const classes = useStyle()

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <div className={classes.header}>
          <div className={classes.menuButtonContainer}>
            <IconButton>
              <MenuIcon color="secondary" />
              <Typography color="secondary">Menu</Typography>
            </IconButton>
          </div>

          <div className={classes.buttonContainer}>
            <Button variant="outlined" color="secondary">
              Contact
            </Button>
          </div>
        </div>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
