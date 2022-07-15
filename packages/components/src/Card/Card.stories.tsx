import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './Card';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    username: { control: 'select' },
  },
} as Meta;

// With named export we define component's story
export const Default: Story<CardProps> = function (args) {
  return <Card {...args} />;
};
// Define default arguments for the Default story
Default.args = {
  username: 'Paco',
  image:
    'https://img.freepik.com/vector-gratis/pato-lindo-blanco_1308-41058.jpg',
  rate: '8.1',
  date: '16 Mar 2021',
  review: 'A lot of text A lot of text A lot of text A lot of text',
};

// Second story
export const WithText: Story<CardProps> = function (args) {
  return (
    <Card {...args}>
      <div>
        <span>Story that shows Card component with text</span>
      </div>
    </Card>
  );
};
// Define default arguments for the WithText component and inherit arguments from Default component
WithText.args = {
  ...Default.args,
};
