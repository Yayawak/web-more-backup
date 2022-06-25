import ExecutiveCard from './ExecutiveCard'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Common/ExecutiveCard',
  component: ExecutiveCard,
} as ComponentMeta<typeof ExecutiveCard>

const Template: ComponentStory<typeof ExecutiveCard> = (args) => (
  <ExecutiveCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image: 'https://f.ptcdn.info/000/077/000/rafwas1s389b4UpJ6s6xB-o.jpg',
  name: 'ClariS',
  position: 'Singer',
}
