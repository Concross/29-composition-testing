'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });
import NoteItem from '../index';

describe('NoteItem component', () => {

  // TODO(connor): test that destroy is called. Need to find a way to set note prop
  test('should call destroy when delete button is clicked', () => {
    let destroySpy = sinon.spy(NoteItem.prototype, 'destroy');
    let note = {
      title: '',
      content: '',
    };
    let wrapper = Enzyme.shallow(<NoteItem note={note} />);

    wrapper.setProps({ destroyNote: sinon.fake() });

    wrapper.find('button').simulate('click');
    expect(destroySpy.calledOnce).toBe(true);
  });
});