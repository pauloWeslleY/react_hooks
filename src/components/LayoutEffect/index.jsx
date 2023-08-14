import { useLayoutEffect, useState } from 'react'
import { Button } from '../Button'
import { LayoutEffectModal } from './LayoutEffectModal'
import './layoutEffect.css'

export const LayoutEffect = () => {
  const [count, setCount] = useState(1)

  useLayoutEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div className="layoutHero">
      <h1>{count}</h1>
      <Button name="Increment" onClick={() => setCount(prev => prev + 1)} />

      <LayoutEffectModal />
    </div>
  )
}
