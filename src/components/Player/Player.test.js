import React from 'react';
import { shallow, mount  } from 'enzyme';
import Player from './Player';

import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
configure({ adapter: new Adapter() });


describe('testing play button', () => {
  const player = mount(<Player/>);
  it('player is paused', () => {
    expect(player.instance().state.paused).toBeFalsy();
  });
  it('player is played', () => {
    player.find('button').simulate('click', { preventDefault() {} });
    expect(player.find('button').hasClass('Play'));
    expect(player.instance().state).toBeTruthy()
  });
});