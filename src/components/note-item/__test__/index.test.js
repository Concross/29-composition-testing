import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import NoteItem from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('NoteItem component', () => {
  test('should call destroy when delete button is clicked', () => {
    const destroySpy = sinon.spy(NoteItem.prototype, 'destroy');
    const note = {
      title: '',
      content: '',
    };
    const wrapper = Enzyme.shallow(<NoteItem note={note} />);

    wrapper.setProps({ destroyNote: sinon.fake() });

    wrapper.find('button').simulate('click');
    expect(destroySpy.calledOnce).toBe(true);
    destroySpy.restore();
  });

  test('destroy should remove a note from the dashboard notes state', () => {
    const state = {
      notes: ['note'],
    };

    const wrapper = Enzyme.shallow(<NoteItem note={state.notes[0]} />);

    wrapper.setProps({
      destroyNote: note => {
        state.notes.splice(0, 1);
      },
    });

    wrapper.find('button').simulate('click');
    expect(state.notes.length).toBe(0);

  });
});
