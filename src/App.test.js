import React from 'react';
import App from './App';
import { render, configure } from 'enzyme';

import store from './store';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';

// setup file
configure({ adapter: new Adapter() });

// test file

it('renders without crashing', () => {
	render(
		<Provider store={store}>
  		<App />
  	</Provider>);
});
