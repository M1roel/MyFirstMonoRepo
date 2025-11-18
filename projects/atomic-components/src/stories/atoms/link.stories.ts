import type { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from '../../lib/atoms/link/link.component';
import { provideRouter } from '@angular/router';
import { applicationConfig } from '@storybook/angular';

const meta: Meta<LinkComponent> = {
  title: 'Atoms/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
    },
    routerLink: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'business']
    },
  }
};

export default meta;
type Story = StoryObj<LinkComponent>;

export const PrimaryLink: Story = {
  args: {
    label: 'Primary Link',
    routerLink: '/about',
    variant: 'primary'
  }
};

export const BusinessLink: Story = {
  args: {
    label: 'Business Link',
    routerLink: '/contact',
    variant: 'business'
  }
};

export const HomeLink: Story = {
  args: {
    label: 'Startseite',
    routerLink: '/',
    variant: 'primary'
  }
};