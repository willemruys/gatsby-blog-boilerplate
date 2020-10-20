import React, { useState, useEffect } from "react"
import { Heading, Box, Text, Image, Button, Flex, Card } from "rebass"
import { Link, StaticQuery, graphql } from "gatsby"

import axios from "axios"
import MediaCard from "./Cards/MediaCard"

export interface BlogPost {
  body: string
  id: string
  title: string
}

export const BlogPostRecommendations = ({}) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <StaticQuery
          query={graphql`
            query threeBlogPosts {
              allBlogPost(limit: 3) {
                nodes {
                  body
                  id
                  title
                }
              }
            }
          `}
          render={data =>
            data.allBlogPost.nodes.map((post: BlogPost) => (
              <Box p={2}>
                <MediaCard
                  image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
                  header={post.title}
                  content={post.body}
                  actionText="Read more"
                  link="/"
                />
              </Box>
            ))
          }
        />
      </Box>
    </>
  )
}
