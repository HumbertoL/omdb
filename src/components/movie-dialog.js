import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const MovieDialog = ({ movie, onClose }) => {
  return (
    <Dialog open={Boolean(movie)} onClose={onClose}>
      {movie && (
        <>
          <DialogTitle>
            {movie.Title} ({movie.Year})
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography>Rating {movie.imdbRating}</Typography>
              <Typography>{movie.Plot}</Typography>

              <Typography mt={2}>{movie.Actors}</Typography>
              <Box display="flex" justifyContent={"center"} mt={1}>
                <img src={movie.Poster} width={200} />
              </Box>
            </DialogContentText>
            <DialogActions>
              <Button onClick={onClose}>Close</Button>
            </DialogActions>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default MovieDialog;
