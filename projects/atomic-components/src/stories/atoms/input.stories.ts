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

export const Text: Story = {
  args: {
    placeholder: 'Enter text',
    type: 'text',
    variant: 'primary',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
    variant: 'secondary',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email',
    type: 'email',
    variant: 'tertiary',
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Enter number',
    type: 'number',
    variant: 'primary',
  },
};

export const Textarea: Story = {
  args: {
    placeholder: 'Enter your message',
    type: 'textarea',
    variant: 'tertiary',
  },
};

export const WeatherAppSearch: Story = {
  args: {
    placeholder: 'Search for a city...',
    type: 'search',
    variant: 'wa-search',
  },
};