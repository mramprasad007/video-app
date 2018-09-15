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
		console.log(this.props.movieList.pages);
		return (
			<div>
				<div className="header flex items-center shadow-md fixed pin-t">
					<div className="back-button">
						<img src="assets/Back.png" />
					</div>
					<div className="page-title">
						{this.props.movieList.pages
							? this.props.movieList.pages.title
							: ''}
					</div>
					<div className="m-auto" />
					<div className="search">
						<img src="assets/search.png" />
					</div>
				</div>
				<div className="content flex flex-wrap">
					{this.props.movieList.pages['content-items']
						? this.props.movieList.pages[
								'content-items'
						  ].content.map((item, index) => (
								<div
									className="movie-card w-1/3"
									key={
										this.props.movieList.pages[
											'page-num-requested'
										] +
										'' +
										index
									}
								>
									<div className="movie-img">
										<img
											className="movie-img-src"
											src={
												'assets/' + item['poster-image']
											}
										/>
									</div>
									<div className="movie-text">
										{item.name}
									</div>
								</div>
						  ))
						: null}
				</div>
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
