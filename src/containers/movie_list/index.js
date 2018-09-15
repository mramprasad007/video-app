import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieList, searchMovieList } from '../../actions';

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
			scrollContent.getBoundingClientRect().bottom - 250 <=
			window.innerHeight
		) {
			if (this.props.movieList.pageNo <= 3) {
				this.props.getMovieList(this.props.movieList.pageNo);
			}
		}
	};

	render() {
		console.log('triggered page', this.props.movieList.pageNo - 1);
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
					<div>
						<form className="w-full">
							<div className="flex items-center border-b border-b-2 border-red py-1">
								<input
									className="appearance-none bg-transparent border-none w-full text-grey-light mr-3 py-1 px-2 leading-tight focus:outline-none"
									type="text"
									placeholder="Search"
									aria-label="Full name"
									onChange={e =>
										this.props.searchMovieList(
											e.target.value
										)
									}
								/>
							</div>
						</form>
					</div>
					<div className="search">
						<img src="assets/search.png" />
					</div>
				</div>
				<div className="content flex flex-wrap" id="scroll-content">
					{this.props.movieList.pages
						? this.props.movieList.pages
								.filter(item =>
									item.name
										.toLowerCase()
										.startsWith(
											this.props.movieList.searchText
										)
								)
								.map((item, index) => (
									<div
										className="movie-card w-1/3"
										key={
											this.props.movieList.pageNo +
											'' +
											index
										}
									>
										<div className="movie-img">
											<img
												className="movie-img-src"
												src={
													'assets/' +
													item['poster-image']
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
	getMovieList: pageNo => dispatch(getMovieList(pageNo)),
	searchMovieList: searchText => dispatch(searchMovieList(searchText))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList);
