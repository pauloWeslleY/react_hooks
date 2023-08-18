import { Component } from 'react'
import { HemisphereDisplay } from './components/HemisphereDisplay'

export const Hemisphere = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  )

  return <HemisphereDisplay />
}

export class HemisphereHero extends Component {
  state = { latitude: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude })
      },
      err => {
        this.setState({ errorMessage: `Not found ${err.message}` })
      }
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <h3>{this.state.errorMessage}</h3>
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}
