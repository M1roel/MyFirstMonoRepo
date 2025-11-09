import { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from '../../lib/atoms/list/list.component';

const meta: Meta<ListComponent> = {
  title: 'Atoms/List',
  component: ListComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of strings to be displayed as list items.'
    },
    type: {
      control: { type: 'select', options: ['unordered', 'ordered'] },
      description: 'Type of the list: unordered (ul) or ordered (ol).'
    },
    variant: {
      control: { type: 'select', options: ['default', 'bullet', 'numbered', 'checkmark', 'dash'] },
      description: 'Visual variant of the list.'
    }
  }
};

export default meta;
type Story = StoryObj<ListComponent>;

export const Default: Story = {
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
    type: 'unordered',
    variant: 'default'
  }
};
export const OrderedNumbered: Story = {
  args: {
    items: ['First', 'Second', 'Third'],
    type: 'ordered',
    variant: 'numbered'
  }
};

export const UnorderedCheckmark: Story = {
  args: {
    items: ['Task A', 'Task B', 'Task C'],
    type: 'unordered',
    variant: 'checkmark'
  }
};

export const UnorderedDash: Story = {
  args: {
    items: ['Point One', 'Point Two', 'Point Three'],
    type: 'unordered',
    variant: 'dash'
  }
};