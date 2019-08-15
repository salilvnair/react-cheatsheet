import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../comment/CommentBox';
import CommentList from '../comment/CommentList';

let component;

beforeEach(() => {
    component = shallow(<App />);
});

it('should show a comment box', () => {
    expect(component.find(CommentBox).length).toEqual(1);
});

it('should show a comment list', () => {
    expect(component.find(CommentList).length).toEqual(1);
});
