import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { gradients } from '@/utils/gradients'
import Link from 'next/link'
import { Community } from '@/components/Community'
import styles from './index.module.css'
import { Widont } from '@/components/Widont'

export default function DocsLandingPage() {
  return (
    <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
        Getting started with Tensei Js
      </h1>
      <p className="text-2xl tracking-tight mb-10">
        Learn Tensei the way that best matches your learning style.
      </p>

      <section>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

DocsLandingPage.layoutProps = {
  meta: {
    title: 'Documentation',
  },
  Layout: DocumentationLayout,
}
