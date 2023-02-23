import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import GamePage from "./routes/gamePage";

import LeaderBoard from "./routes/leaderBoard";
import ErrorPage from './error-page';

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path="gamePage"
        element={<GamePage />}
        errorElement={<ErrorPage />}
      />
     <Route path="leaderBoard" element={<LeaderBoard />} errorElement={<ErrorPage />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
