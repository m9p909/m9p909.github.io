import assert from "../utils/assert";
import { ButtonGroup, Container, ToggleButton } from "react-bootstrap";
import React, { useState } from "react";


export default function SkillPill(props) {

    assert(props.skill, 'no skill found');
    assert(props.dispatch, 'no dispatch found');
    assert(props.index >= 0, 'no key found: ' + props.index);

    const { skill, dispatch, index } = props;
    const variants = ["primary", "success", "warning", "danger"]
    const getVariant = () => {
        return variants[index % 4];
    }
    return (<span style={{ padding: '2px' }}>
        <ButtonGroup>
            <ToggleButton
                checked={skill.active}
                type={"checkbox"}
                variant={skill.active ? 'outline-'+getVariant() : 'outline-secondary'}
                onClick={() => dispatch({ type: 'setActiveSkill', key: skill.id })}>
                {skill.skill} {skill.proficiency}/5
            </ToggleButton>
        </ButtonGroup>
    </span>)

}