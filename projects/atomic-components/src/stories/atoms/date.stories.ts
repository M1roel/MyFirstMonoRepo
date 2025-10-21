import type { Meta, StoryObj } from '@storybook/angular';
import { DateComponent } from '../../lib/atoms/date/date.component';

const meta: Meta<DateComponent> = {
  title: 'Atoms/Date',
  component: DateComponent,
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['full', 'medium', 'short', 'weekday-only']
    },
    locale: {
      control: 'select',
      options: ['de-DE', 'en-US', 'fr-FR', 'es-ES']
    },
    className: { control: 'text' },
    customDate: { control: 'date' }
  }
};

export default meta;
type Story = StoryObj<DateComponent>;

export const Full: Story = {
  args: {
    format: 'full',
    locale: 'de-DE'
  },
};

export const Medium: Story = {
  args: {
    format: 'medium',
    locale: 'de-DE'
  },
};

export const Short: Story = {
  args: {
    format: 'short',
    locale: 'de-DE'
  },
};

export const WeekdayOnly: Story = {
  args: {
    format: 'weekday-only',
    locale: 'de-DE'
  },
};

export const English: Story = {
  args: {
    format: 'full',
    locale: 'en-US'
  },
};

export const WeatherAppStyle: Story = {
  args: {
    format: 'medium',
    locale: 'de-DE',
    className: 'wa-date'
  },
};

export const CustomDate: Story = {
  args: {
    format: 'full',
    locale: 'de-DE',
    customDate: new Date('2025-12-25')
  },
};