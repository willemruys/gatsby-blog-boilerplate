import {
  Button,
  CircularProgress,
  Input,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"

const useStyle = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
  },
  buttonContainer: {
    padding: 20,
  },
}))

export interface timeOutProps {
  ms: string
}

const timeOut = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}
const NewsletterSignup = () => {
  const classes = useStyle()
  const [emailAddress, setEmailAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const handleChange = e => {
    setEmailAddress(e.target.value)
  }

  console.log(emailAddress, loading)

  const handleClick = async () => {
    setLoading(true)
    await timeOut(2000)
    alert(emailAddress)
    setLoading(false)
  }
  return (
    <div>
      <div>
        <Typography variant="overline">Signup for our newsletter</Typography>
      </div>
      <TextField
        color="primary"
        label="Your emailaddress"
        onChange={e => handleChange(e)}
        variant="filled"
      ></TextField>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClick()}
          startIcon={loading && <CircularProgress size={20} />}
        >
          Signup
        </Button>
      </div>
    </div>
  )
}

export default NewsletterSignup
