/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
        
    return graphql(
        `
            {
                allContentfulBlogPost {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
        `
    ).then(result => {
        if(result.errors) {
            console.log("Error retrieving contentful data", result.errors)
        }

        const blogPostTemplate = path.resolve("./src/templates/BlogPost.js")

        result.data.allContentfulBlogPost.edges.forEach(edge => {
            createPage({
                path: `/blogpost/${edge.node.slug}/`,
                component: slash(blogPostTemplate),
                context: {
                    slug: edge.node.slug,
                    id: edge.node.id
                }
            })
        })
    })
    .catch(error => {
        console.log("Error retrieving contentful data", error)
    })
}