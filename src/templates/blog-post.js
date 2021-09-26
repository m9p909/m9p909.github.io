import React from 'react'
import Layout from '../components/layout'
const BlogPost = (something) => {
    const node = something.pageContext.node
    const post = node.body.internal.content
    const title = node.title
    return <Layout>
        <h1>{title}</h1>
        <p>{post}</p>
    </Layout>
}

export default BlogPost