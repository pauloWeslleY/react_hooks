import { useLayoutEffect, useRef, useState } from 'react'

import './layoutEffect.css'

export const LayoutEffectModal = () => {
  const [show, setShow] = useState(false)

  const popup = useRef()
  const button = useRef()

  useLayoutEffect(() => {
    if (!popup.current || !button.current) return
    const { bottom } = button.current.getBoundingClientRect()

    popup.current.style.top = `${bottom + 25}px`
  }, [show])

  return (
    <div className="heroLayoutEffect">
      <button ref={button} onClick={() => setShow(prev => !prev)}>
        Toggle
      </button>

      {show && (
        <div style={{ position: 'absolute' }} ref={popup} className="layoutEffectModal">
          <span>Hello from modal!</span>
        </div>
      )}
    </div>
  )
}
