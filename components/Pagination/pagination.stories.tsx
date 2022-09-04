import { ComponentStory, ComponentMeta } from '@storybook/react'
// import Pagination from './Pagination'
import PaginationV2 from './PaginationV2'

export default {
  title: 'Common/Pagination',
  component: PaginationV2,
} as ComponentMeta<typeof PaginationV2>

const Template: ComponentStory<typeof PaginationV2> = (args) => (
  <PaginationV2 {...args} />
)

export const Default = Object.assign(Template, {})
Default.args = {
  length: 5,
  currentPage: 1,
  maxPages: 10,
}
