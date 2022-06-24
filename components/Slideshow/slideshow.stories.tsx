import Slideshow from './Slideshow'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Common/Slideshow',
  component: Slideshow,
  argTypes: {
    images: {
      description: 'Image list for slideshow',
    },
  },
} as ComponentMeta<typeof Slideshow>

const Template: ComponentStory<typeof Slideshow> = (args) => (
  <div style={{ height: '300px' }}>
    <Slideshow {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  images: [
    'https://picsum.photos/1920/1080',
    'https://picsum.photos/1920/1080?1',
    'https://picsum.photos/1920/1080?2',
    'https://picsum.photos/1920/1080?3',
    'https://picsum.photos/1920/1080?4',
    'https://picsum.photos/1920/1080?5',
  ],
}
