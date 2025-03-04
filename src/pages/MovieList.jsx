import React from 'react'
import { useEffect } from 'react';

export default function MovieList() {
  const [posts, setPosts] =useState([]);

  useEffect{() => {
    const function fetchPost() {
    const url = "";
    const response = await axios.get(url);
    const data = response.data;
    setPosts(data);
    }

    fetchPost();
  },[]};
  
  return (
    <div></div>
  )
}
