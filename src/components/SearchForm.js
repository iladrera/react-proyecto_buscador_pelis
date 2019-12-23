import React, { Component } from "react";

const API_KEY = "4beb6ceb";

export class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  // e = valor que devuelve el evento
  _handleChange = e => {
    // la prop target: contiene el elemento que está causando el evento
    // la prop value: contiene el valor que tiene el input
    this.setState({ inputMovie: e.target.value });
  };

  // e = valor que devuelve el evento
  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = "0" } = results;
        console.log({ Search, totalResults });
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              placeholder="Movie to search..."
              type="text"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
