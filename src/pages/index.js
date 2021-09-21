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
                    <p>I'm a <a href={"https://engineering.uottawa.ca/undergraduate-programs/software-engineering"}> Software Engineering</a>
                         student at the University of Ottawa.
                        I have completed the equivalent of 5 semesters in Software Engineering and 4 semesters in Civil Engineering.</p>
                    <h2></h2>
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage
