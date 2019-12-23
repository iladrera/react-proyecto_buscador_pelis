import React, { Component } from "react";
import propTypes from "prop-types";
import { Movie } from "./Movie";

export class MoviesList extends Component {
  static propTypes = {
    movies: propTypes.array
  };

  render() {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <div className="MoviesList">
          {movies.map(movie => {
            return (
              <div key={movie.imdbID} className="MoviesList-item">
                <Movie
                  id={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                />
              </div>
            );
          })}
        </div>
      );
    });
  }
}
