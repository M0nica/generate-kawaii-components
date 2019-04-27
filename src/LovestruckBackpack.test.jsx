import React from 'react';
import { shallow } from 'enzyme';
import LovestruckBackpack from './LovestruckBackpack';


const render = () =>
shallow(
<LovestruckBackpack />);


describe('
<LovestruckBackpack />', () => {
it('exists', () => {
expect(render().exists()).toBe(true);
})})