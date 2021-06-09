import API_KEY from './api-key.js';
import API from './api-service.js';
import refs from './refs.js';
import movieCardTpl from '../templates/movie-card-template.hbs';

getTrendMovies();

refs.homePageBtn.addEventListener('click', onHomePage);

function onHomePage(e) {
  e.preventDefault();
  getTrendMovies();
}

function getTrendMovies() {
  API.fetchTrendMovie().then(data => {
    console.log(data);
    markupMovieList(data.results);
  });
}

function markupMovieList(movies) {
  refs.movieList.insertAdjacentHTML('beforeend', movieCardTpl(movies));
}
