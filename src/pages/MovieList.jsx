import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const url = "https://api.themoviedb.org/3/movie/now_playing";
      const response = await axios.get(url);
      const data = response.data;
      setPosts(data);
    }

    fetchPost();
  }, []);

  return (
    <div>
      <h2>MovieList</h2>
      <ul>
        {posts.map((data) => (
        <h3>{data.title}</h3>
    ))}
      </ul>
    </div>
  );
}
