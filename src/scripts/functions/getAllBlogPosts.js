import { graphql, useStaticQuery } from "gatsby";

const getAllBlogPosts = () => {
  return graphql`query MyQuery {
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
  }
  `
}

export default getAllBlogPosts;