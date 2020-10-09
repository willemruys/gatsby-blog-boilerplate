import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Heading, Flex, Card, Image, Text, Button } from "rebass"
import Layout from "../layout"
import { Header } from "../Organisms/Header/Header"
import { Section } from "react-landing-page"
import { Link } from "gatsby"
import { BlogPostRecommendations } from "../Organisms/BlogPostRecommendations"
import { Grid } from "../Atoms/Grid/Grid"
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
    <>
      <Header />
      <Section>
        <Heading>Lorem ipsum dolor sit amet</Heading>
        <Flex pt={35}>
          <Box p={3} width={1 / 2}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptas dicta temporibus ad consectetur minima quos, ratione facere
            dolor esse iusto mollitia dolorum error placeat architecto
            voluptatibus, ut, vero molestias!
          </Box>
          <Box p={3} width={1 / 2}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptas dicta temporibus ad consectetur minima quos, ratione facere
            dolor esse iusto mollitia dolorum error placeat architecto
            voluptatibus, ut, vero molestias!
          </Box>
        </Flex>
      </Section>
      <Box pl={5} pr={5}>
        <Grid templateColumnType="repeat(auto-fit, minmax(300px, 1fr))">
          <BlogPostRecommendations />
        </Grid>
      </Box>
    </>
  )
}
