import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image, moreInfo } = pokemon;
    const { value, measurementUnit } = averageWeight;

    return (
      <div className="pokemonCard">
        <div className="pokemonBody">
          <p>{id}</p>
          <p>
            <b>{name}</b>
          </p>
          <p>{type}</p>
          <p>Average Weight: {value + measurementUnit}</p>
        </div>
        <div className="pokemonAside">
          <img src={image} alt={name} />
          <a href={moreInfo}>More Info</a>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
