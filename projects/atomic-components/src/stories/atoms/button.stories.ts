import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ButtonComponent } from '../../lib/atoms/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'wa-search-btn'],
    },
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>; 

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary'
  }
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    type: 'tertiary'
  }
};

export const WeatherAppBtn: Story = {
  args: {
    label: 'Search',
    type: 'wa-search-btn'
  }
};

export const CustomLabel: Story = {
  args: {
    label: 'Click me!',
    type: 'primary'
  }
};