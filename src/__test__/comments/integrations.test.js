import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import App from '../../components/App';
import Root from '../../Root';

let component;
beforeEach(() => {
    component = mount(
        <Root>
            <App />
        </Root>
    );
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status:200,
        response: [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum"
            },
            {
                "postId": 1,
                "id": 2,
                "name": "quo vero reiciendis velit similique earum"
            }
        ]
    })
});

afterEach(() => {
    moxios.uninstall();
    component.unmount();
});

it('should fetch a list of comments and dispplay them', (done) => {
    
    component.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        component.update();
        expect(component.find('li').length).toEqual(2);
        done();
    });
    
})