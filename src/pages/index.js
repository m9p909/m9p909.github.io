import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { Image, Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"



const IndexPage = () => {
    const data = useStaticQuery(graphql`query GetOwner {
        contentfulOwner {
          lastName
          firstName
          profilePicture {
            fixed(height: 400, width: 400) {
              srcWebp
              base64
            }
          }
          experience {
            name
            points {
              childrenContentfulPointDescriptionTextNode {
                description
              }
            }
          }
          projects {
            name
            points {
              childrenContentfulPointDescriptionTextNode {
                description
              }
            }
          }
        }
      }`);

    const owner = data.contentfulOwner;
    const profilePicture = owner.profilePicture.fixed.srcWebp;
    const firstName = owner.firstName;
    const lastName = owner.lastName;

    return (
        <Layout>
            <main>
                <Container>
                    <Row>
                        <Col sm className='text-center'>
                            <Image src={profilePicture} roundedCircle fluid></Image>
                        </Col>
                        <Col sm>
                            <div className="p-5 h-100 d-flex justify-content-center align-items-center">
                                <Container>
                                    <Row>
                                        <Col><h1>{firstName}</h1></Col>
                                    </Row>
                                    <Row>
                                        <Col xs={{ offset: 1 }}><h1>{lastName}</h1></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </main>
        </Layout>
    )
}

export default IndexPage;
