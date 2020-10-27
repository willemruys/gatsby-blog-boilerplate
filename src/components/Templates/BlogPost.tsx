import React from "react"
import { Section } from "react-landing-page"
import { Heading, Box, Text, Image, Button, Flex } from "rebass"
import Layout, { theme } from "../layout"
import styled from "styled-components"
import { BlogPostRecommendations } from "../Organisms/BlogPostRecommendations"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  textContainer: {
    padding: "4em",
  },
}))

export default ({ pageContext: { post } }) => {
  const classes = useStyle()
  return (
    <>
      <Layout>
        <Section>
          {" "}
          <Typography variant="h5">{post.title}</Typography>
          <Grid container>
            <Grid item className={classes.textContainer}>
              <Typography variant="body1">{post.body}</Typography>
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Typography style={{ paddingBottom: "30px" }} variant="h6">
            Relevant articles
          </Typography>
          <BlogPostRecommendations showImage={false} />
        </Section>
      </Layout>
    </>
  )
}
