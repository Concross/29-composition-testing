import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import NoteUpdateForm from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('NoteUpdateForm component', () => {
  test('render', () => {
    const note = {
      title: '',
      content: '',
    };

    const wrapper = Enzyme.shallow(<NoteUpdateForm note={note} />);

    expect(wrapper.exists()).toBe(true);
  });
});
