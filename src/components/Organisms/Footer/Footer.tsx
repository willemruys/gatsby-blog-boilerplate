import {
  Container,
  makeStyles,
  Grid,
  List,
  ListItem,
  Typography,
  ListItemText,
  Divider,
  IconButton,
} from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import React from "react"
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup"

const useStyle = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    minHeight: 200,
    textAlign: "center",
    paddingTop: 50,
  },
  itemContainer: {
    textAlign: "center",
    paddingTop: 10,
  },
  contact: {
    textAlign: "left",
  },
}))
const Footer = () => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <Grid container xs={12}>
        <Grid item xs={12} md={6} className={classes.itemContainer}>
          <div>
            <Typography variant="overline">Willem Ruys</Typography>
          </div>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={6} className={classes.itemContainer}>
          <NewsletterSignup />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="overline">
            {" "}
            <p>&copy; {new Date(Date.now()).getFullYear()} Willem Ruys</p>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
