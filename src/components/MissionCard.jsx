import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <h2 data-testid="mission-name">
          {name}
        </h2>
        <h3 data-testid="mission-year">
          {year}
        </h3>
        <h3 data-testid="mission-country">
          {country}
        </h3>
        <h3 data-testid="mission-destination">
          {destination}
        </h3>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
