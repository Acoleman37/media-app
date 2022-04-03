export const searchMovies = (query) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=97e26b4afc7cfe318d96b58686a726e4&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });
};