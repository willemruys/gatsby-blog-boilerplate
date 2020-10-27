import React, { useState, useEffect } from "react"
import { Heading, Box, Text, Image, Button, Flex, Card } from "rebass"
import { Link, StaticQuery, graphql } from "gatsby"

import axios from "axios"
import MediaCard from "./Cards/MediaCard"
import { Grid } from "@material-ui/core"

export interface BlogPostRecommendationsProps {
  showImage: boolean
}

export interface BlogPost {
  body: string
  id: string
  title: string
}

export const BlogPostRecommendations = ({ showImage }) => {
  return (
    <>
      <Grid container xs={12} spacing={3}>
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
              <Grid item xs={12} sm={6} md={4}>
                {showImage && (
                  <MediaCard
                    image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
                    header={post.title}
                    content={post.body}
                    actionText="Read more"
                    link="/"
                  />
                )}
                <MediaCard
                  header={post.title}
                  content={post.body}
                  actionText="Read more"
                  link="/"
                />
              </Grid>
            ))
          }
        />
      </Grid>
    </>
  )
}
