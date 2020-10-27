import { Button } from "@material-ui/core"
import React from "react"
import Badge from "react-bootstrap/esm/Badge"
import Jumbotron from "react-bootstrap/Jumbotron"
import { theme } from "../../layout"

export interface JumbotronComponentProps {
  heading: string
  text: string
  label?: string | null
}

export const JumbotronComponent = ({ heading, text, label }) => {
  return (
    <Jumbotron
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      }}
    >
      <h2>{heading}</h2>
      <p>{text}</p>
      <p>
        <Button variant="contained" color="primary">
          {label}
        </Button>
      </p>
    </Jumbotron>
  )
}

export default JumbotronComponent
