import React from 'react';
import CommentBox from './CommentBox';
import { mount } from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

it('shows a text area and shows 2 buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment'}
		});
		wrapped.update();
	});

	it('allows users to enter input into the text area', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('empties textarea when user submits', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});

afterEach(() => {
	wrapped.unmount();
});