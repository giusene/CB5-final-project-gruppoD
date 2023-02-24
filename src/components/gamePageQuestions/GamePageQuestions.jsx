import styles from "./styles.module.scss";
import { textReplacer } from "../../utils/textReplacer";

export default function GamePageQuestions({ username, question }) {
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
