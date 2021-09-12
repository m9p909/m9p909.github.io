import * as React from "react"
import {Button} from "react-bootstrap";
import Layout from "../components/layout"
import Link from "gatsby-link";

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <div className={"text-center"}>
                    <h1>Welcome to my website!</h1>
                    <h2></h2>
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage
