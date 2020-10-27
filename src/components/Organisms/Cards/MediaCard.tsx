import React from "react"
import ChipComponent from "../../Molecules/Chip/Chip"

import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core"

export interface MediaCardProps {
  image?: string
  header: string
  content: string
  actionText: string
  link: string
}

const useStyle = makeStyles(() => ({
  titleContainer: {
    minHeight: "100px",
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
        <Typography variant="h6">{header}</Typography>
      </CardContent>
      <CardContent>
        {" "}
        <ChipComponent label="category" />
      </CardContent>
      {image && <CardMedia className={classes.media} image={image} />}
      <CardContent className={classes.contentContainer}>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" href={link}>
          {actionText}
        </Button>
      </CardActions>
    </Card>
  )
}

export default MediaCard
