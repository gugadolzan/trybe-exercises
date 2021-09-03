import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const {
      pokemon: {
        id,
        name,
        type,
        averageWeight: { value, measurementUnit },
        image,
        moreInfo,
      },
    } = this.props;

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

// define proptypes
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
