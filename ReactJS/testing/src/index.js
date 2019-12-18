import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Root from './Root';

ReactDOM.render(
	<Root>
		<App />
	</Root>, 
	document.querySelector('#root')
);