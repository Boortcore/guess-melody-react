import React from 'react';
import { shallow, mount} from 'enzyme';
import Preloader from './Preloader';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('testing of Preloader', () => {
  const preloader = shallow(<Preloader/>);
  it('has .cssload-dots tag', () => {
    expect(preloader.exists('svg')).toBeTruthy();
  });
  it('has svg tag', () => {
    expect(preloader.exists('svg')).toBeTruthy();
  });
});