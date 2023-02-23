import styles from "./styles.module.scss";
import { textReplacer } from "../../utils/textReplacer";

export default function GamePageAnswers({
  question,
  getAnswer,
  score,
  answerColor,
}) {
  return (
    <div className={styles.AnswerContainer}>
      <h4>Correct Answer(s): {score}</h4>
      <div className={styles.AnswerGrid}>
        {question &&
          question.allQuestions.map((item, index) => (
            <h5
              className={styles.Answer}
              style={{
                backgroundColor: answerColor,
              }}
              onClick={() => getAnswer(textReplacer(item))}
              key={index}
            >
              {textReplacer(item)}
            </h5>
          ))}
      </div>
    </div>
  );
}
