import styles from "./styles.module.scss";
import { textReplacer } from "../../utils/textReplacer";

export default function GamePageQuestions({ username, question }) {
  return (
    <div className={styles.Question}>
      <div className={styles.userInfo}>
        <h4> {username}</h4>
      </div>
      {question && <h2>{textReplacer(question.question)}</h2>}
    </div>
  );
}
