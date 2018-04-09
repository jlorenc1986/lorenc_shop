import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OffersList extends Component {
  render() {
      const {offers} = this.props;
    return (
      <div>
        Offers : {{ offers.length }}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
};
OffersList.defaultProps = {
  offers: [{
    id: '1',
    description: 'ciao',
  }],
};

OffersList.displayName = 'OffersList';

export default OffersList;
