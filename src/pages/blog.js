import Layout from "../components/layout";
import React from 'react'
import {useStaticQuery, graphql } from "gatsby";


const Blog = () => {
   const data = useStaticQuery(graphql`query MyQuery {
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
    `);
   return (<Layout>
      <h1> Blag</h1>
      {data.allContentfulBlogPost.nodes.map((post) => (
         <div>  
            <h1>{post.title}</h1>
            <h1>{post.body.internal.content}</h1>
         </div>
      ))}
   </Layout>)
}
export default Blog;