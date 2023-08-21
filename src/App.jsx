import { Component } from 'react'
import axios from 'axios'
import { SearchInput } from './components/SearchInput'
import { ImageList } from './components/ImageList'
// import { ModalHero } from './components/ModalHero'
import { Portal } from './components/Portal'

// API Key
const API_KEY = '20455290-7d57fe64f6cd3b4ab1640441c'

export const AppHero = () => {
  return (
    <main className="ui container" style={{ marginTop: '2rem' }}>
      <SearchInput />
    </main>
  )
}

export class App extends Component {
  state = { results: [] }

  onSearchSubmit = async entry => {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${entry}&image_type=photo`
    const response = await axios.get(URL)
    this.setState({ results: response.data.hits })
  }

  render() {
    return (
      <main className="ui container" style={{ marginTop: '2rem' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />

        <Portal />

        <ImageList images={this.state.results} />
      </main>
    )
  }
}
