import React from "react";
import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import assert from "../utils/assert";

const LinkColumn = (props) => {
    assert(props.image, "no image in link col")
    assert(props.link, "no link in LinkColumn")

    const LinkButton = () => {
      if(props.link.startsWith("mailto")){
        return <Button variant="link" href={props.link}>{props.link.substring(7,props.link.length)}</Button>
      } else {
        return <Button variant="link" href={props.link} target="_blank" rel="noreferrer">{props.link}</Button>
      }

    }

  return (
    <Col className="text-center">
      <h1>
        {props.image}
      </h1>
      <LinkButton></LinkButton>
    </Col>
  );
};

export default function NameAndPicture(props) {
  const data = useStaticQuery(graphql`
    query GetBasicOwner {
      contentfulOwner {
        lastName
        firstName
        profilePicture {
          fixed(height: 400, width: 400) {
            srcWebp
            base64
          }
        }
        codewars
        codewarsLink
        github
        linkedIn
      }
    }
  `);

  const owner = data.contentfulOwner;
  return (
    <>
      <Row>
        <Col sm className="text-center">
          <Image
            src={owner.profilePicture.fixed.srcWebp}
            roundedCircle
            fluid
          ></Image>
        </Col>
        <Col sm>
          <div className="p-5 h-100 d-flex justify-content-center align-items-center">
            <Container>
              <Row>
                <Col>
                  <h1>{owner.firstName}</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={{ offset: 1 }}>
                  <h1>{owner.lastName}</h1>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: "10px" }}>
        <Card> <Row style={{ padding: "10px" }}> <LinkColumn link={owner.linkedIn} image={<Linkedin></Linkedin>}></LinkColumn>
              <LinkColumn link={owner.github} image={<Github></Github>}></LinkColumn>
              <LinkColumn link={owner.codewarsLink} image={<img
                  class="img-fluid"
                  style={{ minWidth: "300px" }}
                  src={owner.codewarsLink + "/badges/large"}
                ></img>}></LinkColumn>
              <LinkColumn link={"mailto:jackfulcher09@gmail.com"} image={<EnvelopeFill></EnvelopeFill>}></LinkColumn>
          </Row>
        </Card>
      </Row>
    </>
  );
}
