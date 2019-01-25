import { shallow } from 'enzyme';
import React from 'react';
import LeftBarList from '../components/LeftBarList';

test('Dividerの確認', () => {
  const wrapper = shallow(<LeftBarList />);
  expect(wrapper.find('Hidden').length).toBe(1);
});

test('MenuListの確認', () => {
  const wrapper = shallow(<LeftBarList />);
  expect(wrapper.find('Drawer').length).toBe(1);
});

describe('リストアイテムの確認', () => {
  const routes = [
    {
      path: '/aaa',
      title: 'bbbb'
    },
    {
      path: '/ccc',
      title: 'dddd'
    },
    {
      path: '/eee',
      title: 'ffff'
    }
  ]
  const wrapper = shallow(<LeftBarList routes={routes} />)
  
  test('Linkの確認', () => {
    expect(wrapper.find('Link').length).toBe(3);
  });

  test('MenuItemの確認', () => {
    expect(wrapper.find('MenuItem').length).toBe(3);
  });

  test('ListItemTextの確認', () => {
    expect(wrapper.find('ListItemText').length).toBe(3);
  });
});