import BaseButton from './BaseButton'

import { ComponentStory, ComponentMeta } from '@storybook/react'

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

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args}>click me</BaseButton>
)

export const Default = Template.bind({})

export const WithRounded = Template.bind({})
WithRounded.args = {
  roundedType: Rounded.CUSTOM,
  rounded: 8,
}
