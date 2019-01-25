import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ButtonSample from '../ButtonSample';


test('<button />の存在確認1', () => {
  const wrapper = shallow(<ButtonSample />);
  expect(wrapper.find('button')).toHaveLength(1);
});

test('<button />の存在確認2', () => {
  const wrapper = shallow(<ButtonSample />);
  expect(wrapper.find('button').length).toBe(1);
});

// test('メソッド確認', () => {
//   const wrapper = shallow(<ButtonSample />);
//   const setStateSpy = jest.spyOn(ButtonSample.prototype, 'setState');

//   wrapper.setState({
//     count: 1
//   });

//   wrapper.instance().clicked();

//   expect(setStateSpy).toHaveBeenCalledWith({
//     count: 1,
//     label: 'hello world'
//   });
// });