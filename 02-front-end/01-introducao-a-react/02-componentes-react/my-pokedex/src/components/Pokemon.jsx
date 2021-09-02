import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    console.log(this.props);

    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image, moreInfo } = pokemon;

    return (
      <>
        <p>{id}</p>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value + averageWeight.measurementUnit}</p>
        <p>{image}</p>
        <p>{moreInfo}</p>
      </>
    );
  }
}

export default Pokemon;
