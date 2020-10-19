import React, { useState, useEffect } from "react"
import { Heading, Box, Text, Image, Button, Flex, Card } from "rebass"
import { Link } from "gatsby"

import axios from "axios"
import MediaCard from "./Cards/MediaCard"

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {" "}
        {blogPreview.map(post => {
          return (
            <Box p={2}>
              <MediaCard
                image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
                header={post.title}
                content={post.body}
                actionText="Read more"
                link="/"
              />
            </Box>
          )
        })}
      </Box>
    </>
  )
}
