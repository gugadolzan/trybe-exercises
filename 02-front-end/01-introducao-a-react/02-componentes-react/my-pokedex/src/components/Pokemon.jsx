import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    console.log(this.props);

    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image, moreInfo } = pokemon;
    const { value, measurementUnit } = averageWeight;

    return (
      <div className="pokemonCard">
        <div className="pokemonBody">
          <p>{id}</p>
          <p>{name}</p>
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

export default Pokemon;
