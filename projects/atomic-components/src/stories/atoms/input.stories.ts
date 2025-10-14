import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../../lib/atoms/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Atoms/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    type: {
      control: 'radio',
      options: ['text', 'password', 'email', 'number', 'search', 'textarea'],
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'wa-search'],
    },
  }
};

export default meta;

type Story = StoryObj<InputComponent>;

export const DefaultInput: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    variant: 'primary',
  },
};

export const WeatherAppSearch: Story = {
  args: {
    placeholder: 'Search for a place...',
    type: "textarea",
    variant: "wa-search",
  },
};