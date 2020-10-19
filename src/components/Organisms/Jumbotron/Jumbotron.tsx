import { Button } from "@material-ui/core"
import React from "react"
import Badge from "react-bootstrap/esm/Badge"
import Jumbotron from "react-bootstrap/Jumbotron"

export interface JumbotronComponentProps {
  heading: string
  text: string
  label?: string | null
}

export const JumbotronComponent = ({ heading, text, label }) => {
  return (
    <Jumbotron>
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
