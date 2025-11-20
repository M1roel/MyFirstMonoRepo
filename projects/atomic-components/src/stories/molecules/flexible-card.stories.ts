import { Meta, StoryObj } from '@storybook/angular';
import { FlexibleCardComponent } from '../../lib/molecules/flexible-card/flexible-card.component';

const meta: Meta<FlexibleCardComponent> = {
  title: 'Molecules/Flexible Card',
  component: FlexibleCardComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'business'],
    },
  },
};

export default meta;
type Story = StoryObj<FlexibleCardComponent>;

export const BusinessVariant: Story = {
  args: {
    variant: 'business',
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
  },
};