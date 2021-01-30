import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPosts = ({ data }) => {
    const blogPosts = data.allContentfulBlogPost.edges

    return (
        <Layout>
            <SEO title="blogpost" />
            <h1>Blogs</h1>
            <div>
                { blogPosts.map(({ node: post }) => (
                    <div key={post.id}>
                        <Link to={`/blogpost/${post.slug}`}> {post.title} </Link>
                    </div>
                ))}
            </div>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default BlogPosts

export const query = graphql`
    query BlogPostsPageQuery {
        allContentfulBlogPost {
            edges {
                node {
                    id
                    slug
                    title
                }
            }
        }
    }
`