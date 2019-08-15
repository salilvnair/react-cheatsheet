import React from 'react';
import { mount } from 'enzyme';


import CommentBox from '../CommentBox';
import Root from '../../../Root';

let component;

beforeEach(() => {
    component = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    component.unmount();
});

it('should have a textarea and a button', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(2);
});

describe('textarea specific tests', () => {

    beforeEach(() => {
        component.find('textarea').simulate('change', {
            target: { value : 'new comment' }
        });
        component.update();
    });

    it('should have a textarea where user can type in', () => {
        expect(component.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should let user to submit form and reset textarea', () => {
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });

});
