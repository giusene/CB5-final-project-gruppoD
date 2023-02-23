import styles from "./styles.module.scss";
import { textReplacer } from "../../utils/textReplacer";
import { useEffect } from "react";
import { options } from "../select/Select";

export default function GamePageQuestions({ username, question }) {
  console.log(localStorage.getItem("user"));

  //   const url = JSON.parse(localStorage.getItem("user")).avatar.avatarId;

  //   useEffect(() => {
  //     if (window) {
  //       console.log(localStorage.getItem("username"));
  //     }
  //   }, []);
  return (
    <div className={styles.Question}>
      <div className={styles.userInfo}>
        <h4>{JSON.parse(localStorage.getItem("user")).username}</h4>
      </div>
      {question && <h2>{textReplacer(question.question)}</h2>}
    </div>
  );
}
