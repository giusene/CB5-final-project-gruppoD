import { createContext } from "react";

const initialState = {
  user: {
    username: localStorage.getItem("user") || "",
  },
  avatar: {
    avatarId: JSON.parse(localStorage.getItem("avatar")) || "",
  },
  initialUser: {
    username: localStorage.getItem("user") || "",
  },
  initialAvatar: {
    avatarId: JSON.parse(localStorage.getItem("avatar")) || "",
  },
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };
