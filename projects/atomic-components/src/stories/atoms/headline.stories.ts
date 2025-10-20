import type { Meta, StoryObj } from '@storybook/angular';
import { HeadlineComponent } from '../../lib/atoms/headline/headline.component';

const meta: Meta<HeadlineComponent> = {
  title: 'Atoms/Headline',
  component: HeadlineComponent,
  tags: ['autodocs'],
  argTypes: {
    headingText: { control: 'text' },
    level: {
      control: 'radio',
      options: [1, 2, 3, 4, 5, 6],
    },
    className: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<HeadlineComponent>;

export const DefaultHeadline: Story = {
  args: {
    headingText: 'This is a Headline',
    level: 1,
    className: '',
  },
};

export const SubHeadline: Story = {
  args: {
    headingText: 'This is a Subheadline',
    level: 3,
    className: '',
  },
};

export const CustomClassHeadline: Story = {
  args: {
    headingText: 'Headline with Custom Class',
    level: 2,
    className: 'custom-headline-class',
  },
};