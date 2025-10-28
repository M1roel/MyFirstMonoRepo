import { Meta, StoryObj} from '@storybook/angular';
import { DailyForecastComponent } from '../../lib/organisms/daily-forecast/daily-forecast.component';
import { DailyForecast } from '../../../../weather-app/src/app/core/models/daily-forecast.model';

const meta: Meta<DailyForecastComponent> = {
  title: 'Organisms/Daily Forecast',
  component: DailyForecastComponent,
  tags: ['autodocs'],
  argTypes: {
    dummyForecast: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<DailyForecastComponent>;

export const Default: Story = {
  args: {
    dummyForecast: [
      { day: 'Montag', temperature: 20, icon: '/images/icon-sunny.webp' },
      { day: 'Dienstag', temperature: 18, icon: '/images/icon-overcast.webp' },
      { day: 'Mittwoch', temperature: 22, icon: '/images/icon-rain.webp' },
      { day: 'Donnerstag', temperature: 19, icon: '/images/icon-partly-cloudy.webp' },
      { day: 'Freitag', temperature: 21, icon: '/images/icon-sunny.webp' },
    ],
  }
};