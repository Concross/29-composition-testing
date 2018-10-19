import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import NoteUpdateForm from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('NoteUpdateForm component', () => {
  test('render', () => {
    const wrapper = Enzyme.shallow(<NoteUpdateForm />);
    expect(wrapper.exists()).toBe(true);
  });

  test('test description', () => {
  });
});
