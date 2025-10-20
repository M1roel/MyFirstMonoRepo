import { Meta, StoryObj } from '@storybook/angular';
import { InfoCardComponent } from '../../lib/molecules/info-card/info-card.component';

const meta: Meta<InfoCardComponent> = {
  title: 'Molecules/Info Card',
  component: InfoCardComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    unit: { 
      control: 'select',
      options: ['%', '°C', 'mm', 'km/h']
    },
  }
};

export default meta;

type Story = StoryObj<InfoCardComponent>;

export const DefaultInfoCard: Story = {
  args: {
    label: 'Feels Like',
    value: '22',
    unit: '°C',
  },
};

export const CustomInfoCard: Story = {
  args: {
    label: 'Wind Speed',
    value: '15',
    unit: 'km/h',
  },
};