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
  category: ['บริการวิชาการ', 'อบรม', 'สัมนา'],
  title:
    'First Announcement for the 18th International Symposium of Biocontroland Biotechnology',
  date: new Date().toString(),
  style: {
    width: '304px',
    height: '348px',
  },
}
