const path = require("path");
const {snake_case_string} = require("./src/scripts/functions/snakeCase")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`query MyQuery {
    allContentfulBlogPost {
      nodes {
        id
        title
        body {
          internal {
            content
          }
        }
        createdAt
      }
    }
  }`)
  // Handle errors
  if (result.errors || !result) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const blogPostTemplate =require.resolve(`./src/templates/blog-post.js`);
  result.data.allContentfulBlogPost.nodes.forEach(( node , index) => {
    const path = `blog/${snake_case_string(node.title)}`
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        node
      },
    })
  })
}