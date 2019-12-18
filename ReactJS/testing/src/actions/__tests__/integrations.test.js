import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../../Root';
import App from '../../components/App/App';


beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetch 1'}, { name: 'Fetch 2'}]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
	// initialized component
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);
	// call simulate to trigger the action-creator request
	wrapped.find('.fetch-comments').simulate('click');
	// pause for moxios to complete
	// application updates itself
	// run expectation, then complete
	moxios.wait(() => {
		wrapped.update();

		expect(wrapped.find('li').length).toEqual(2);

		done();
		wrapped.unmount();
	});
});
