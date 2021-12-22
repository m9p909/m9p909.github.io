import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import NameAndPicture from "../components/NameAndPicture"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Card, Col, Row } from "react-bootstrap"
import { Linkedin } from "react-bootstrap-icons"
import GoodreadsReadDisplay from "../components/GoodreadsReadDisplay"
import '../components/goodreads.css'


const IndexPage = () => {

 return (<Layout><NameAndPicture></NameAndPicture>
 <GoodreadsReadDisplay></GoodreadsReadDisplay>
  
 </Layout>)
}

export default IndexPage;
