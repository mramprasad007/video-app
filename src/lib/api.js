export function getMovieList(pageNo) {
	return fetch('mocks/CONTENTLISTINGPAGE-PAGE' + pageNo + '.json', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => response.json());
}
