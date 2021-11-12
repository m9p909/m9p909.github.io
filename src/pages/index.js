import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import NameAndPicture from "../components/NameAndPicture"


const IndexPage = () => {

  return (<Layout><NameAndPicture></NameAndPicture></Layout>)
}

export default IndexPage;
