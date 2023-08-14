import { useCallback, useState } from 'react'
import { Button } from '../Button'
import { InputField } from '../InputField'
import { HeroList } from './HeroList'
import './callback.css'

export const Callback = () => {
  const [text, setText] = useState('')
  const [resourceType, setResourceType] = useState('posts')

  const getItems = useCallback(async () => {
    console.log('getItems is being called!')
    const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    const dataJSON = await response.json()

    return dataJSON
  }, [resourceType])

  return (
    <div className="callBackHero">
      <InputField value={text} onChange={event => setText(event.target.value)} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <Button onClick={() => setResourceType('posts')} name="Posts" />
        <Button onClick={() => setResourceType('comments')} name="Comments" />
        <Button onClick={() => setResourceType('todos')} name="Todos" />
      </div>

      <HeroList getItems={getItems} />
    </div>
  )
}
