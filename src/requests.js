const api = "ef1ff3445c0565983b2247f4c79fa617";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${api}&with_genres=28`,
  fetchDocumnetaries: `/discover/movie?api_key=${api}&with_genres=99`,
  fetchComedy: `/discover/movie?api_key=${api}&with_genres=35`,
  fetchRomance: `/discover/movie?api_key=${api}&with_genres=10749`,
  fetchHorror: `/discover/movie?api_key=${api}&with_genres=27`,
};

export default requests;
