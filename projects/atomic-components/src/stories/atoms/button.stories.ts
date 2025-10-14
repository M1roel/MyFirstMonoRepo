import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ButtonComponent } from '../../lib/atoms/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
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
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary'
  }
};

export const WeatherAppBtn: Story = {
  args: {
    label: 'Search',
    variant: 'wa-search-btn'
  }
};

export const CustomLabel: Story = {
  args: {
    label: 'Click me!',
    variant: 'primary'
  }
};