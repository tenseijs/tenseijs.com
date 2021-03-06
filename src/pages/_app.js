import '../css/main.css'
import 'focus-visible'
import * as Fathom from 'fathom-client'
import { useState, useEffect, Fragment } from 'react'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import Head from 'next/head'

const progress = new ProgressBar({
  size: 2,
  color: '#2346F8',
  className: 'bar-of-progress',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', () => {
  progress.finish()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', progress.finish)

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    Fathom.load('LBTPPWGB', {
      includedDomains: ['tenseijs.com'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    Router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  let [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    if (!navIsOpen) return
    function handleRouteChange() {
      setNavIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [navIsOpen])

  const Layout = Component.layoutProps?.Layout || Fragment
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, navIsOpen, setNavIsOpen }
    : {}
  const meta = Component.layoutProps?.meta || {}
  const description =
    meta.metaDescription || meta.description || 'Documentation for the Tensei JS framework.'

  return (
    <>
      <Title suffix="Tailwind CSS">{meta.metaTitle || meta.title}</Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@tailwindcss" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://res.cloudinary.com/bahdcoder/image/upload/v1606683959/twitter-card.png`}
        />
        <meta key="twitter:creator" name="twitter:creator" content="@tailwindcss" />
        <meta key="og:url" property="og:url" content={`https://tenseijs.com${router.pathname}`} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:description" property="og:description" content={description} />
        <meta
          key="og:image"
          property="og:image"
          content={`https://res.cloudinary.com/bahdcoder/image/upload/v1606683959/twitter-card.png`}
        />
      </Head>
      {router.pathname !== '/' && (
        <Header navIsOpen={navIsOpen} onNavToggle={(isOpen) => setNavIsOpen(isOpen)} />
      )}
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
