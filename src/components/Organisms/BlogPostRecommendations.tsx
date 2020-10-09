import React, { useState, useEffect } from "react"
import { Heading, Box, Text, Image, Button, Flex, Card } from "rebass"
import { Link } from "gatsby"

import axios from "axios"
export const BlogPostRecommendations = () => {
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
      {" "}
      {blogPreview.map(post => {
        return (
          <Flex p={4}>
            <Link to={`/blog/${post.id}`}>
              <Card>
                <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
                <Text>{post.title}</Text>
                <Box pt={30}>
                  <Button sx={{ backgroundColor: "#FFCC33" }}>Read more</Button>
                </Box>
              </Card>
            </Link>
          </Flex>
        )
      })}
    </>
  )
}
