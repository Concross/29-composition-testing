'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });
import NoteCreateForm from '../index.js';

describe('NoteCreateForm component', () => {

  test('should call handleChange when onChange event is emitted', () => {
    let handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'title',
        value: 'B',
      }
    };

    wrapper.find('input[name="title"]').simulate('change', event);

    expect(handleChange.calledOnce).toBe(true);
  });
});