import React from "react"
import { Flex, Heading, Image, Box, Text, Card, Button } from "rebass"
import { Section } from "react-landing-page"

export interface BlogPosts {}

export default ({ pageContext: { blogPosts } }): BlogPosts => {
  console.log(blogPosts)
  return (
    <Section>
      {blogPosts.map(post => {
        return (
          <Box pb={30}>
            <Flex p={30} backgroundColor={"#F5F5F5"} sx={{ maxWidth: 600 }}>
              <Card maxWidth={500}>
                {" "}
                <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
                <Text>{post.title}</Text>
                <Box pt={30}>
                  <Button sx={{ backgroundColor: "#FFCC33" }}>Read more</Button>
                </Box>
              </Card>
            </Flex>
          </Box>
        )
      })}
    </Section>
  )
}
