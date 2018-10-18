'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });
import NoteCreateForm from '../index.js';

describe('NoteCreateForm component', () => {

  test('should call handleChange when change event is emitted from title input', () => {
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
    handleChange.restore();
  });

  test('should call handleChange for every change event in the title input', () => {
    let handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'title',
        value: 'B',
      }
    };

    for (let i = 0; i < 10; i++) {
      wrapper.find('input[name="title"]').simulate('change', event);
    }

    expect(handleChange.callCount).toBe(10);
    handleChange.restore();
  });

  test('should not call handleChange if other events are emitted from the title input', () => {
    let handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'title',
        value: 'B',
      }
    };

    wrapper.find('input[name="title"]').simulate('focus', event);

    expect(handleChange.notCalled).toBe(true);
    handleChange.restore();
  });

  test('should call handleChange when change event is emitted from content input', () => {
    let handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'content',
        value: 'B',
      }
    };

    wrapper.find('input[name="content"]').simulate('change', event);

    expect(handleChange.calledOnce).toBe(true);
    handleChange.restore();
  });

  test('should call handleChange for every change event in the content input', () => {
    let handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'content',
        value: 'B',
      }
    };

    for (let i = 0; i < 10; i++) {
      wrapper.find('input[name="content"]').simulate('change', event);
    }

    expect(handleChange.callCount).toBe(10);
    handleChange.restore();
  });

  test('should not call handleChange if other events are emitted from the content input', () => {
    let handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'content',
        value: 'B',
      }
    };

    wrapper.find('input[name="content"]').simulate('focus', event);

    expect(handleChange.notCalled).toBe(true);
    handleChange.restore();
  });

  test('should call onComplete when a submit event has been emitted from the form', () => {

  });
});