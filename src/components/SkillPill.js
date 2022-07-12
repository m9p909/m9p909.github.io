import assert from "../utils/assert";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import React from "react";


export default function SkillPill(props) {

    assert(props.skill, 'no skill found');
    assert(props.dispatch, 'no dispatch found');
    assert(props.index >= 0, 'no key found: ' + props.index);

    const { skill, dispatch, index } = props;
    const variants = ["primary", "success", "warning", "danger"]
    const getVariant = () => {
        return variants[index % 4];
    }
    return (<div style={{ width: "fit-content", margin: "10px"}} key={props.skill.id}>
        <ButtonGroup>
            <ToggleButton
                checked={skill.active}
                type={"checkbox"}
                variant={skill.active ? 'outline-'+getVariant() : 'outline-secondary'}
                onClick={() => dispatch({ type: 'setActiveSkill', key: skill.id })}>
                {skill.skill} {skill.proficiency}/5
            </ToggleButton>
        </ButtonGroup>
    </div>)

}