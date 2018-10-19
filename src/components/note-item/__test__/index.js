'use strict';

import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });
import NoteItem from '../index';

describe('NoteItem component', () => {

  test('should call destroy when delete button is clicked', () => {
    let destroySpy = sinon.spy(NoteItem.prototype, 'destroy');
    let wrapper = Enzyme.shallow(<NoteItem />);

    wrapper.find('button').simulate('click');

    expect(destroySpy.calledOnce).toBe(true);
  });
});