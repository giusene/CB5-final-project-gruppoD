import { ref, set } from "firebase/database";
import { database } from "./firebase";

export const writeDb = (newPlayer, score) => {
  set(ref(database, "/scoreboard"), [...score, newPlayer]);
};
