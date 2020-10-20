import React from "react"

import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core"

export interface MediaCardProps {
  image: string
  header: string
  content: string
  actionText: string
  link: string
}

const useStyle = makeStyles(() => ({
  titleContainer: {
    minHeight: "160px",
  },
  contentContainer: {
    minHeight: "200px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}))

const MediaCard = ({
  image,
  header,
  content,
  actionText,
  link,
}: MediaCardProps) => {
  const classes = useStyle()
  return (
    <Card raised={true}>
      <CardContent className={classes.titleContainer}>
        <h4>{header}</h4>
      </CardContent>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.contentContainer}>
        <p>{content}</p>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" href={link}>
          {actionText}
        </Button>
        <p></p>
      </CardActions>
    </Card>
  )
}

export default MediaCard
