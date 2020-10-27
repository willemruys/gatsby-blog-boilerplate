const axios = require("axios")

const { createFilePath } = require("gatsby-source-filesystem")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const getBlogData = async () => {
  let data = []
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => (data = res.data))
    .catch(err => console.error(err))

  return data
}

const getProjectsData = async () => {
  const url = process.env.GATSBY_BLOG_API_URL + "/projects"
  const res = await axios.get(url)

  return res.data
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions

  const blogPosts = await getBlogData()
  const projectData = await getProjectsData()
  blogPosts.forEach(post => {
    createNode({
      ...post,
      id: createNodeId(`post-${post.id}`),
      parent: null,

      children: [],
      internal: {
        type: "blogPost",
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  })

  projectData.forEach(project => {
    createNode({
      ...project,
      id: createNodeId(`project-${project.id}`),
      parent: null,
      children: [],
      internal: {
        type: "project",
        content: JSON.stringify(project),
        contentDigest: createContentDigest(project),
      },
    })
  })

  return
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query allBlogPostData {
      allBlogPost {
        nodes {
          body
          id
          userId
          title
        }
      }
    }
  `)

  result.data.allBlogPost.nodes.forEach(async post => {
    createPage({
      path: `/blog/${post.id}`,
      component: require.resolve("./src/components/Templates/BlogPost.tsx"),
      context: { post },
    })
  })
}
