import styles from "./styles.module.scss";
import { textReplacer } from "../../utils/textReplacer";
import { useEffect } from "react";

export default function GamePageQuestions({ username, question }) {
  //   useEffect(() => {
  //     if (window) {
  //       console.log(localStorage.getItem("username"));
  //     }
  //   }, []);
  return (
    <div className={styles.Question}>
      <div className={styles.userInfo}>
        <h4>{JSON.parse(localStorage.getItem("user")).username}</h4>
        <img src={JSON.parse(localStorage.getItem("user")).avatar} />
      </div>
      {question && <h2>{textReplacer(question.question)}</h2>}
    </div>
  );
}
