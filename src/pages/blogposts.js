import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = () => (
  <Layout>
    <SEO title="blogpost" />
    <h1>Hi from the blog posts</h1>
    <p>Welcome to blog posts</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPosts
