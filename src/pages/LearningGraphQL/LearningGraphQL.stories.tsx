import React from 'react';
import { Meta, Story } from '@storybook/react';
import base from 'paths.macro';

// Components
import { LearningGraphQL } from './LearningGraphQL';
// Utils
import { generateStoryTitle } from '../../utils/storyTitle';

const title = 'LearningGraphQL';
const meta: Meta = {
  title: generateStoryTitle(base, title),
  component: LearningGraphQL,
};

export default meta;

const Template: Story = args => <LearningGraphQL {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Main = Template.bind({});

Main.args = {};
