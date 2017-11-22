import React from 'react';

import Offer from './Offer';
import { shallow } from 'enzyme';


describe('Offer component', () => {

    it('should render defaultProps', () => {

        const wrapper = shallow( <Offer />);

        const actual = wrapper.find('.offer').length;

        expect(actual).toEqual(1);
    });

});
