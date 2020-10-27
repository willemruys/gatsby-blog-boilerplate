import React from "react"
import { Button, Chip, Paper, Typography } from "@material-ui/core"
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  CardActions,
} from "@material-ui/core"
import ChipComponent from "../../Molecules/Chip/Chip"

const useStyle = makeStyles(theme => ({
  image: {
    height: 0,
    paddingTop: "56%",
  },
  actionArea: {
    padding: "10px",
  },
  chip: {
    backgroundColor: theme.palette.primary.main,
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
                <Typography variant="h6">{project.projectName}</Typography>
                <ChipComponent label={project.category} sizeChip="small" />
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  {project.projectSnippet}
                </Typography>
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
