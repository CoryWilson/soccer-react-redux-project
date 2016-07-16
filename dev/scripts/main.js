// Import npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './components/test-component.js';

// Element to anchor to 
const root = document.getElementById('root');

// Base component
class App extends React.Component {
	render() {
		return(
			<div>
				<TestComponent />
			</div>
		);
	}
};

// Render to the DOM
ReactDOM.render(<App />, root);