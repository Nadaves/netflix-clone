import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchURL }) {
  const [movie, setMovie] = useState([]);
  const base = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      const rand = Math.floor(
        Math.random() * (request.data.results.length - 1)
      );
      setMovie(request.data.results[rand]);
    }
    fetchData();
  }, [fetchURL]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="bannerBackground"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContainer">
        <h1 className="movieTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="movieOverview">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="faderDiv" />
    </header>
  );
}

export default Banner;
