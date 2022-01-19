import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LearningGraphQL } from './LearningGraphQL';

const meta: Meta = {
  title: 'LearningGraphQL',
  component: LearningGraphQL,
};

export default meta;

const Template: Story = args => <LearningGraphQL {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Main = Template.bind({});

Main.args = {};
