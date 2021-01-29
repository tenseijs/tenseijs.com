import React from 'react'

function Ellipse({ bgColor = '#33C5FF' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 337 675"
    >
      <path
        fill={bgColor}
        d="M337 337.329c0 186.12-150.88 337-337 337v-674c186.12 0 337 150.88 337 337z"
      ></path>
    </svg>
  )
}

export default Ellipse
