import { ToDo, ToDoProps } from './to-do';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/ToDo',
  component: ToDo,
  argTypes: {
    variant: { control: 'select' }
  }
} as Meta;

// With named export we define component's story
export const Default: Story<ToDoProps> = (args: JSX.IntrinsicAttributes & ToDoProps) => <ToDo {...args} />;
// Define default arguments for the Default story
// Default.args = {
//   variant: 'elevation',
//   classes: 'w-64 h-64'
// };

// Second story
export const WithText: Story<ToDoProps> = (args: JSX.IntrinsicAttributes & ToDoProps) => (
  <ToDo {...args}>
    <div>
      <span>Story that shows ToDo component with text</span>
    </div>
  </ToDo>
);
// Define default arguments for the WithText component and inherit arguments from Default component
// WithText.args = {
//   ...Default.args,
//   classes: 'w-64 h-64 text-xl'
// };

export const BasicToDo = () => {
  return (
    <ToDo>hello world!</ToDo>
  );
}