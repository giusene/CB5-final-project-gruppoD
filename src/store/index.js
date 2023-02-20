import { createContext } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || [],
  initialUser: JSON.parse(localStorage.getItem("user")) || [],
  user: {
    username: localStorage.getItem("user"),
  },
  currentEditNote: null,
  isModalOpen: false,
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
