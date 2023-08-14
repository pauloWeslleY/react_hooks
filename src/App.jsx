import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Reducer } from './components/Reducer'
import { MemoHero } from './components/MemoHero'
import { Callback } from './components/Callback'
import { LayoutEffect } from './components/LayoutEffect'
import { ContextProvider } from './components/ContextProvider'
import Message from './components/Message'

import './styles/App.css'

export const App = () => {
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
    <main>
      <div className="App">
        <Header>
          <Form />
        </Header>

        <LayoutEffect />

        <Reducer />

        <ContextProvider />

        <Message />

        <MemoHero />

        <Callback />

        <span className="resourceType">{resourceType}</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <Button onClick={() => changeResourceType('posts')} name="Posts" />
          <Button onClick={() => changeResourceType('comments')} name="Comments" />
          <Button onClick={() => changeResourceType('todos')} name="Todos" />
        </div>
      </div>

      <Footer copy="copyright" />
    </main>
  )
}
