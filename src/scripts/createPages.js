
import getAllBlogPosts from "./functions/getAllBlogPosts";

const createPages = async () => {
    const result =  getAllBlogPosts();
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = node.frontmatter.path
        createPage({
          path,
          component: blogPostTemplate,
          // In your blog post template's graphql query, you can use pagePath
          // as a GraphQL variable to query for data from the markdown file.
          context: {
            pagePath: path,
          },
        })
      })

}