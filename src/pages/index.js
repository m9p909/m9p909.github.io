import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { Image, Container, Row, Col } from 'react-bootstrap'



const IndexPage = () => {


    const profilePicture = "https://www.101greatgoals.com/wp-content/uploads/2019/06/GettyImages-1143042384.jpg"
    const firstName = "Jack"
    const lastName = "Clarke"

    return (
        <Layout>
            <main>
                <Container>
                    <Row>
                        <Col sm>
                            <Image src={profilePicture} roundedCircle fluid></Image>
                        </Col>
                        <Col sm>
                            <div class="p-5 h-100 d-flex justify-content-center align-items-center">
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
