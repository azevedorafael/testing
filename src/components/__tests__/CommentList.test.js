import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentsList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment1', 'Comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates one LI per comment', () => {
    wrapped.find('li').length
});