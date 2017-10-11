
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EbGallery from '../';

Enzyme.configure({ adapter: new Adapter() });

describe('<EbGallery />', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<EbGallery />).contains('Component!')).toBe(true);
  });
});
