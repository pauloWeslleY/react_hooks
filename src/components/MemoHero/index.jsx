import { useMemo, useState } from 'react'
import { InputField } from '../InputField'
import './memo.css'
import { Button } from '../Button'

export const MemoHero = () => {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState('')

  const doublenumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  return (
    <section className="memoWrapper">
      <p>{number}</p>
      <InputField value={text} onChange={event => setText(event.target.value)} />
      <Button name="Increment" onClick={() => setNumber(2)} />
      <p>text: {text}</p>
    </section>
  )
}

const slowFunction = num => {
  console.log('Slow Function is being called!')
  for (let i = 0; i < 10000; i++) {}
  return num * 2
}
