import React from "react"
import { Button, Paper } from "@material-ui/core"
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  CardActions,
} from "@material-ui/core"

const useStyle = makeStyles(() => ({
  image: {
    height: 0,
    paddingTop: "56%",
  },
  actionArea: {
    padding: "10px",
  },
}))
export const ProjectsCard = ({ project }) => {
  const classes = useStyle()
  return (
    <Grid direction="column" key={project.id} item xs={12}>
      <Card raised={true}>
        <Grid container xs={12}>
          <Grid direction="column" container xs={12} md={8}>
            <Grid item xs>
              <CardContent>
                <h4>{project.projectName}</h4>
                <p>{project.projectSnippet}</p>
              </CardContent>
            </Grid>
            <Grid item justify="flex-end">
              <CardActions>
                <Button
                  style={{ margin: 4 }}
                  variant="contained"
                  color="secondary"
                >
                  Read more
                </Button>
              </CardActions>
            </Grid>
          </Grid>
          <Grid direction="column" item xs={12} md={4}>
            <CardMedia
              className={classes.image}
              image={project.image}
            ></CardMedia>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}
