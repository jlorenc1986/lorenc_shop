import React from 'react';
import PropTypes from 'prop-types';

const Offer = (props) =>
    <div className="offer">
     {props.id}
    </div>

Offer.propTypes = {
    id: PropTypes.string
}

Offer.defaultProps = {
    id: 'null'
};

Offer.displayName = "Offer";

export default Offer;
