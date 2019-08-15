import React from 'react';
import { mount } from 'enzyme';


import CommentList from '../CommentList';
import Root from '../../../Root';

let component;

beforeEach(() => {
    const initialState = {
        comments: ['Hello', 'Hi']
    }
    component = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('should create one <li> per comment', () => {
    expect(component.find('li').length).toEqual(2);
});

it('should show text for each comment', () => {
    expect(component.render().text()).toContain('Hello');
    expect(component.render().text()).toContain('Hi');
});
