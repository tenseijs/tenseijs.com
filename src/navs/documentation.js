import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Quick Start': [pages['getting-started'], pages['database-setup']],
  'Core Concepts': [
    pages['resources'],
    pages['fields'],
    pages['relationships'],
    pages['validation'],
    pages['events'],
    pages['mails'],
  ],
  'GraphQL API': [
    pages['graphql-installation'],
    pages['graphql-types'],
    pages['graphql-customization'],
    pages['graphql-authorization'],
    pages['graphql-middleware'],
  ],
  'REST API': [
    pages['rest-installation'],
    pages['rest-routes'],
    pages['rest-customization'],
    pages['rest-authorization'],
    pages['rest-middleware'],
    pages['js-sdk']
  ],
  'Media Uploads': [pages['media-installation']],
  Auth: [
    pages['auth-installation'],
    pages['auth-email-verification'],
    pages['two-factor-authentication'],
    pages['social-authentication'],
    pages['roles-permissions'],
  ],
}
