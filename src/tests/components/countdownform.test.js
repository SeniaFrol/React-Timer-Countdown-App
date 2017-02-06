import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import CountdownForm from '../../components/countdownform.js';

describe('CountwownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDom.findDOMNode(countdownform));

    countdownform.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);

  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDom.findDOMNode(countdownform));

    countdownform.refs.seconds.value = '109b';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();

  });
});
