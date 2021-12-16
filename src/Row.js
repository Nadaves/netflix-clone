import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, isLargeRow }) {
  const base = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchURL);
      setMovies(data.data.results);
      console.log(data);
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setUrl("");
    } else {
      console.log(item.title);
      movieTrailer(item?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="image-container">
        {movies.map((item) => (
          <img
            key={item.id}
            onClick={() => handleClick(item)}
            className={`rowPosters ${isLargeRow && "largeRowPosters"}`}
            src={
              isLargeRow ? base + item.poster_path : base + item.backdrop_path
            }
            alt={item.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
