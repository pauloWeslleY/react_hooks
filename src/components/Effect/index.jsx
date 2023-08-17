import { useEffect, useState } from 'react'
import { Button } from '../Button'

import './effect.css'

export const Effect = () => {
  const [resourceType, setResourceType] = useState('posts')

  const changeResourceType = resourceType => {
    setResourceType(resourceType)
  }

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const dataJSON = await response.json()

      console.log(dataJSON)
    }

    fetchResourceTypes()
  }, [resourceType])

  return (
    <section className="effectContainer">
      <span className="resourceType">{resourceType}</span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <Button onClick={() => changeResourceType('posts')} name="Posts" />
        <Button onClick={() => changeResourceType('comments')} name="Comments" />
        <Button onClick={() => changeResourceType('todos')} name="Todos" />
      </div>
    </section>
  )
}
