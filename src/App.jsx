import Home from "./routes/home/Home";
import GamePage from "./routes/gamePage";
import { useReducer } from "react";
import { globalReducer } from "./store/reducers";
import { initialState } from "./store";
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />
    </ApplicationCtx.Provider>
  );
}

export default App;
