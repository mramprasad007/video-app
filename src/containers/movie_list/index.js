import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieList } from '../../actions';

import './style.css';
class MovieList extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll);
		this.props.getMovieList(this.props.movieList.pageNo);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = e => {
		const scrollContent = document.getElementById('scroll-content');
		if (
			Math.floor(scrollContent.getBoundingClientRect().bottom) <=
			window.innerHeight
		) {
			if (this.props.movieList.pageNo <= 3) {
				this.props.getMovieList(this.props.movieList.pageNo);
			}
		}
	};

	render() {
		return (
			<div>
				<div className="header flex items-center shadow-md fixed pin-t">
					<div className="back-button">
						<img src="assets/Back.png" />
					</div>
					<div className="page-title">
						{this.props.movieList.pageName
							? this.props.movieList.pageName
							: ''}
					</div>
					<div className="m-auto" />
					<div className="search">
						<img src="assets/search.png" />
					</div>
				</div>
				<div className="content flex flex-wrap" id="scroll-content">
					{this.props.movieList.pages
						? this.props.movieList.pages.map((item, index) => (
								<div
									className="movie-card w-1/3"
									key={
										this.props.movieList.pageNo + '' + index
									}
								>
									<div className="movie-img">
										<img
											className="movie-img-src"
											src={
												'assets/' + item['poster-image']
											}
											onError={e => {
												e.target.src =
													'assets/placeholder_for_missing_posters.png';
											}}
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
