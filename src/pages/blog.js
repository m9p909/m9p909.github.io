import Layout from "../components/layout";
import React from 'react'
import {useStaticQuery, graphql, Link } from "gatsby";
import { snake_case_string } from "../scripts/functions/snakeCase";


const Blog = () => {
   const data = useStaticQuery(graphql`query MyQuery {
      allContentfulBlogPost {
        nodes {
          id
          title
          createdAt
        }
      }
    }
    `);

    const formatDate = (createdAt) => {
      const date = new Date(createdAt);
      return date.toDateString();
    }
   return (<Layout>
      <h1>Blag</h1>
      <ul>
      {data.allContentfulBlogPost.nodes.map((post) => (
         <li>
            <p class="text-muted">{formatDate(post.createdAt)}</p>  
            <h3><Link to={"/blog/"+snake_case_string(post.title)}>{post.title}</Link></h3> 
         </li>
      ))}
      </ul>
   </Layout>)
}
export default Blog;