import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, useTransform, animate, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Hero } from '@/components/home/Hero'
import { CodeWindow } from '@/components/CodeWindow'
import tokenize from '../macros/tokenize.macro'
import { ReactComponent as ConsumeLogo } from '@/img/icons/home/consume.svg'
import { ReactComponent as JavascriptLogo } from '@/img/icons/home/javascript-logo.svg'
import { ReactComponent as LockLogo } from '@/img/icons/home/lock.svg'
import { ReactComponent as MenuLogo } from '@/img/icons/home/menu.svg'
import { ReactComponent as PluginLogo } from '@/img/icons/home/plugin.svg'
import { ReactComponent as SecurityLogo } from '@/img/icons/home/security.svg'
import { ReactComponent as Step4BrowserScreen } from '@/img/icons/home/step4BrowserScreen.svg'
import { ReactComponent as Step2BrowserScreen } from '@/img/icons/home/step2BrowserScreen.svg'
import { ReactComponent as Step1BrowserScreen } from '@/img/icons/home/step1BrowserScreen.svg'
import Ellipse from '@/img/icons/home/Ellipse'
import YellowSvg from '@/img/icons/home/YellowBox'
import { Footer } from '@/components/home/Footer'

const features = [
  {
    svg: <LockLogo />,
    title: 'Open source',
    description:
      'The entire codebase is available on GitHub and is maintained by hundreds of contributors.',
  },
  {
    svg: <MenuLogo />,
    title: 'Customizable',
    description:
      'Each project requires specific requirements. Easily customize the admin panel as well as the API.',
  },
  {
    svg: <JavascriptLogo />,
    title: '100% Javascript',
    description:
      'One language to rule them all. Use JavaScript everywhere: both for your front-end and your Headless CMS.',
  },
  {
    svg: <SecurityLogo />,
    title: 'Self-hosted',
    description:
      'Security is crucial for companies. Host your data safely, on your own servers. GDPR compliant.',
  },
  {
    svg: <ConsumeLogo />,
    title: 'Restful or Graphql',
    description:
      'Consume the API from any client (React, Vue, Angular), mobile apps or even IoT, using REST or GraphQL.',
  },
  {
    svg: <PluginLogo />,
    title: 'Extensible by design',
    description:
      'Plugins system included. Install auth system, content management, custom plugins and more.',
  },
]

const { tokens } = tokenize.javascript(
  `
   const { auth } = require('@tensei/auth')
   const { tensei } = require('tensei/core')
   const { graphql } = require('tensei/graphql')

   tensei()
      .plugins([
          .auth()
              .plugin()
          .graphql()
              .plugin()
      ])
      .databaseConfig({
        type: 'sqlite',
        dbName: 'ecommerce_app.sqlite'
      })
      .start()
`,
  true
)

const tutorialData = [
  {
    image: 'tenseiTutorial1',
    title: 'Vue essentials',
    summary: 'Lorem ipsum kind of title for videos goes here',
  },
  {
    image: 'tenseiTutorial1',
    title: 'React essentials',
    summary: 'Lorem ipsum kind of title for videos goes here',
  },
  {
    image: 'tenseiTutorial1',
    title: 'Angular essentials',
    summary: 'Lorem ipsum kind of title for videos goes here',
  },
]

const TutorialCard = ({ img, title, summary }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      className="rounded-lg p-8 mb-10 border-4 border-tensei-dark shadow-lg"
    >
      <img
        src={require(`../img/${img}.png`).default}
        className="w-full rounded-md object-cover mb-6"
      />
      <span className="text-tensei-dark font-semibold text-xl mb-3">{title}</span>
      <p className="w-3/4">{summary}</p>
    </motion.div>
  )
}

const SectionHeading = ({ title, description }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <>
      <motion.h3
        className="text-center text-4xl text-tensei-dark font-semibold mb-4"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-center w-3/4 lg:w-full"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        {description}
      </motion.p>
    </>
  )
}

const Feature = ({ feature }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      className="flex lg:w-1/3 md:1/2 w-full items-start"
      key={feature.title}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <div className="h-24 w-24">{feature.svg}</div>

      <div className="flex flex-col px-8 mb-18">
        <span className="text-tensei-dark font-semibold mb-3">{feature.title}</span>
        <p className="lg:w-4/5 w-full leading-8">{feature.description}</p>
      </div>
    </motion.div>
  )
}

const SetupStep = ({ maskImg, mainImg, steps, descriptions, titles, stepColor }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div
      className={`w-full flex lg:items-center lg:my-14 my-8 ${
        steps.includes('STEP 2')
          ? 'lg:flex-row-reverse flex-col-reverse'
          : 'lg:flex-row flex-col-reverse'
      }`}
    >
      <div className="lg:w-1/2 w-full relative">
        <div
          className={`absolute h-full w-full ${
            steps.includes('STEP 2')
              ? 'bottom-0 lg:translate-x-20-vw -right-1/3 lg:right-auto lg:top-auto top-8'
              : 'lg:-translate-x-10-vw -left-1/3'
          }`}
          style={{
            zIndex: '-1',
          }}
        >
          {maskImg}
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 },
          }}
          className="w-full"
        >
          {mainImg}
        </motion.div>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col px-14 mb-10 lg:mb-0">
        {steps.map((step, index) => {
          return (
            <>
              <span className={`text-xl font-semibold mb-3 ${stepColor} ${index > 0 && 'mt-14'}`}>
                {step}
              </span>
              <span className="text-2xl font-semibold mb-10 text-black lg:w-1/2 w-full">
                {titles[index]}
              </span>
              <p className="lg:w-1/2 w-full">{descriptions[index]}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default function Home() {
  const [menuOpened, toggleMenuOpen] = useState(false)

  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-20 overflow-hidden">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Tensei - Open source Node.js Headless CMS 🚀"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Tensei - Open source Node.js Headless CMS 🚀"
        />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/bahdcoder/image/upload/v1606683959/twitter-card.png"
        />
        <meta
          name="image"
          property="twitter:image"
          content="https://res.cloudinary.com/bahdcoder/image/upload/v1606683959/twitter-card.png"
        />
        <title>Tensei - Open source Node.js Headless CMS 🚀</title>
        <meta
          property="og:description"
          content="Tensei is the fastest and easiest way to build powerful and secure APIs"
        />
      </Head>
      <div className="bg-tensei-lighter">
        <header className="relative z-10 max-w-screen-lg xl:max-w-screen-2xl mx-auto px-12">
          <div className="px-4 sm:px-6 md:px-0 mb-20 xl:mb-8">
            <nav className="py-6 flex items-center justify-between lg:mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0 relative">
              <div className="flex space-x-6 sm:space-x-10">
                <Link
                  href="/docs"
                  as="a"
                  className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200"
                >
                  <img
                    src="https://res.cloudinary.com/bahdcoder/image/upload/v1604236130/Asset_1_4x_fhcfyg.png"
                    className="h-8"
                    alt="Tensei logo"
                  />
                </Link>
              </div>
              <div className="lg:hidden flex absolute inset-y-0 right-0 items-center">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                  onClick={() => toggleMenuOpen((s) => !s)}
                >
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-2/4 lg:flex justify-between items-center hidden">
                <Link href="/">
                  <a className="text-base text-tensei-dark leading-6 font-medium hover:text-gray-600 transition-colors duration-200">
                    Features
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-base text-tensei-dark leading-6 font-medium hover:text-gray-600 transition-colors duration-200">
                    Guide
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-base text-tensei-dark leading-6 font-medium hover:text-gray-600 transition-colors duration-200">
                    Developers
                  </a>
                </Link>
                <Link href="/">
                  <a className="text-base text-tensei-dark leading-6 font-medium hover:text-gray-600 transition-colors duration-200">
                    Docs
                  </a>
                </Link>
                <Link href="/docs/getting-started">
                  <a
                    className="flex items-center justify-center rounded-md bg-tensei-purple text-white font-semibold h-10 transition duration-100 text-md"
                    style={{ width: '157px' }}
                  >
                    Get Started
                  </a>
                </Link>
              </div>
              <div
                class={`${
                  menuOpened ? 'block' : 'hidden'
                } absolute w-full bg-tensei-dark top-0 rounded-lg`}
              >
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <button
                    class="inline-flex items-center ml-auto justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-expanded="false"
                    onClick={() => toggleMenuOpen((s) => !s)}
                  >
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <a
                    href="#"
                    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <Hero />
        </header>
      </div>
      <div className="max-w-screen-lg xl:max-w-screen-2xl mx-auto border-b border-gray-200 px-12 items-center flex flex-col">
        <SectionHeading
          title="Powerful features. Faster Delivery"
          description="The fastest and easiest way to build powerful and secure APIs"
        />

        <div className="w-full flex flex-wrap lg:justify-between justify-center mt-24">
          {features.map((feat) => {
            return <Feature feature={feat} />
          })}
        </div>
      </div>

      <div className="max-w-screen-lg xl:max-w-screen-2xl mx-auto items-center flex flex-col">
        <SectionHeading
          title="See how it works"
          description="A step-by-step guide to use our features to customize your API"
        />

        <SetupStep
          mainImg={<Step1BrowserScreen />}
          maskImg={<Ellipse />}
          descriptions={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et.',
          ]}
          titles={['Define your content types.']}
          steps={['STEP 1']}
          stepColor="text-tensei-lightBlue"
        />
        <SetupStep
          mainImg={<Step2BrowserScreen />}
          maskImg={<YellowSvg />}
          descriptions={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et.',
          ]}
          titles={[
            'Create unique, valuable content.',
            'Consume your data with REST or GraphQL APIs.',
          ]}
          steps={['STEP 2', 'STEP 3']}
          stepColor="text-tensei-yellow"
        />
        <SetupStep
          mainImg={<Step4BrowserScreen />}
          maskImg={<Ellipse bgColor="#2346F8" />}
          descriptions={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et.',
          ]}
          titles={['Fully customize Tensei to suit your business with plugin.']}
          steps={['STEP 4']}
          stepColor="text-tensei-purple"
        />
      </div>

      <div className="bg-tensei-lighter w-full">
        <div className="max-w-screen-lg xl:max-w-screen-2xl mx-auto flex items-center p-12 pt-20 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full lg:mb-0 mb-16">
            <h3 className="text-tensei-dark font-semibold text-4xl lg:w-3/4 w-full pb-8">
              Elegant code, Secure, Developer-first
            </h3>
            <p className="text-lg lg:w-3/4 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div
              className="w-9/12 h-4/5 rounded-2xl absolute bottom-0 lg:left-0.1 left-20"
              style={{ backgroundColor: '#33C5FF' }}
            />
            <div className="lg:translate-40-vw" style={{ height: '80%' }}>
              <CodeWindow className="bg-tensei-dark pb-6 md:pb-0">
                <CodeWindow.Code tokens={tokens} />
              </CodeWindow>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-screen-lg xl:max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
        <SectionHeading
          title="Powerful control with plugins"
          description="The functionality of Tensei dashboard and all can be extended with plugins. Plugins can
          range from database managers to file managers to email senders."
        />
      </div>

      <div
        className="mt-40 w-full py-16"
        style={{ backgroundColor: '#33C5FF', height: '60vh' }}
      ></div>

      <div className="bg-white max-w-screen-lg xl:max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
        <h3 className="text-center lg:text-4xl md:text-3xl text-2xl text-tensei-dark font-semibold mb-4 lg:w-1/3 w-full">
          A few tutorials and guides to quickly get you started
        </h3>

        <div className="w-full flex lg:justify-between lg:py-20 py-5 flex-wrap justify-center px-4">
          {tutorialData.map((item, index) => {
            return (
              <TutorialCard
                key={index}
                img={item.image}
                title={item.title}
                summary={item.summary}
              />
            )
          })}
        </div>
      </div>

      <div className="bg-tensei-purple rounded-xl flex lg:flex-row flex-col justify-between items-center lg:py-32 py-8 max-w-screen-lg xl:max-w-screen-2xl mx-auto lg:px-16 px-8 transform lg:translate-y-40">
        <h3 className="text-white text-2xl lg:text-4xl font-bold lg:w-2/5 w-full lg:text-left text-center">
          Rapidly develop APIs and web applications today.
        </h3>
        <div className="flex items-center lg:justify-start justify-center mt-6 lg:mt-0 lg:w-auto w-full">
          <span className="text-white mr-8 font-semibold">Try live demo</span>
          <Link href="/docs/getting-started">
            <a
              className="flex items-center justify-center rounded-md bg-white text-tensei-purple font-semibold h-10 transition duration-100 text-md"
              style={{ width: '157px' }}
            >
              Get started
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
