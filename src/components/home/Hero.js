import { CodeWindow } from '@/components/CodeWindow'
import tokenize from '../../macros/tokenize.macro'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import { useMedia } from '@/hooks/useMedia'
import Link from 'next/link'

import Ellipse from '@/img/icons/home/Ellipse'

const { tokens, code } = tokenize.javascript(
  `
   const { auth } = require('@tensei/auth')
   const { tensei } = require('tensei/core')
   const { graphql } = require('tensei/graphql')
`,
  true
)

function getRange(text, options = {}) {
  return { start: code.indexOf(text), end: code.indexOf(text) + text.length, ...options }
}

const ranges = [
  getRange(' p-8'),
  getRange(' rounded-full'),
  getRange(' mx-auto'),
  getRange(' font-semibold'),
  getRange(' class="font-medium"'),
  getRange(' class="text-cyan-600"'),
  getRange(' class="text-gray-500"'),
  getRange(' text-center'),
  getRange('md:flex '),
  getRange(' md:p-0'),
  getRange(' md:p-8', { immediate: true }),
  getRange(' md:rounded-none'),
  getRange(' md:w-48'),
  getRange(' md:h-auto'),
  getRange(' md:text-left'),
  // getRange(' md:-m-8 md:mr-8'),
  // getRange(' md:rounded-none'),
  // getRange(' md:w-48'),
  // getRange(' md:h-auto'),
]

function getRangeIndex(index, ranges) {
  for (let i = 0; i < ranges.length; i++) {
    const rangeArr = Array.isArray(ranges[i]) ? ranges[i] : [ranges[i]]
    for (let j = 0; j < rangeArr.length; j++) {
      if (index >= rangeArr[j].start && index < rangeArr[j].end) {
        return [i, index - rangeArr[j].start, index === rangeArr[j].end - 1]
      }
    }
  }
  return [-1]
}

function augment(tokens, index = 0) {
  for (let i = 0; i < tokens.length; i++) {
    if (Array.isArray(tokens[i])) {
      const _type = tokens[i][0]
      const children = tokens[i][1]
      if (Array.isArray(children)) {
        index = augment(children, index)
      } else {
        const str = children
        const result = []
        for (let j = 0; j < str.length; j++) {
          const [rangeIndex, indexInRange, isLast] = getRangeIndex(index, ranges)
          if (rangeIndex > -1) {
            result.push([`char:${rangeIndex}:${indexInRange}${isLast ? ':last' : ''}`, str[j]])
          } else {
            if (typeof result[result.length - 1] === 'string') {
              result[result.length - 1] += str[j]
            } else {
              result.push(str[j])
            }
          }
          index++
        }
        if (!(result.length === 1 && typeof result[0] === 'string')) {
          tokens[i].splice(1, 1, result)
        }
      }
    } else {
      const str = tokens[i]
      const result = []
      for (let j = 0; j < str.length; j++) {
        const [rangeIndex, indexInRange, isLast] = getRangeIndex(index, ranges)
        if (rangeIndex > -1) {
          result.push([`char:${rangeIndex}:${indexInRange}${isLast ? ':last' : ''}`, str[j]])
        } else {
          if (typeof result[result.length - 1] === 'string') {
            result[result.length - 1] += str[j]
          } else {
            result.push(str[j])
          }
        }
        index++
      }
      tokens.splice(i, 1, ...result)
      i += result.length - 1
    }
  }
  return index
}

augment(tokens)

export function Hero() {
  const containerRef = useRef()
  const [step, setStep] = useState(-1)
  const [state, setState] = useState({ group: -1, char: -1 })
  const cursorControls = useAnimation()
  const [wide, setWide] = useState(false)
  const [finished, setFinished] = useState(false)
  const supportsMd = useMedia('(min-width: 640px)')
  const [isMd, setIsMd] = useState(false)
  const [containerRect, setContainerRect] = useState()
  const md = supportsMd && isMd
  const mounted = useRef(true)
  const inViewRef = useRef()
  const imageRef = useRef()

  const layout = !finished

  useEffect(() => {
    return () => (mounted.current = false)
  }, [])

  useEffect(() => {
    if (step === 14) {
      let id = window.setTimeout(() => {
        setFinished(true)
      }, 1000)
      return () => {
        window.clearTimeout(id)
      }
    }
  }, [step])

  useEffect(() => {
    if (!finished) return
    let count = 0
    cursorControls.start({ opacity: 0.5 })
    const id = window.setInterval(() => {
      if (count === 2) {
        return window.clearInterval(id)
      }
      count++
      cursorControls.start({ opacity: 1, scale: 0.9, transition: { duration: 0.25 } }).then(() => {
        setWide((wide) => !wide)
        cursorControls.start({
          opacity: count === 2 ? 0 : 0.5,
          scale: 1,
          transition: { duration: 0.25, delay: 0.6 },
        })
      })
    }, 2000)
    return () => {
      window.clearInterval(id)
    }
  }, [finished])

  useEffect(() => {
    if (finished) {
      const id = window.setTimeout(() => {
        setIsMd(wide)
      }, 250)
      return () => window.clearTimeout(id)
    }
  }, [wide, finished])

  return (
    <Layout
      left={
        <div>
          <h1
            className="text-tensei-dark text-4xl sm:text-6xl lg:text-5xl font-semibold tracking-tight lg:w-4/5 w-full lg:leading-14 leading-12"
            // style={{ lineHeight: '64px' }}
          >
            Content management and distribution with a touch of elegance <span role="img" aria-label="">🎉</span>{' '}
          </h1>
          <p className="text-lg lg:w-3/5 w-full mt-8">
            Tensei is an open-source developer-friendly headless CMS for rapidly developing APIs and
            web applications.
          </p>

          <div className="mt-16 flex lg:flex-row flex-col">
            <Link href="/docs/getting-started">
              <a
                className="flex items-center justify-center rounded-md bg-tensei-purple text-white font-semibold h-10 transition duration-100 text-md lg:w-40 w-full"
              >
                Learn more
              </a>
            </Link>
            <a
              href="https://github.com/tenseijs/tensei"
              className="flex font-semibold items-center justify-center rounded-md bg-tensei-gray text-tensei-gray-darker lg:ml-6 lg:mt-0 mt-4  h-10 transition duration-100 text-md lg:w-40 w-full"
            >
              Github
            </a>
          </div>
        </div>
      }
      right={
        <>
        <CodeWindow className={`${styles.codeWindow} bg-tensei-dark pb-6 md:pb-0`}>
          <CodeWindow.Code ref={inViewRef} tokens={tokens} />
        </CodeWindow>
        </>
      }
    />
  )
}

function Layout({ left, right, pin = 'left' }) {
  return (
    <div className={`flex lg:flex-row flex-col py-7 pb-20`}>
      <div
        className={`relative  self-center ${
          pin === 'left' ? 'pr-8' : 'pl-8'
        } sm:px-6 md:px-8 pb-6 md:pb-8 lg:px-0 lg:pb-0 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-32 xl:mt-0 lg:w-1/2 w-full`}
      >
        <div
          className={`${styles.cardContainer} max-w-xl xl:max-w-none flex items-center justify-center`}
        >
          <div className="w-full flex-none lg:px-0 px-4">{left}</div>
        </div>
      </div>
      <div className="relative md:px-8 lg:px-0 self-center pt-0 lg:mt-0 mt-32 lg:pt-8 lg:w-1/2 w-full">
        <div className="mx-auto lg:max-w-2xl xl:max-w-none">
        <div className="transform rotate-180 absolute right-1/3 translate-rotate-x-41-vw"><Ellipse /></div>
          <img
            src={require('@/img/laptop-hero.png').default}
            className="absolute -bottom-3 z-10 left-0 right-0 h-auto w-auto"
            alt="hero"
          />
          {right}
        </div>
      </div>
    </div>
  )
}
