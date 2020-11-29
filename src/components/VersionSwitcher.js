import { tailwindVersion } from '@/utils/tailwindVersion'
import clsx from 'clsx'
import { useRef } from 'react'

export function VersionSwitcher({ className }) {
  let selectRef = useRef()

  function submit(e) {
    e.preventDefault()
    if (selectRef.current.value === 'v0') {
      window.location = 'https://tailwindcss-v0.netlify.app/'
    }
    if (selectRef.current.value === 'v1') {
      window.location = 'https://v1.tailwindcss.com/'
    }
  }

  return (
    <form onSubmit={submit} className={clsx('relative', className)}>
      <svg
        className="w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        />
      </svg>
    </form>
  )
}
