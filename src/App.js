import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import store, { history } from './store';

import MovieList from './containers/movie_list';

import './index.css';
import './app.css';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<Route exact path="/" component={MovieList} />
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}
