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
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    //   .request(options)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));
    // }

    fetchPost();
  }, []);

  return (
    <div>
      <h2>MovieList</h2>
        {data.results.map((movies) => (
          <li key={movies.id}>
            <h3>{movies.image}</h3>
            <img src= {getImageUrl(movies.poster_path)} alt="movie poster"/>
          </li>
        ))}
    </div>
  );
}
