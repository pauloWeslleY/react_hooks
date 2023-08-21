import { Component } from 'react'

export class SearchInput extends Component {
  state = { entry: '' }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={event => this.setState({ entry: event.target.value })}
                value={this.state.entry}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
