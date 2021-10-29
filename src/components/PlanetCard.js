import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage } = this.props;
    const { planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <h2 testid="planet-name">
          {planetName}
        </h2>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
