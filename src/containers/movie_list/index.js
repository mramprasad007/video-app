import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieList } from '../../actions';

import styles from './styles';

class MovieList extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		this.props.getMovieList(1);
	}

	render() {
		console.log(this.props.movieList);
		return (
			<div style={styles.container} className="text-center">
				hello
			</div>
		);
	}
}

const mapStateToProps = state => ({
	movieList: state.movieListReducer
});

const mapDispatchToProps = dispatch => ({
	getMovieList: pageNo => dispatch(getMovieList(pageNo))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList);
