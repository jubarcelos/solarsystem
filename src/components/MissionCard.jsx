import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <h2 data-testid="mission-name">
          {name}
        </h2>
        <h2 data-testid="mission-year">
          {year}
        </h2>
        <h2 data-testid="mission-country">
          {country}
        </h2>
        <h2 data-testid="mission-destination">
          {destination}
        </h2>
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
