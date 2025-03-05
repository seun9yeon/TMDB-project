import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY0NzliOGNiMDIzNTc1ZGI3YWNhMThiMzI3MmE2YSIsIm5iZiI6MTczMDA3NjgwNi4xNjUsInN1YiI6IjY3MWVlMDg2NDU0MmUzNzFmZTBiMDFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrQFTvEV0MgwIfNl5vShTMmIqvvd_wOz8QCPeTgbiIg",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data.results);
        setPosts(response.data.results);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchPost();
  }, []);

  
  const getImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`; // 영화 이미지 URL을 반환
  };

  return (
    <div>
      <h2>MovieList</h2>
      {posts.map((movie)=>{
        return(
          <div
            key={movie.id}
          >
          <p>
            {movie.title}
          </p>
          <img src={getImageUrl(movie.poster_path)} alt="" />
          </div>
        )
      })}
    </div>
  );
}
