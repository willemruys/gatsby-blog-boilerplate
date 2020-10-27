import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Heading, Flex, Card, Image, Text } from "rebass"

import { Header } from "../../stories/organisms/header/Header"
import { Section } from "react-landing-page"
import { Link } from "gatsby"
import { BlogPostRecommendations } from "../Organisms/BlogPostRecommendations"

import { Hero } from "../../stories/organisms/Hero/hero"
import Layout, { theme } from "../layout"
import { Button } from "../../stories/atoms/button"
import { textAlign } from "styled-system"
import JumbotronComponent from "../Organisms/Jumbotron/Jumbotron"
import { Container } from "react-bootstrap"
import LatestProjects from "../Organisms/LatestProjects"

export const HomePage = () => {
  return (
    <Layout>
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
          <h2 style={{ color: theme.palette.primary.contrastText }}>
            My latest posts
          </h2>
        </Box>
        <BlogPostRecommendations showImage={true} />
      </Section>
      <Section style={{ backgroundColor: theme.palette.primary.light }}>
        <Box style={{ textAlign: "center" }}>
          <h2 style={{ color: theme.palette.primary.contrastText }}>
            My recent projects
          </h2>
        </Box>
        <LatestProjects />
      </Section>
    </Layout>
  )
}
