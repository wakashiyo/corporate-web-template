import { shallow } from 'enzyme';
import React from 'react';
import TemporaryLeftBar from '../components/TemporaryLeftBar';

test('Hiddenの存在確認', () => {
  const wrapper = shallow(<TemporaryLeftBar />);
  expect(wrapper.find('Hidden').length).toBe(1);
});

test('Drawerの存在確認', () => {
  const wrapper = shallow(<TemporaryLeftBar />);
  expect(wrapper.find('Drawer').length).toBe(1);
});