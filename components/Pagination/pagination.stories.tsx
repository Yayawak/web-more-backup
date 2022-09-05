import { ComponentStory, ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'

export default {
  title: 'Common/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Object.assign(Template, {})
Default.args = {
  length: 5,
  currentPage: 1,
  maxPages: 10,
}
