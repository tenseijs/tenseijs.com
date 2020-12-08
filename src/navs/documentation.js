import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Quick Start': [
    pages['getting-started'],
    pages['database-setup']
  ],
  'Core Concepts': [
    pages['resources'],
    pages['fields'],
  ]
}
