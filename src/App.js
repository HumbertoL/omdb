import "./App.css";
import { useEffect, useState } from "react";
import { fetchMovieData, searchMovieData } from "./helpers/api";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

import Movie from "./components/movie";
import MovieDialog from "./components/movie-dialog";

const StyledRoot = styled.div({
  width: "100%",
  ".card": {
    padding: 16,
  },
  ".movies-container": {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
  },
  ".search-bar": {
    marginTop: 24,
    marginBottom: 24,
    display: "flex",
    alignItems: "center",
  },
});

function App() {
  const [apiData, setApiData] = useState(null);
  const [searchValue, setSearchValue] = useState("shrek");
  const [singleMovie, setSingleMovie] = useState(null);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    searchMovieData(searchValue).then((res) => {
      console.log(res);

      setApiData(res);
    });
  };

  const handleSingleMovie = (id) => {
    fetchMovieData(id).then((res) => setSingleMovie(res));
  };

  const handleClosedialog = () => {
    setSingleMovie(null);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <StyledRoot className="App">
      <div className="search-bar">
        <TextField onChange={handleChange} value={searchValue} />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="movies-container">
        {apiData?.Search.map((movie) => (
          <Movie movie={movie} onClick={handleSingleMovie} />
        ))}
        <MovieDialog movie={singleMovie} onClose={handleClosedialog} />
      </div>
    </StyledRoot>
  );
}

export default App;
