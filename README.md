# gatsby-blog-boilerplate

This is a boilerplate in progress.

Initial setup includes Gatsby and its createPages API to generate dynamic routing.

## How content is consumed

gatsby-node.js fetches data using axios (target url is at the moment dummy data from https://jsonplaceholder.typicode.com/posts). The createPages API then creates the blog posts overview page and each blog post page.
