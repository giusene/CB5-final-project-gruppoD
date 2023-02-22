import { createContext } from "react";

const initialState = {
  user: {
    username: "",
    avatar: "",
  },
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
