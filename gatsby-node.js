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

  console.log(blogPosts)

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
