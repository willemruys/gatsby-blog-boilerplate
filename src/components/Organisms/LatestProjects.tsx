import React from "react"
import { Grid } from "@material-ui/core"
import { StaticQuery, graphql } from "gatsby"
import { ProjectsCard } from "./Cards/ProjectsCard"

const LatestProjects = () => {
  return (
    <Grid container xs={12} spacing={3}>
      <StaticQuery
        query={graphql`
          query MyQuery {
            allProject(sort: { fields: addedDate, order: DESC }) {
              nodes {
                image
                id
                projectName
                projectSnippet
                category
              }
            }
          }
        `}
        render={data =>
          data.allProject.nodes.map(project => (
            <ProjectsCard project={project} />
          ))
        }
      />
    </Grid>
  )
}

export default LatestProjects
