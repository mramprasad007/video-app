import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieList } from '../../actions';

import './style.css';
class MovieList extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getMovieList(1);
	}

	render() {
		console.log(this.props.movieList);
		return (
			<div>
				<div className="header flex items-center shadow-md fixed">
					<div className="back-button">
						<img src="assets/Back.png" />
					</div>
					<div className="page-title">
						{this.props.movieList.pages.title
							? this.props.movieList.pages.title
							: ''}
					</div>
					<div className="m-auto" />
					<div className="search">
						<img src="assets/search.png" />
					</div>
				</div>
				<div />
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
