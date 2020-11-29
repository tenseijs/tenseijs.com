import { SidebarLayout } from '@/layouts/SidebarLayout'
import Head from 'next/head'
import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/components/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'components'
)

const nav = {
  Examples: [
    pages['alerts'],
    pages['buttons'],
    pages['cards'],
    pages['forms'],
    pages['flexbox-grids'],
    pages['navigation'],
  ],
}

export function ComponentsLayout(props) {
  return (
    <>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://res.cloudinary.com/bahdcoder/image/upload/v1606683959/twitter-card.png`}
        />
      </Head>
      <SidebarLayout nav={nav} {...props} />
    </>
  )
}
