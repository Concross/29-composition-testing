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
});
