import { shallow } from 'enzyme';
import React from 'react';
import LeftBar from '../components/LeftBar';

test('Hiddenの存在確認', () => {
  const wrapper = shallow(<LeftBar />);
  expect(wrapper.find('Hidden').length).toBe(1);
});

test('Drawerの存在確認', () => {
  const wrapper = shallow(<LeftBar />);
  expect(wrapper.find('Drawer').length).toBe(1);
});