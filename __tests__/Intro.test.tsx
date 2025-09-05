import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/Intro';

import {expect, it} from '@jest/globals';

it('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});