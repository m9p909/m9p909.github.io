import * as React from "react"
import Layout from "../components/layout"
import { Image, Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import SkillPill from "../components/SkillPill"
import assert from "../utils/assert"
import ExperienceDisplay from "../components/ExperienceDisplay"

const debug = false;

export const setAllActive = (state) => {
  let newState = new Map(state);
  Array.from(newState.keys()).forEach((key) => {
    const value = newState.get(key);
    value.active = true;
    newState.set(key, value);
  });
  return newState;
}

export function skillsReducer(state, action) {
  if (debug) {
    console.log("state: ");
    console.log(state);
    console.log("action");
    console.log(action)
  }
  switch (action.type) {
    case 'setActiveSkill':
      const setActiveSkill = (state, action) => {
        assert(action.key, 'this action needs a key')
        let newState = new Map(state);
        const skill = newState.get(action.key);
        skill.active = !skill.active;
        newState.set(action.key, skill);
        return newState;
      }
      return setActiveSkill(state, action);
      
    case 'setAllActive':
      // currently has no use but will when I have the set all active button
      return setAllActive(state);

    default:
      throw new Error();
  }
}

export const sortSkills = (skills) => Array.from(skills.values()).sort((a, b) => b.proficiency - a.proficiency);


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
  }`);

  const owner = data.contentfulOwner;
  const profilePicture = owner.profilePicture.fixed.srcWebp;
  const firstName = owner.firstName;
  const lastName = owner.lastName;

  const getSkills = (experience, map) => experience.forEach(
    (exp) => exp.points.forEach(
      (point) => point.skills.forEach(
        (skill) => {
          map.set(skill.id, skill);
        })))

  const skillsFromContentful = React.useMemo(
    () => {
      const map = new Map();
      getSkills(owner.experience, map);
      getSkills(owner.projects, map);
      return setAllActive(map);
    },
    [owner]);


  const [skills, dispatch] = React.useReducer(skillsReducer, skillsFromContentful)


  const skillsAsArray = React.useMemo(() => sortSkills(skills), [skills])

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
          <Row>
            <Container>
              <h2>Skills</h2>
            </Container>
          </Row>
          <Row>
            <Container>
              {skillsAsArray.map((skill, index) => <SkillPill skill={skill} key={index} index={index} dispatch={dispatch}></SkillPill>)}
            </Container>
          </Row>
          <hr></hr>
          <Row>
            <Container>
              <h2>Experience</h2>
            </Container>
          </Row>
          {owner.experience.map((experience, index) => <Row><ExperienceDisplay experience={experience} key={index}></ExperienceDisplay></Row>)}
          <hr></hr>
          <Row>
            <Container>
              <h2>Projects</h2>
            </Container>
          </Row>
          {owner.projects.map((experience, index) => <Row><ExperienceDisplay experience={experience} key={index}></ExperienceDisplay></Row>)}
        </Container>
      </main>
    </Layout>
  )
}

export default IndexPage;
