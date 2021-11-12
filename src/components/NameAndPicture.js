import React from 'react'
import {Col, Container, Row, Image} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"

export default function NameAndPicture(props) {

    const data = useStaticQuery(graphql`query GetBasicOwner
    {
    contentfulOwner {
        lastName
        firstName
        profilePicture {
          fixed(height: 400, width: 400) {
            srcWebp
            base64
          }
        }
      }
    }`)

    const owner = data.contentfulOwner;
    return (<Row>          
    <Col sm className='text-center'>
        <Image src={owner.profilePicture.fixed.srcWebp} roundedCircle fluid></Image>
    </Col>
        <Col sm>
            <div className="p-5 h-100 d-flex justify-content-center align-items-center">
                <Container>
                    <Row>
                        <Col><h1>{owner.firstName}</h1></Col>
                    </Row>
                    <Row>
                        <Col xs={{ offset: 1 }}><h1>{owner.lastName}</h1></Col>
                    </Row>
                </Container>
            </div>
        </Col>
    </Row>)
}