import { useEffect, useRef, useState } from 'react'
import { InputField } from '../InputField'
import './form.css'

export const Form = () => {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const previousName = useRef()

  console.log(inputRef.current)

  const focusInputRef = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <>
      <InputField label={name} value={name} onChange={e => setName(e.target.value)} />

      <div className="nameWrap">
        <span>And my name was {previousName.current}</span>
      </div>

      <button type="button" onClick={focusInputRef}>
        Submit
      </button>
    </>
  )
}
