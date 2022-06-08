import * as React from "react";
import Layout from "./layout";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import SkillPill from "./SkillPill";
import assert from "../utils/assert";
import ExperienceDisplay from "./ExperienceDisplay";
import NameAndPicture from "./NameAndPicture";


const debug = false;

const setAll = (state, input) => {
  let newState = new Map(state);
  Array.from(newState.keys()).forEach((key) => {
    const value = newState.get(key);
    value.active = input;
    newState.set(key, input);
  });
  return newState;
}

export const setAllActive = (state) => {
  return setAll(state, true)
};

export const setAllInactive = (state) => {
  return setAll(state, false)  
}

export function skillsReducer(state, action) {
  if (debug) {
    console.log("state: ");
    console.log(state);
    console.log("action");
    console.log(action);
  }
  switch (action.type) {
    case "setActiveSkill":
      const setActiveSkill = (state, action) => {
        assert(action.key, "this action needs a key");
        let newState = new Map(state);
        const skill = newState.get(action.key);
        skill.active = !skill.active;
        newState.set(action.key, skill);
        return newState;
      };
      return setActiveSkill(state, action);

    case "setAllActive":
      // currently has no use but will when I have the set all active button
      return setAllActive(state);
    
    case "setAllInactive":
      return setAllInactive(state);

    default:
      throw new Error();
  }
}

export const sortSkills = (skills) =>
  Array.from(skills.values()).sort((a, b) => b.proficiency - a.proficiency);

const Resume = () => {
  const data = useStaticQuery(graphql`
    query GetOwner {
      contentfulOwner {
        experience {
          name
          points {
            skills {
              id
              skill
              proficiency
            }
            description {
              description
            }
          }
        }
        projects {
          name
          points {
            skills {
              id
              skill
              proficiency
            }
            description {
              description
            }
          }
        }
      }
    }
  `);

  const owner = data.contentfulOwner;

  const getSkills = (experience, map) =>
    experience.forEach((exp) =>
      exp.points.forEach((point) =>
        point.skills.forEach((skill) => {
          map.set(skill.id, skill);
        })
      )
    );

  const skillsFromContentful = React.useMemo(() => {
    const map = new Map();
    getSkills(owner.experience, map);
    getSkills(owner.projects, map);
    return setAllActive(map);
  }, [owner.experience, owner.projects]);

  const [skills, dispatch] = React.useReducer(
    skillsReducer,
    skillsFromContentful
  );

  const skillsAsArray = React.useMemo(() => sortSkills(skills), [skills]);

  return (
    <>
  
        <NameAndPicture></NameAndPicture>
    
      <hr></hr>
      <Row>
        <Container>
          <h2>Skills</h2>
        </Container>
      </Row>
      <Row>
        <Container fluid className="flex-wrap">
          <Row>
            <Button onClick={() => dispatch("setAllInactive")}>
              Deselect all
            </Button>
            <Button onClick={() => dispatch("setAllActive")}>
              Select All
            </Button>
          </Row>
          <Row>
          {skillsAsArray.map((skill, index) => (
            <SkillPill
              skill={skill}
              key={index}
              index={index}
              dispatch={dispatch}
            ></SkillPill>
          ))}
          </Row>
        </Container>
      </Row>
      <hr></hr>
      <Row>
        <Container>
          <h2>Experience</h2>
        </Container>
      </Row>
      {owner.experience.map((experience, index) => (
        <Row>
          <ExperienceDisplay
            experience={experience}
            key={index}
          ></ExperienceDisplay>
        </Row>
      ))}
      <hr></hr>
      <Row>
        <Container>
          <h2>Projects</h2>
        </Container>
      </Row>
      {owner.projects.map((experience, index) => (
        <Row>
          <ExperienceDisplay
            experience={experience}
            key={index}
          ></ExperienceDisplay>
        </Row>
      ))}
    </>
  );
};

export default Resume;
