import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../laylout/RootLayout";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/list',
        element: <MovieList/>,
      },
    ],
  },
]);
export default router;