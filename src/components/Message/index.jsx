import { ThemeContext } from '../../contexts/themeContext'

const Message = () => (
  <ThemeContext.Consumer>
    {value => (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5rem',
          marginBlock: '2rem',
          borderRadius: 10,
          backgroundColor: value.theme === 'light' ? 'var(--zinc-200)' : 'var(--indigo-400)',
          color: value.theme === 'dark' ? 'var(--zinc-200)' : 'var(--indigo-400)',
        }}
      >
        <h2>Hello World</h2>
      </section>
    )}
  </ThemeContext.Consumer>
)

export default Message
