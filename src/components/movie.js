import { Card, Typography } from "@mui/material";
import styled from "styled-components";

const StyledRoot = styled.div({
  maxWidth: 500,
  display: "flex",
  flex: "1 1 500px",
  margin: 16,
  ".card": {
    padding: 16,
    cursor: "pointer",
  },
  h2: {
    fontSize: 20,
    minHeight: 30,
  },
});

const Movie = ({ movie, onClick }) => {
  if (!movie) {
    return null;
  }

  const handleClick = () => {
    onClick(movie.imdbID);
  };

  return (
    <StyledRoot>
      <Card className="card" maxWidth={500} elevation={3} onClick={handleClick}>
        <Typography variant="h2">{movie.Title}</Typography>
        <Typography>{movie.Plot}</Typography>
        <Typography>{movie.Year}</Typography>

        <img src={movie.Poster} width={200} />
      </Card>
    </StyledRoot>
  );
};

export default Movie;
