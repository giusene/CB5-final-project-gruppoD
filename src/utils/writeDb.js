import { ref, set } from "firebase/database";
import { database } from "./firebase";

export const writeDb = (newPlayer, score) => {
  const updatedScore = [...score, newPlayer].sort((a, b) => b.score - a.score);
  set(ref(database, "/scoreboard"), updatedScore);
};
