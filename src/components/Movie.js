import React, { Component } from "react";
import propTypes from "prop-types";

import { Link } from "react-router-dom";

export class Movie extends Component {
  static propTypes = {
    id: propTypes.string,
    poster: propTypes.string,
    title: propTypes.string,
    year: propTypes.string
  };

  render() {
    const { id, poster, title, year } = this.props;

    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img alt={title} src={poster} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
