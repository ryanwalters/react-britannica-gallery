
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import GenericComponent from '../';

Enzyme.configure({ adapter: new Adapter() });

describe('<GenericComponent />', () => {

    it('should render without throwing an error', () => {
        expect(shallow(<GenericComponent/>).contains(<div>Component!</div>)).toBe(true);
    });
});
