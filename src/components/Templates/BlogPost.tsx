import React from "react"
import { Section } from "react-landing-page"
import { Heading, Box, Text, Image, Button, Flex } from "rebass"
import styled from "styled-components"
import { BlogPostRecommendations } from "../Organisms/BlogPostRecommendations"
import { Grid } from "../Atoms/Grid/Grid"

const Layout = styled.div`
  padding: 20px;
`

const Header = styled.div`
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
`

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
`

const ImageCard = styled.div`
  background-color: grey;
  width: 100%;
  padding: 20px;
  height: 200px;
`

export default ({ pageContext: { post } }) => {
  return (
    <Layout>
      <Header>{post.title}</Header>
      <Box sx={{ minHeight: "40em" }}>
        {" "}
        <Card>
          <ImageCard />
          <Text mt={50}>{post.body}</Text>
        </Card>
      </Box>
      <Box
        sx={{
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        <Text pt={20}>Related posts</Text>
        <Grid templateColumnType="repeat(auto-fit, minmax(300px, 1fr))">
          <BlogPostRecommendations />
        </Grid>
      </Box>
    </Layout>
  )
}
