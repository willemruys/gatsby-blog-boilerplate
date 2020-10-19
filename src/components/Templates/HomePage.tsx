import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Heading, Flex, Card, Image, Text } from "rebass"

import { Header } from "../../stories/organisms/header/Header"
import { Section } from "react-landing-page"
import { Link } from "gatsby"
import { BlogPostRecommendations } from "../Organisms/BlogPostRecommendations"
import { Grid } from "../Atoms/Grid/Grid"
import { Hero } from "../../stories/organisms/Hero/hero"
import Layout from "../layout"
import { Button } from "../../stories/atoms/button"
import { textAlign } from "styled-system"
import JumbotronComponent from "../Organisms/Jumbotron/Jumbotron"
import { Container } from "react-bootstrap"

export const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [blogPreview, setBlogPreview] = useState([])

  useEffect(() => {
    // immediate invoked function expression
    ;(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      const length = res.data.length
      setBlogPreview(res.data.slice(length - 3, length))
    })()
  }, [])

  return (
    <Layout>
      <Header />
      <Hero
        title={"!404 dummies"}
        labelPrimary="View articles"
        labelSecondary="About me"
      />
      <Container style={{ marginTop: 50 }} fluid="md">
        <JumbotronComponent
          label="my projects"
          heading="About me"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur voluptate accusamus, inventore porro dolorem error aut ab tempora possimus! Laborum obcaecati nobis asperiores alias, nesciunt sapiente ratione a veniam?"
        />
      </Container>
      <Section>
        <Box>
          <h2>My latest posts</h2>
        </Box>
        <BlogPostRecommendations />
      </Section>
      <Section>
        <Box>
          <h2>My most recent projects</h2>
        </Box>
      </Section>
    </Layout>
  )
}
