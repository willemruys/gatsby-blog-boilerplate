import React from "react"
import PropTypes from "prop-types"
import "./mediaCard.css"
import { Button } from "../../atoms/button"
import { Box } from "rebass"

export const MediaCard = ({ image, title, text, date }) => {
  return (
    <Box className="article">
      <div className="image-box">
        <img src={image} width="1500" height="1368"></img>
        <div className="article-content">
          <Box minHeight={150}>
            <h3 className="article-title">{title}</h3>
          </Box>

          <p className="article-date">{date}</p>
          <Box minHeight={150}>
            <p className="article-text">{text}</p>
          </Box>

          <Box>
            <Button label={"Read more"} primary={true} />
          </Box>
        </div>
      </div>
    </Box>
  )
}

MediaCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
}
