import { describe } from 'jest-circus';
import TestRenderer from 'react-test-renderer';
import IndexPage, { setAllActive } from '.';
import SkillPill from '../components/SkillPill';
describe("Index Logic", () => {
    describe("IndexPage", () => {
        it('should display the skills in decreasing order', () => {
            const page = TestRenderer.create(IndexPage).getInstance();
            const pills = page.findAllByType(SkillPill)
            pills.map((value) => value.toJson());
            console.log(pills);
            
        })
    })
})