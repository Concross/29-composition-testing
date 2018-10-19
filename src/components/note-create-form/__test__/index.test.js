import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import NoteCreateForm from '../index.js';

Enzyme.configure({ adapter: new Adapter() });

describe('NoteCreateForm component', () => {
  test('should call handleChange when change event is emitted from title input', () => {
    const handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'title',
        value: 'B',
      },
    };

    wrapper.find('input[name="title"]').simulate('change', event);

    expect(handleChange.calledOnce).toBe(true);
    handleChange.restore();
  });

  test('should call handleChange for every change event in the title input', () => {
    const handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'title',
        value: 'B',
      },
    };

    for (let i = 0; i < 10; i++) {
      wrapper.find('input[name="title"]').simulate('change', event);
    }

    expect(handleChange.callCount).toBe(10);
    handleChange.restore();
  });

  test('should not call handleChange if other events are emitted from the title input', () => {
    const handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'title',
        value: 'B',
      },
    };

    wrapper.find('input[name="title"]').simulate('focus', event);

    expect(handleChange.notCalled).toBe(true);
    handleChange.restore();
  });

  test('should call handleChange when change event is emitted from content input', () => {
    const handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'content',
        value: 'B',
      },
    };

    wrapper.find('input[name="content"]').simulate('change', event);

    expect(handleChange.calledOnce).toBe(true);
    handleChange.restore();
  });

  test('should call handleChange for every change event in the content input', () => {
    const handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'content',
        value: 'B',
      },
    };

    for (let i = 0; i < 10; i++) {
      wrapper.find('input[name="content"]').simulate('change', event);
    }

    expect(handleChange.callCount).toBe(10);
    handleChange.restore();
  });

  test('should not call handleChange if other events are emitted from the content input', () => {
    const handleChange = sinon.spy(NoteCreateForm.prototype, 'handleChange');
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    const event = {
      target: {
        name: 'content',
        value: 'B',
      },
    };

    wrapper.find('input[name="content"]').simulate('focus', event);

    expect(handleChange.notCalled).toBe(true);
    handleChange.restore();
  });

  test('should call onComplete when a submit event has been emitted from the form', () => {
    const onComplete = sinon.spy(NoteCreateForm.prototype, 'onComplete');

    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    wrapper.setProps({ addNote: sinon.fake() });

    const event = {
      preventDefault: sinon.fake(),
      target: {
        title: 'My title',
        content: 'My content',
      },
    };

    wrapper.find('form').simulate('submit', event);

    expect(onComplete.calledOnce).toBe(true);
    onComplete.restore();
  });

  test('should reset the state title when a submite event has been emitted from the form', () => {
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    wrapper.setProps({ addNote: sinon.fake() });

    const event = {
      preventDefault: sinon.fake(),
      target: {
        title: 'My title',
        content: 'My content',
      },
    };

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.state().title).toBe('');
  });

  test('should reset the state content when a submite event has been emitted from the form', () => {
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    wrapper.setProps({ addNote: sinon.fake() });

    const event = {
      preventDefault: sinon.fake(),
      target: {
        title: 'My title',
        content: 'My content',
      },
    };

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.state().content).toBe('');
  });

  test('onComplete should prevent refresh when a submit event has been emitted from the form', () => {
    const wrapper = Enzyme.shallow(<NoteCreateForm />);
    wrapper.setProps({ addNote: sinon.fake() });

    const event = {
      preventDefault: sinon.spy(),
      target: {
        title: 'My title',
        content: 'My content',
      },
    };

    wrapper.find('form').simulate('submit', event);
    expect(event.preventDefault.calledOnce).toBe(true);
  });
});
