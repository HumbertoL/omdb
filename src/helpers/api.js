export const searchMovieData = (s) => {
  return fetch("http://www.omdbapi.com/?apikey=6c2bce0&s=" + s, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const fetchMovieData = (id) => {
  return fetch("http://www.omdbapi.com/?apikey=6c2bce0&i=" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
};
