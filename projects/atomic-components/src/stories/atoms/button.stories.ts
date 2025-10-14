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
      options: ['primary', 'wa-search-btn'],
    },
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>; 

export const DefaultButton: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
};

export const WeatherAppButton: Story = {
  args: {
    label: 'Search',
    variant: 'wa-search-btn'
  }
};