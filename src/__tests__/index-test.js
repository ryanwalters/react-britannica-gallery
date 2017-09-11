
import React from 'react';
import {shallow} from 'enzyme';
import GenericComponent from '../';

describe('<GenericComponent />', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<GenericComponent/>).contains(<div>Component!</div>)).toBe(true);
    });
});
