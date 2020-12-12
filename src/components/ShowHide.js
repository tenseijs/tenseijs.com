import { useState } from 'react'

export default function ShowHide ({ children, showLabel = 'Show Data', hideLabel = 'Hide Data' }) {
    const [show, setShow] = useState(false)

    return (
        <>
            <a href="#" onClick={() => setShow(!show)}>
                {show ? hideLabel : showLabel}
            </a>
            {show ? children : null}
        </>
    )
}
