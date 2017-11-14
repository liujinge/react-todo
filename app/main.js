import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/toDoAppContainer';
import configureStore from './redux/reducers';

import './less/base.less';

const store = configureStore();

ReactDom.render(
	<Provider store={store}>
		<ToDoAppContainer />
	</Provider>,
	document.getElementById('kaka')
);