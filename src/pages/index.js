import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden bg-tensei-lighter">
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

      <div
        style={{
          backgroundImage: `url('https://res.cloudinary.com/bahdcoder/image/upload/v1606635067/Pattern_BG_2_eiicrw.png')`,
        }}
        className="flex items-center justify-center h-screen"
      >
        <div className="max-w-xl p-6 sm:p-2">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/bahdcoder/image/upload/v1604236130/Asset_1_4x_fhcfyg.png"
              className="h-12"
              alt="Tensei logo"
            />
          </div>

          <p className="mt-16 font-semibold text-2xl sm:text-4xl text-center text-tensei-dark">
            The fastest and easiest way to build powerful and secure APIs
          </p>

          <div className="mt-16 flex justify-center">
            <Link href="/docs/getting-started">
              <a
                className="flex items-center justify-center rounded-md bg-tensei-purple text-white font-semibold h-10 transition duration-100 text-md"
                style={{ width: '157px' }}
              >
                Learn more
              </a>
            </Link>
            <a
              href="https://github.com/tenseijs/tensei"
              className="flex font-semibold items-center justify-center rounded-md bg-tensei-gray text-tensei-gray-darker ml-6 h-10 transition duration-100 text-md"
              style={{ width: '157px' }}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
