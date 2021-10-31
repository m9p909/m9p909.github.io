import React from "react";
import { Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import assert from "../utils/assert";
/*
experience {
    name
    points {
      childrenContentfulPointDescriptionTextNode {
        description
      }
      skills {
        id
        skill
        proficiency
      }
    }
  }
  */


export default function ExperienceDisplay(props) {
    assert(props.experience)
    const experience = props.experience;
    const active = experience.points.find((point) => point.skills.find((skill) => skill.active));
    return (<>
        {
            active &&
            <Container>
                <Row>
                    <h3>{experience.name}</h3>
                </Row>
                <ul>
                    {experience.points.map((point, index) => {
                        if (point.skills.find((skill) => skill.active)) {
                            return <li key={index}><ReactMarkdown>{point.description.description}</ReactMarkdown></li>
                        }
                    }
                    )}
                </ul>
            </Container>
        }
    </>)

}