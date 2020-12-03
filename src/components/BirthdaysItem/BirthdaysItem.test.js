import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import BirthdaysItem from './index';

let container = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('render correct text', () => {
    const fakeEmployee = {
		lastName: 'Doe',
		firstName: 'John',
		dob: '2019-02-26T16:52:36.244Z',
	};

	act(() => {
		render(<BirthdaysItem employee={fakeEmployee} />, container);
	});
    expect(container.textContent).toBe('Doe John - February 26, 2019 year');
});
