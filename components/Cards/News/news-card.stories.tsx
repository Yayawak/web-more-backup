import NewsCard from './NewsCard'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Common/NewsCard',
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>

const Template: ComponentStory<typeof NewsCard> = (args) => (
  <NewsCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imageUrl: '',
  title: '',
  description: '',
  date: new Date(),
}
