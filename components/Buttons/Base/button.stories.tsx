import BaseButton from './BaseButton'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Rounded } from '@/types/rounded'

export default {
  title: 'Common/Button/BaseButton',
  component: BaseButton,
  argTypes: {
    roundedType: {
      control: {
        type: 'select',
        options: Object.keys(Rounded),
      },
    },
    rounded: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof BaseButton>

export const Default: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args}>click me</BaseButton>
)
