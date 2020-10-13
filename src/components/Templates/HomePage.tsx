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
      <Section>
        <h2>About me</h2>
        <Flex pt={35}>
          <Box s p={3} sx={{ textAlign: "center" }} width={"80%"}>
            {" "}
            <p>
              I am a full stack developer with experience in creating custom
              applications for a variety of use cases. I have a master's degree
              in Innovation, Strategy and Entrepreuneurship and currently
              obtaining my degree in computer sciences.
            </p>
            <br />
            <p>
              I have an interest in solving business challenges using
              technology.
            </p>
          </Box>
        </Flex>
        <Box p={3}>
          <Button
            label={"Read about my projects"}
            primary={true}
            size={"medium"}
          />
        </Box>
      </Section>
      <Section>
        <Box>
          <h2>My latest posts</h2>
        </Box>
        <BlogPostRecommendations />
      </Section>
    </Layout>
  )
}
