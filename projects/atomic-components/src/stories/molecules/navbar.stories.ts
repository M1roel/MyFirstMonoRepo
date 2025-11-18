import { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from '../../lib/molecules/navbar/navbar.component';

const meta: Meta<NavbarComponent> = {
  title: 'Molecules/Navbar',
  component: NavbarComponent,
  tags: ['autodocs'],
  argTypes: {
    iconSrc: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    class: { control: 'text' },
    variant: { 
      control: 'select',
      options: ['primary', 'business']
    },
    navLinks: { control: 'object' },
  }
};

export default meta;

type Story = StoryObj<NavbarComponent>;

export const DefaultNavbar: Story = {
  args: {
    iconSrc: 'assets/logo.png',
    alt: 'Company Logo',
    title: 'Home',
    class: 'navbar-logo',
    variant: 'primary',
    navLinks: [
      { label: 'Home', routerLink: '/' },
      { label: 'About', routerLink: '/about' },
      { label: 'Services', routerLink: '/services' },
      { label: 'Contact', routerLink: '/contact' },
    ],
  },
};

export const BusinessNavbar: Story = {
  args: {
    iconSrc: 'assets/logo.png',
    alt: 'Company Logo',
    title: 'Home',
    class: 'navbar-logo',
    variant: 'business',
    navLinks: [
      { label: 'Home', routerLink: '/' },
      { label: 'About', routerLink: '/about' },
      { label: 'Services', routerLink: '/services' },
      { label: 'Contact', routerLink: '/contact' },
    ],
  },
};

export const MixedVariants: Story = {
  args: {
    iconSrc: 'assets/logo.png',
    alt: 'Company Logo',
    title: 'Home',
    class: 'navbar-logo',
    variant: 'primary', // Default variant für Navbar
    navLinks: [
      { label: 'Home', routerLink: '/' }, // Uses navbar variant (primary)
      { label: 'About', routerLink: '/about', variant: 'business' }, // Override with business
      { label: 'Services', routerLink: '/services' }, // Uses navbar variant (primary)
      { label: 'Contact', routerLink: '/contact', variant: 'business' }, // Override with business
    ],
  },
};