import React from "react"
import { Box } from "rebass"
import { Button } from "../../atoms/button/Button"
import "./hero.css"

export const Hero = ({ title, label }) => {
  return (
    <div className="hero">
      <div className="title-container">
        <h1 className="hero-title">{title}</h1>
      </div>
      <div className="button-container">
        <Button padding={".5em .67em"} label={label} primary={true} />
      </div>
    </div>
  )
}
