import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FlexibleCardComponent } from '../../lib/molecules/flexible-card/flexible-card.component';
import { IconComponent } from '../../lib/atoms/icon/icon.component';
import { HeadlineComponent } from '../../lib/atoms/headline/headline.component';
import { TextComponent } from '../../lib/atoms/text/text.component';

const meta: Meta<FlexibleCardComponent> = {
  title: 'Molecules/Flexible Card',
  component: FlexibleCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [IconComponent, HeadlineComponent, TextComponent],
    }),
  ],
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
  render: (args) => ({
    props: args,
    template: `
      <atomic-flexible-card [variant]="variant">
        <atomic-headline 
          card-mid
          [headingText]="'Premium Business Solution'"
          [level]="3">
        </atomic-headline>
        
        <atomic-text 
          card-down
          [textContent]="'Professionelle Lösungen für Ihr Unternehmen mit erstklassigem Support und modernster Technologie.'">
        </atomic-text>
      </atomic-flexible-card>
    `,
  }),
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `
      <atomic-flexible-card [variant]="variant">
        <atomic-headline 
          card-mid
          [headingText]="'User Favorite'"
          [level]="3">
        </atomic-headline>
        
        <atomic-text 
          card-down
          [textContent]="'Eine benutzerfreundliche Lösung, die von unseren Kunden geliebt wird und täglich genutzt wird.'"
          [variant]="'primary'">
        </atomic-text>
      </atomic-flexible-card>
    `,
  }),
};