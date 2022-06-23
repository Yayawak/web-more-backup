import NewsCard from './NewsCard'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Common/NewsCard',
  component: NewsCard,
  argTypes: {
    date: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof NewsCard>

const Template: ComponentStory<typeof NewsCard> = (args) => (
  <NewsCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imageUrl:
    'https://img.online-station.net/_content/2020/1021/178021/gallery/ClariS04_826_587.jpg',
  title: 'Claris',
  description:
    'ClariS is a Japanese pop music duo which formed in 2009 with singers Clara and Alice from Hokkaido, who were in junior high school at the time. The pair began singing covers and submitting them to Japanese video sharing website Niconico between 2009 and 2010.',
  date: new Date(),
}
