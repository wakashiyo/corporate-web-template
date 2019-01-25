import { shallow } from 'enzyme';
import React from 'react';
import TextSample from '../TextSample';


test('<h2 />の存在確認1', () => {
  const wrapper = shallow(<TextSample />);
  expect(wrapper.find('h2')).toHaveLength(1);
});

test('<h2 />の存在確認2', () => {
  const wrapper = shallow(<TextSample />);
  expect(wrapper.find('h2').length).toBe(1);
});