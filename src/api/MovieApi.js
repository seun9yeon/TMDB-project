// export async function getMovies() {
//   const baseURL = "https://api.themoviedb.org/3/movie/";
//   const path = "/now_playing";
//   const params = new URLSearchParams({
//     api_key: "6df479b8cb023575db7aca18b3272a6a",
//     language: "ko",
//   });
//   const URL = `${baseURL}${path}?${params}`;

//   const response = await axois.get(URL);
//   const data = await response.data();

//   const movies = data.results;
//   return movies;
// }
