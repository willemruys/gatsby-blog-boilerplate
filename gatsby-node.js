const axios = require("axios")

const getBlogData = async () => {
  let data = []
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => (data = res.data))
    .catch(err => console.error(err))

  return data
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

  createNode({
    blogPosts,
    id: createNodeId("allBlogPosts"),
    parent: null,
    children: [],
    internal: {
      type: "allBlogPosts",
      content: JSON.stringify(blogPosts),
      contentDigest: createContentDigest(blogPosts),
    },
  })

  return
}
