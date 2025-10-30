import { Meta, StoryObj } from '@storybook/angular';
import { DropdownComponent } from '../../lib/molecules/dropdown/dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Molecules/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'wa-dropdown'],
    },
    options: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const WaDropdown: Story = {
  args: {
    variant: 'wa-dropdown',
    options: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
  },
};