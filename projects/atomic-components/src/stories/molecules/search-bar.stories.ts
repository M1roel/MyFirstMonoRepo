import type { Meta, StoryObj } from '@storybook/angular';
import { SearchBarComponent } from '../../lib/molecules/search-bar/search-bar.component';

const meta: Meta<SearchBarComponent> = {
  title: 'Molecules/Search Bar',
  component: SearchBarComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    buttonText: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const WeatherAppSearchBar: Story = {
  args: {
    placeholder: 'Search for a city...',
    buttonText: 'Search'
  },
};  