import { Meta, StoryObj } from '@storybook/angular';
import { ForecastCardComponent } from '../../lib/molecules/forecast-card/forecast-card.component';

const meta: Meta<ForecastCardComponent> = {
  title: 'Molecules/Forecast Card',
  component: ForecastCardComponent,
  tags: ['autodocs'],
  argTypes: {
    city: {control: 'text'},
    temperature: {control: 'number'},
    condition: {control: 'text'},
    weatherIcon: {control: 'text'}
  }
};

export default meta;

type Story = StoryObj<ForecastCardComponent>;

export const DefaultForecastCard: Story = {
  args: {
    city: 'New York',
    temperature: 25,
    condition: 'Sunny',
    weatherIcon: '/images/icon-sunny.webp'
  },
};