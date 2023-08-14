import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { Button } from '../Button'
import './context.css'

export const ContextProvider = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <section
      className="context"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem',
        borderRadius: 10,
        backgroundColor: theme === 'light' ? 'var(--zinc-200)' : 'var(--indigo-400)',
        color: theme === 'dark' ? 'var(--zinc-200)' : 'var(--indigo-400)',
      }}
    >
      <h2>Current theme: {theme}</h2>
      <Button name="Toggle" onClick={() => toggleTheme()} />
    </section>
  )
}
