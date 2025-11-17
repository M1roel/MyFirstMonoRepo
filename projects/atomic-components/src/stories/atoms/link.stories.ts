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
  }
};

export default meta;
type Story = StoryObj<LinkComponent>;

export const AboutLink: Story = {
  args: {
    label: 'Über uns',
    routerLink: '/about'
  }
};

export const ContactLink: Story = {
  args: {
    label: 'Kontakt',
    routerLink: '/contact'
  }
};

export const HomeLink: Story = {
  args: {
    label: 'Startseite',
    routerLink: '/'
  }
};