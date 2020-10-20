const axios = require("axios")
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
  console.log(res)
  return res.data
}

exports.createPages = async ({ actions: { createPage } }) => {
  const blogPosts = await getBlogData()

  // render overview of all blog posts
  createPage({
    path: `/blog`,
    component: require.resolve("./src/components/Templates/BlogPosts.tsx"),
    context: { blogPosts },
  })

  blogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.id}`,
      component: require.resolve("./src/components/Templates/BlogPost.tsx"),
      context: { post },
    })
  })
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
